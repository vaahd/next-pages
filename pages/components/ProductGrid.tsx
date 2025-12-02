'use client'
import { Product } from "../../types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ serverProducts }: { serverProducts: Product[] }) {
  return (
    <div className="row g-4">

      {serverProducts.map((p) => (
        <div
          key={p.id}
          className="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <ProductCard product={p} />
        </div>
      ))}

    </div>
  );
}