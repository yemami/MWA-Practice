import ICartItem from "./ICarItem"

export default interface IOrder {
  _id?: String,
  rating?: Number,
  total?: Number,
  subTotal?: Number,
  createdAt?: Date,
  updatedAt?: Date,

  items: ICartItem[]
  deliveryAddress?: {
    state: String,
    city: String,
    street: String,
    zipCode: Number
  }
}
