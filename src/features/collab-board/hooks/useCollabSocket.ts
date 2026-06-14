import { useReducer, useEffect, useRef, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import type { CollabState, CollabAction, CollabCard, CursorPosition } from '../../../types';

const MOCK_USERS = [
  { userId: 'bot-1', username: 'Alice', color: '#6c3ce0' },
  { userId: 'bot-2', username: 'Bob', color: '#2563eb' },
];

function collabReducer(state: CollabState, action: CollabAction): CollabState {
  switch (action.type) {
    case 'MOVE_CARD': {
      const { cardId, toColumn, toIndex } = action.payload;
      const cards = state.cards.map(c =>
        c.id === cardId ? { ...c, column: toColumn, order: toIndex } : c
      );
      return { ...state, cards };
    }
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload] };
    case 'DELETE_CARD':
      return { ...state, cards: state.cards.filter(c => c.id !== action.payload.cardId) };
    case 'UPDATE_CURSORS':
      return { ...state, cursors: action.payload };
    case 'SET_CONNECTED':
      return { ...state, connected: action.payload };
    case 'ROLLBACK':
      return { ...state, cards: action.payload };
    default:
      return state;
  }
}

const initialCards: CollabCard[] = [
  { id: uuid(), title: 'Design system tokens', description: 'Define color and spacing primitives', column: 'todo', order: 0, color: '#6c3ce0' },
  { id: uuid(), title: 'API integration', description: 'Connect REST endpoints to dashboard', column: 'todo', order: 1, color: '#2563eb' },
  { id: uuid(), title: 'Canvas renderer', description: 'Implement HTML5 Canvas layer compositing', column: 'in-progress', order: 0, color: '#059669' },
  { id: uuid(), title: 'Auth flow', description: 'JWT token refresh and session management', column: 'in-progress', order: 1, color: '#d97706' },
  { id: uuid(), title: 'Unit tests', description: 'Testing Library coverage for hooks', column: 'done', order: 0, color: '#6c3ce0' },
];

/**
 * Simulates a WebSocket connection for multi-user collaboration.
 * Broadcasts mock cursor positions and handles optimistic card moves
 * with rollback capability on simulated network failures.
 */
export function useCollabSocket() {
  const [state, dispatch] = useReducer(collabReducer, {
    cards: initialCards,
    cursors: [],
    connected: true,
  });

  const snapshotRef = useRef<CollabCard[]>(initialCards);
  const cursorIntervalRef = useRef<number | null>(null);

  // Simulate remote cursor movements
  useEffect(() => {
    cursorIntervalRef.current = window.setInterval(() => {
      const cursors: CursorPosition[] = MOCK_USERS.map(user => ({
        ...user,
        x: 100 + Math.random() * 600,
        y: 100 + Math.random() * 300,
      }));
      dispatch({ type: 'UPDATE_CURSORS', payload: cursors });
    }, 2000);

    dispatch({ type: 'SET_CONNECTED', payload: true });

    return () => {
      if (cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
    };
  }, []);

  const moveCard = useCallback((cardId: string, toColumn: string, toIndex: number) => {
    // Snapshot before optimistic update
    snapshotRef.current = [...state.cards];
    dispatch({ type: 'MOVE_CARD', payload: { cardId, toColumn, toIndex } });

    // Simulate 10% network failure rate for demonstrating rollback
    setTimeout(() => {
      if (Math.random() < 0.1) {
        dispatch({ type: 'ROLLBACK', payload: snapshotRef.current });
        dispatch({ type: 'SET_CONNECTED', payload: false });
        setTimeout(() => dispatch({ type: 'SET_CONNECTED', payload: true }), 2000);
      }
    }, 300);
  }, [state.cards]);

  const addCard = useCallback((title: string, column: string) => {
    const card: CollabCard = {
      id: uuid(),
      title,
      description: '',
      column,
      order: state.cards.filter(c => c.column === column).length,
      color: '#6c3ce0',
    };
    dispatch({ type: 'ADD_CARD', payload: card });
  }, [state.cards]);

  const deleteCard = useCallback((cardId: string) => {
    dispatch({ type: 'DELETE_CARD', payload: { cardId } });
  }, []);

  return { state, moveCard, addCard, deleteCard };
}
