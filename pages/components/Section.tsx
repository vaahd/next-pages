import Link from "next/link";
import Image from "next/image";
export default function Section() {
  return (
    <section className="site-hero py-5">
      <div className="container">

        <div className="row align-items-center gy-5">
          <div className="col-12 col-md-6 text-center text-md-start">

            <h1 className="display-5 hero-title">
              Discover modern essentials <br /> for your everyday life
            </h1>

            <p className="lead text-muted mt-3">
              Premium products, curated collections and fast delivery.
              Shop with confidence.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-2 mt-4 justify-content-center justify-content-md-start">
              <Link href="/products" className="btn btn-primary btn-lg w-100 w-sm-auto">
                Shop Now
              </Link>
              <Link href="/products" className="btn btn-outline-secondary btn-lg w-100 w-sm-auto">
                Explore Collections
              </Link>
            </div>
            <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <div><strong>Free</strong> shipping over $75</div>
              <div><strong>30-day</strong> returns</div>
              <div><strong>Secure</strong> payments</div>
            </div>

          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">

            <div className="hero-card p-4 border rounded shadow-sm" style={{ maxWidth: "420px" }}>

              <div className="d-flex align-items-center gap-3 mb-3">
                <Image src="/logo.png"
                  alt="Brand"
                  width= {64} height= {64}
                  style={{ objectFit: "contain" }}
                />
                <div>
                  <h5 className="mb-0">Clicks Premium</h5>
                  <small className="text-muted">Curated picks for you</small>
                </div>
              </div>

              <div>
                <Image
                  src="/premium.png"
                  alt="spot"
                  className="img-fluid"
                  height= {220}
                  width={220}
                  style={{ objectFit: "contain", width: "100%" }}
                />
              </div>

              <div className="mt-3 d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Starting at</div>
                  <div className="h5 mb-0 text-primary">$29</div>
                </div>

                <Link href="/products" className="btn btn-outline-primary btn-accent">
                  View Offers
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}