import { useState, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import { motion, AnimatePresence } from 'framer-motion';
import { useCollabSocket } from '../hooks/useCollabSocket';
import type { CollabCard } from '../../../types';

const COLUMNS = [
  { id: 'todo', label: 'To Do', color: '#6c3ce0' },
  { id: 'in-progress', label: 'In Progress', color: '#2563eb' },
  { id: 'done', label: 'Done', color: '#059669' },
];

export function CollabBoard() {
  const { state, moveCard, addCard, deleteCard } = useCollabSocket();
  const [newCardText, setNewCardText] = useState('');
  const [addingTo, setAddingTo] = useState<string | null>(null);

  const cardsByColumn = useMemo(() => {
    const grouped: Record<string, CollabCard[]> = {};
    COLUMNS.forEach(col => { grouped[col.id] = []; });
    state.cards.forEach(card => {
      if (grouped[card.column]) grouped[card.column].push(card);
    });
    Object.values(grouped).forEach(arr => arr.sort((a, b) => a.order - b.order));
    return grouped;
  }, [state.cards]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { draggableId, destination } = result;
    moveCard(draggableId, destination.droppableId, destination.index);
  };

  const handleAddCard = (column: string) => {
    if (!newCardText.trim()) return;
    addCard(newCardText.trim(), column);
    setNewCardText('');
    setAddingTo(null);
  };

  return (
    <div className="w-full">
      {/* Connection status */}
      <AnimatePresence>
        {!state.connected && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium"
          >
            Network conflict detected. Rolling back changes...
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor indicators */}
      <div className="relative mb-4 h-6">
        {state.cursors.map(cursor => (
          <motion.div
            key={cursor.userId}
            animate={{ x: cursor.x / 4, y: cursor.y / 30 }}
            transition={{ type: 'spring', damping: 20 }}
            className="absolute flex items-center gap-1"
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cursor.color }} />
            <span className="text-xs font-mono" style={{ color: cursor.color }}>{cursor.username}</span>
          </motion.div>
        ))}
      </div>

      {/* Board */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COLUMNS.map(column => (
            <div key={column.id} className="bg-[var(--color-surface2)] rounded-2xl p-4 min-h-[300px]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: column.color }} />
                  <h3 className="font-semibold text-base">{column.label}</h3>
                  <span className="text-xs font-mono text-[var(--color-muted)] bg-white px-2 py-0.5 rounded-full border border-[var(--color-border)]">
                    {cardsByColumn[column.id]?.length || 0}
                  </span>
                </div>
                <button
                  onClick={() => setAddingTo(addingTo === column.id ? null : column.id)}
                  className="text-[var(--color-muted)] hover:text-[var(--color-accent)] text-xl leading-none transition-colors"
                >
                  +
                </button>
              </div>

              {addingTo === column.id && (
                <div className="mb-3 flex gap-2">
                  <input
                    value={newCardText}
                    onChange={e => setNewCardText(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddCard(column.id)}
                    placeholder="Card title..."
                    className="flex-1 text-sm px-3 py-2 rounded-lg border border-[var(--color-border)] bg-white focus:outline-none focus:border-[var(--color-accent)]"
                    autoFocus
                  />
                  <button
                    onClick={() => handleAddCard(column.id)}
                    className="px-3 py-2 text-sm font-medium text-white rounded-lg"
                    style={{ background: column.color }}
                  >
                    Add
                  </button>
                </div>
              )}

              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`space-y-3 min-h-[100px] rounded-xl p-1 transition-colors ${
                      snapshot.isDraggingOver ? 'bg-[var(--color-accent)]/5' : ''
                    }`}
                  >
                    {cardsByColumn[column.id]?.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`bg-white rounded-xl p-4 border border-[var(--color-border)] shadow-sm transition-shadow group ${
                              snapshot.isDragging ? 'shadow-lg rotate-2' : 'hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="w-8 h-1 rounded-full mb-2" style={{ backgroundColor: card.color }} />
                                <p className="text-sm font-medium text-[var(--color-text)]">{card.title}</p>
                                {card.description && (
                                  <p className="text-xs text-[var(--color-muted)] mt-1">{card.description}</p>
                                )}
                              </div>
                              <button
                                onClick={() => deleteCard(card.id)}
                                className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 text-xs transition-opacity"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
