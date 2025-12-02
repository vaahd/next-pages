import Section from "./components/Section"
import Featured from "./components/Featured"
import ProductGrid from "./components/ProductGrid"
import ScrollAnimator from "./components/ScrollAnimator"

import products from "./data/products.json"

export const revalidate = 60

export default function Home() {
  const popular = products.slice(0, 8)

  return (
    <div className="pt-5">
      <ScrollAnimator />
      <div className="container mb-5 reveal">
        <Section />
      </div>
      <main className="container">
        <div className="my-4 reveal">
          <Featured />
        </div>

        <h2 className="mt-5 mb-3 text-center text-md-start reveal">
          Popular products
        </h2>

        <div className="reveal">
          <ProductGrid serverProducts={popular} />
        </div>

      </main>

    </div>
  )
}
