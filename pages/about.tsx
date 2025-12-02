"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {

  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el: any) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5 reveal">
        <h1 className="fw-bold display-5">About Us</h1>
        <p className="mx-auto mt-3" style={{ maxWidth: "700px" }}>
          We are a modern online marketplace delivering high-quality
          electronics, fashion essentials, accessories, home products,
          and smart gadgets — all designed to make your lifestyle smarter,
          easier and more enjoyable.
        </p>

        <Image
          src="/servic-e.png"
          alt="About Image"
          width={350}
          height={350}
          className="img-fluid rounded shadow mt-4"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="row align-items-center g-4 mt-5">
        <div className="col-md-6 reveal">
          <Image
            src="/aboutus2.png"
            alt="Our Story"
            width={600}
            height={400}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6 reveal">
          <h2 className="fw-bold mb-3">Our Story</h2>
          <p>
            Our journey began with a simple idea: to create a platform where
            people can buy premium products without confusion, delays, or
            compromise in quality.
          </p>

          <p>
            From trending electronics to stylish fashion, from smart gadgets
            to essential home products — we handpick every item to ensure
            the perfect blend of quality, affordability, and trust.
          </p>

          <p>
            Today, we proudly serve thousands of users with a fast,
            modern and user-friendly shopping experience.
          </p>
        </div>
      </div>
      <div className="row g-4 mt-5">
        <div className="col-md-6 reveal">
          <div className="p-4 border rounded shadow-sm h-100 bg-white">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-bullseye fs-2 text-primary me-3"></i>
              <h3 className="mb-0 contact">Our Vision</h3>
            </div>
            <p className="contact">
              To build the most trusted e-commerce platform where customers
              can discover top-quality products at fair prices — with a smooth,
              fast and enjoyable shopping experience.
            </p>
          </div>
        </div>

        <div className="col-md-6 reveal">
          <div className="p-4 border rounded shadow-sm h-100 bg-white">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-lightbulb fs-2 text-warning me-3"></i>
              <h3 className="mb-0 contact">Our Mission</h3>
            </div>
            <p className="contact">
              To deliver reliable electronics, stylish fashion, smart gadgets,
              modern accessories and premium home products — while maintaining
              speed, transparency, and 100% customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 reveal">
        <h2 className="fw-bold text-center mb-4">Our Core Values</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 text-center border rounded shadow-sm h-100 bg-white">
              <i className="bi bi-stars fs-1 text-warning"></i>
              <h4 className="mt-3 contact">Innovation</h4>
              <p className="contact">We bring modern shopping trends, smart gadgets and improved user experience.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 text-center border rounded shadow-sm h-100 bg-white">
              <i className="bi bi-gear-wide-connected fs-1 text-primary"></i>
              <h4 className="mt-3 contact">Quality</h4>
              <p className="contact">Each product is selected based on build quality, performance and long-term value.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 text-center border rounded shadow-sm h-100 bg-white">
              <i className="bi bi-people fs-1 text-success"></i>
              <h4 className="mt-3 contact">User-Focus</h4>
              <p className="contact">We focus on giving customers better prices, faster service and hassle-free shopping.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center g-4 mt-5">
        <div className="col-md-6 reveal">
          <h2 className="fw-bold mb-3">Why Users Choose Us</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> High-quality electronics & gadgets</li>
            <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Trendy fashion & stylish accessories</li>
            <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Premium home & lifestyle products</li>
            <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Fast, secure & smooth shopping experience</li>
            <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Responsive UI and clean design</li>
          </ul>
        </div>

        <div className="col-md-6 reveal">
          <Image
            src="/chooseus.png"
            alt="Why Choose Us"
            width={600}
            height={400}
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
      <div className="text-center mt-5 p-5 rounded shadow-lg reveal" style={{background: "linear-gradient(135deg, #25C15A, #0C7A28)", color: "white"}}>
        <h2 className="fw-bold">Ready to Shop Smarter?</h2>
        <p className="mt-2">
          Discover premium electronics, fashion, accessories, gadgets, and home essentials — all in one place.
        </p>
        <Link href="/products">
        <button className="btn btn-light mt-3 px-4 py-2 fw-bold">
          Start Shopping
        </button>
        </Link>
      </div>

    </div>
  );
}