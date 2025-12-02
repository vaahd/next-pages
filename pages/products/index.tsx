import FilterableProductList from "../components/FilterableProductList"
import products from "../data/products.json"

export const revalidate = 60

export default function ProductsPage() {
  const categories = [...new Set(products.map(p => p.category))]

  return (
    <div className="container py-5 mt-5">
      <h1 className="mb-4 text-center text-md-start">Products</h1>
      <FilterableProductList serverProducts={products} categories={categories}/>
    </div>
  )
}