"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !pass) {
      setError("Please enter both email and password.");
      return;
    }

    router.push("/products");
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh",background: "transparent",}}>
      <div className="p-4 shadow-lg rounded" style={{width: "100%",maxWidth: "380px",backdropFilter: "blur(22px)",background: "rgba(255,255,255,0.05)",borderRadius: "16px",border: "1px solid rgba(255,255,255,0.12)"}}>
        <div className="text-center mb-3">
         <img src="/user-avatar.png" alt="You" className="rounded-circle" style={{ width: 40, height: 40 }}/>
        </div>
        <h3 className="text-center fs-5 fw-bold mb-3" style={{ color: "var(--green-dark)" }}>
          Welcome Back Vahid!
        </h3>
        {error && (
          <div className="alert alert-danger py-2" style={{ borderRadius: "8px" }}>
            {error}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "10px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              style={{
                borderRadius: "10px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
              }}
            />
          </div>

          <button className="btn w-100 fw-semibold mt-3 py-2" style={{
              background: "linear-gradient(90deg, #FF7A2F, #F35A00)",
              color: "white",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Login
          </button>
        </form>
      </div>
      <style>{`
        html.dark input.form-control {
          color: #fff !important;
        }
        html.dark .form-label {
          color: #eaeaea !important;
        }
        html.dark h3 {
          color: #25C15A !important;
        }
      `}</style>
    </div>
  );
}