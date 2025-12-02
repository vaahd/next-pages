export default function Featured() {
  return (
    <section className="featured py-4">
      <div className="container">

        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between">
          <h3 className="mb-1 mb-sm-0">Featured Collections</h3>
          <small className="text-muted">Top picks for you</small>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card p-3 h-100 shadow-sm">
              <h6>Work Essentials</h6>
              <p className="text-muted small">Durable and stylish picks</p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card p-3 h-100 shadow-sm">
              <h6>Home & Living</h6>
              <p className="text-muted small">Make your space cozy</p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card p-3 h-100 shadow-sm">
              <h6>Gadgets</h6>
              <p className="text-muted small">Handpicked tech</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}