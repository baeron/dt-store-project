import Product from "./product.model";

enum Status {
  Fulfilled = "fulfilled",
  Pending = "pending"
}

export default interface Order {
  id?: number;
  userId?: number;
  userEmail?: string;
  orderId?: number;
  status?: Status;
  totalPrice?: number;
  totalItems?: number;
  userOrders?: Product[];
}
