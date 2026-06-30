import { useState, useEffect } from "react";

const TOAST_LIMIT = 20;
const TOAST_REMOVE_DELAY = 1000000;
let count = 0;
function genId() { count = (count + 1) % Number.MAX_VALUE; return count.toString(); }
const toastTimeouts = new Map();
const listeners = [];
let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TOAST": return { ...state, toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) };
    case "DISMISS_TOAST": {
      if (action.toastId) {
        if (!toastTimeouts.has(action.toastId)) {
          const t = setTimeout(() => { toastTimeouts.delete(action.toastId); dispatch({ type: "REMOVE_TOAST", toastId: action.toastId }); }, TOAST_REMOVE_DELAY);
          toastTimeouts.set(action.toastId, t);
        }
      }
      return { ...state, toasts: state.toasts.map((t) => t.id === action.toastId || action.toastId === undefined ? { ...t, open: false } : t) };
    }
    case "REMOVE_TOAST": return { ...state, toasts: state.toasts.filter((t) => t.id !== action.toastId) };
    default: return state;
  }
}

export function toast({ ...props }) {
  const id = genId();
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({ type: "ADD_TOAST", toast: { ...props, id, open: true, onOpenChange: (open) => { if (!open) dismiss(); } } });
  return { id, dismiss };
}

export function useToast() {
  const [state, setState] = useState(memoryState);
  useEffect(() => {
    listeners.push(setState);
    return () => { const i = listeners.indexOf(setState); if (i > -1) listeners.splice(i, 1); };
  }, [state]);
  return { ...state, toast, dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }) };
}
