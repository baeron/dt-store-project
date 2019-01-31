import Product from "./product.model";

export default interface Category {
  id: number;
  backgroundImage: string;
  categoryDescroption: string;
  categoryName: string;
  categoryShortDescroption: string;
  products?: Product[];
}
