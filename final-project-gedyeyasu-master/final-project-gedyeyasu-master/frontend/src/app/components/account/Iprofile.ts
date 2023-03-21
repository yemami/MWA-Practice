export interface Iprofile {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  address: { state: String; city: String; street: String; zipCode: String };
}
