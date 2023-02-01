import { Cart } from '../../Interfaces/Cart'
import { CartItem } from '../../Interfaces/CartItem'
import { ActionTypes } from './actions'

export function cartItemsReducer(state: Cart, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      const itemIncluded = state.items.some(
        (item) => item.id === action.payload.item.id,
      )

      if (itemIncluded) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.item.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.item.quantity,
                }
              : item,
          ),
          subtotal:
            state.subtotal +
            action.payload.item.quantity * action.payload.item.price,
          total:
            state.subtotal +
            action.payload.item.quantity * action.payload.item.price,
        }
      }

      return {
        ...state,
        items: [...state.items, action.payload.item],
        subtotal: action.payload.item.quantity * action.payload.item.price,
        total: action.payload.item.quantity * action.payload.item.price,
      }

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item: CartItem) => item.id !== action.payload.itemId,
        ),
      }

    case ActionTypes.INCREASE_ITEM_TO_CART:
      return {
        ...state,
        items: state.items.map((item: CartItem) => {
          if (item.id === action.payload.itemId) {
            return {
              ...item,
              quantity: item.quantity ? item.quantity + 1 : 1,
            }
          }
          return item
        }),
      }

    case ActionTypes.DECREASE_ITEM_TO_CART:
      return {
        ...state,
        items: state.items.map((item: CartItem) => {
          if (item.id === action.payload.itemId) {
            return {
              ...item,
              quantity: item.quantity <= 1 ? 1 : item.quantity - 1,
            }
          }
          return item
        }),
      }

    default:
      return state
  }
}
