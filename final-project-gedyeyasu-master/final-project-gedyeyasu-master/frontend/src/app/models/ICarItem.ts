
export default interface ICartItem {
  _id: String,
  restaurantId?: String,
  category: String,
  name: String,
  price: number,
  image: String,
  description: String,
  amount?: number
}
