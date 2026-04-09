// ─── Inquiry Cart Context ─────────────────────────────────────────────────────
// Lightweight React Context + useReducer for managing selected gallery items.
// This is NOT a payment cart — it's an inquiry selection list sent via WhatsApp.

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import type { GalleryItem, CartItem } from '../types';

// ─── State & Actions ──────────────────────────────────────────────────────────

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; item: GalleryItem }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'TOGGLE_CART' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const alreadyInCart = state.items.some((i) => i.galleryItem.id === action.item.id);
      if (alreadyInCart) return { ...state, isOpen: true };
      return {
        ...state,
        isOpen: true,
        items: [...state.items, { galleryItem: action.item, addedAt: Date.now() }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.galleryItem.id !== action.id),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

// ─── Context & Hook ───────────────────────────────────────────────────────────

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: GalleryItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  isInCart: (id: string) => boolean;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((item: GalleryItem) => dispatch({ type: 'ADD_ITEM', item }), []);
  const removeItem = useCallback((id: string) => dispatch({ type: 'REMOVE_ITEM', id }), []);
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), []);
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), []);
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), []);
  const isInCart = useCallback((id: string) => state.items.some((i) => i.galleryItem.id === id), [state.items]);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        addItem,
        removeItem,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        isInCart,
        itemCount: state.items.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
