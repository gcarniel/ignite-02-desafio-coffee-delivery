import { Cart } from '../../Interfaces/Cart'
import { CartItem } from '../../Interfaces/CartItem'
import { ActionTypes } from './actions'

export function cartItemsReducer(state: Cart, action: any) {
  const { subtotal, total } = calculateTotals(state, action)
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
          total,
          subtotal,
        }
      }

      return {
        ...state,
        items: [...state.items, action.payload.item],
        total,
        subtotal,
      }

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item: CartItem) => item.id !== action.payload.itemId,
        ),
        total,
        subtotal,
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
        total,
        subtotal,
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
        total,
        subtotal,
      }

    default:
      return state
  }
}

const calculateTotals = (state: any, action: any) => {
  let total = state.total
  let subtotal = state.subtotal
  let item = null

  if (action.payload.itemId) {
    item = state.items.find(
      (item: CartItem) => item.id === action.payload.itemId,
    )
  }
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      const itemFounded = state.items.find(
        (item: CartItem) => item.id === action.payload.item.id,
      )
      subtotal += itemFounded
        ? itemFounded.price * itemFounded.quantity
        : action.payload.item.price * action.payload.item.quantity

      total += itemFounded
        ? itemFounded.price * itemFounded.quantity
        : action.payload.item.price * action.payload.item.quantity
      break
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      subtotal -= item.price * item.quantity
      total -= item.price * item.quantity
      break

    case ActionTypes.INCREASE_ITEM_TO_CART:
      subtotal += item.price
      total += item.price
      break

    case ActionTypes.DECREASE_ITEM_TO_CART:
      if (item?.quantity === 1) {
        total = item.price
        subtotal = item.price
        break
      }
      subtotal -= item.price
      total -= item.price
      break
  }

  return {
    total,
    subtotal,
  }
}
