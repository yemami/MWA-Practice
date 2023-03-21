export interface RestaurantInterface {
  _id: string;
  name: string;
  cuisine: string;
  picture: { imageUrl: string; logoUrl: string };
  rating: number;
  description: string;
  deliveryTime: number;
}
