import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section mt-5 pt-5 pb-4 bg-light">
      <div className="container">

        <div className="row text-center text-md-start gy-4">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
              <img src="/logo.png" alt="logo" style={{ width: 50, height: 50, objectFit: "contain" }}/>
              <h5 className="m-0 fw-bold">Clicks</h5>
            </div>

            <p className="mt-3 text-muted px-3 px-md-0">
              Better products. Better prices.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li className="mb-2"><Link href="/products">Products</Link></li>
              <li className="mb-2"><Link href="/cart">Cart</Link></li>
              <li className="mb-2"><Link href="/wishlist">Wishlist</Link></li>
              <li className="mb-2"><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="fw-bold mb-3">Contact</h6>

            <p className="text-muted mb-2 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i className="bi bi-telephone-fill"></i> +91 9876543210
            </p>

            <p className="text-muted mb-2 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i className="bi bi-envelope-at-fill"></i> support@clicks.com
            </p>

            <p className="text-muted d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i className="bi bi-geo-alt-fill"></i> Kerala, India
            </p>
          </div>

        </div>

        <hr className="my-4" />
        <div className="text-center pt-2">
          <small className="text-muted">
            © 2025 Clicks — Your Trusted E-Commerce Store. All rights reserved.
          </small>
        </div>

      </div>
    </footer>
  );
}