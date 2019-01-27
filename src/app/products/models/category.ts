import { Product } from "./product.model";

export interface Category {
  categoryId?: number;
  categoryName: string;
  categoryDescription: string;
  categoryUrl: string;
  products?: Product[];
}
