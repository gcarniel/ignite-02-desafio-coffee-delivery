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
          (item: CartItem) => item.id !== action.payload.id,
        ),
      }

    default:
      return state
  }
}
