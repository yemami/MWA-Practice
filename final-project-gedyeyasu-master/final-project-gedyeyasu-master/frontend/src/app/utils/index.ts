import ICartItem from "../models/ICarItem"
import IOrder from "../models/IOrder"

export function combineMenuItems(items: ICartItem[]) {
  return items.map(item => item.name).join(' - ')
}

export function calculateTotalItems(order: IOrder) {
  return order.items.reduce((acc, item) => acc + (item.amount || 0), 0)
}

export function calculateSubTotalPrice(cartItems: ICartItem[]) {
  return cartItems.reduce(
      (acc, cartItem) => acc + (cartItem.amount || 0) * cartItem.price, 0
  )
}

export function calculateTotalPrice (subTotal: number) {
  return (subTotal * 1.15).toFixed(2); // flat 15% charge
}

export function calculateTax (subTotal: number) {
  return (subTotal * 0.15).toFixed(2); // flat 15% charge
}

export function calculateSingleItemPrice (cartItem: ICartItem) {
  return (cartItem.price * (cartItem.amount || 0)).toFixed(2);
}
