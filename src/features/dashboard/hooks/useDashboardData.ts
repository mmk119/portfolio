import { useState, useMemo, useCallback } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import type { LogEntry, DashboardFilters, ChartDataPoint } from '../../../types';

const CATEGORIES = ['api', 'auth', 'database', 'network', 'ui', 'worker'];
const SOURCES = ['server-1', 'server-2', 'edge-cdn', 'lambda', 'cron'];
const MESSAGES = [
  'Request processed successfully',
  'Authentication token refreshed',
  'Database query executed in {}ms',
  'Rate limit threshold approaching',
  'Cache invalidation triggered',
  'WebSocket connection established',
  'Memory usage spike detected',
  'Deployment pipeline completed',
  'SSL certificate renewal pending',
  'API response time degraded',
];

function generateMockLogs(count: number): LogEntry[] {
  const now = Date.now();
  const levels: LogEntry['level'][] = ['info', 'warn', 'error', 'debug'];
  const entries: LogEntry[] = [];

  for (let i = 0; i < count; i++) {
    entries.push({
      id: `log-${i}`,
      timestamp: now - Math.random() * 86400000 * 7,
      level: levels[Math.floor(Math.random() * levels.length)],
      message: MESSAGES[Math.floor(Math.random() * MESSAGES.length)].replace('{}', String(Math.floor(Math.random() * 500))),
      category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
      source: SOURCES[Math.floor(Math.random() * SOURCES.length)],
      responseTime: Math.floor(Math.random() * 2000),
    });
  }

  return entries.sort((a, b) => b.timestamp - a.timestamp);
}

// Generate once at module level to avoid re-creating on every render
const ALL_LOGS = generateMockLogs(10000);

/**
 * Manages 10,000+ log entries with in-memory filtering.
 * useDebounce prevents re-filtering on every keystroke.
 * useMemo ensures filtered results are only recomputed
 * when debounced filter values actually change.
 */
export function useDashboardData() {
  const [filters, setFilters] = useState<DashboardFilters>({
    search: '',
    levels: [],
    categories: [],
    dateRange: null,
  });

  const debouncedSearch = useDebounce(filters.search, 250);

  // useMemo: Avoids re-filtering 10k entries on unrelated state changes
  const filteredLogs = useMemo(() => {
    return ALL_LOGS.filter(log => {
      if (debouncedSearch && !log.message.toLowerCase().includes(debouncedSearch.toLowerCase())) return false;
      if (filters.levels.length > 0 && !filters.levels.includes(log.level)) return false;
      if (filters.categories.length > 0 && !filters.categories.includes(log.category)) return false;
      if (filters.dateRange) {
        const [start, end] = filters.dateRange;
        if (log.timestamp < start || log.timestamp > end) return false;
      }
      return true;
    });
  }, [debouncedSearch, filters.levels, filters.categories, filters.dateRange]);

  // useMemo: Chart data is expensive to aggregate; only recompute when filteredLogs changes
  const chartData = useMemo((): ChartDataPoint[] => {
    const buckets: Record<string, { info: number; warn: number; error: number; totalResponse: number; count: number }> = {};

    filteredLogs.slice(0, 5000).forEach(log => {
      const hour = new Date(log.timestamp).toISOString().slice(0, 13);
      if (!buckets[hour]) buckets[hour] = { info: 0, warn: 0, error: 0, totalResponse: 0, count: 0 };
      buckets[hour][log.level === 'debug' ? 'info' : log.level]++;
      buckets[hour].totalResponse += log.responseTime;
      buckets[hour].count++;
    });

    return Object.entries(buckets)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-24)
      .map(([time, data]) => ({
        time: time.slice(11) + ':00',
        info: data.info,
        warn: data.warn,
        error: data.error,
        avgResponseTime: Math.round(data.totalResponse / (data.count || 1)),
      }));
  }, [filteredLogs]);

  const stats = useMemo(() => ({
    total: filteredLogs.length,
    errors: filteredLogs.filter(l => l.level === 'error').length,
    avgResponseTime: Math.round(filteredLogs.reduce((s, l) => s + l.responseTime, 0) / (filteredLogs.length || 1)),
    categories: CATEGORIES,
  }), [filteredLogs]);

  const updateFilter = useCallback(<K extends keyof DashboardFilters>(key: K, value: DashboardFilters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  return { logs: filteredLogs, chartData, stats, filters, updateFilter };
}
