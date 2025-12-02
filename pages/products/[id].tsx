import { GetServerSideProps } from "next";
import products from "../data/products.json";
import { Product } from "../../types/product";
import ProductDetailClient from "../components/ProductDetailClient";

interface Props {
  product: Product | null;
}

export default function ProductPage({ product }: Props) {
  if (!product) {
    return <h2 className="text-center py-5">Product not found</h2>;
  }

  return (
    <div className="container py-5 mt-4">
      <ProductDetailClient product={product} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;   // ✔ Pages router correct way
  const productId = Number(id);

  const product = products.find((p: Product) => p.id === productId) || null;

  return {
    props: {
      product,
    },
  };
};
