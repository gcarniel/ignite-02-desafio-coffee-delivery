import { CartItem } from '../../Interfaces/CartItem'

export enum ActionTypes {
  INCREMENT_ITEM_TO_CART = 'INCREMENT_ITEM_TO_CART',
  DECREMENT_ITEM_TO_CART = 'DECREMENT_ITEM_TO_CART',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export function addItemToCart(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { item },
  }
}
export function removeItemFromCart(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: item.id,
  }
}
