'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "👋 Hi! I'm Clicks AI Assistant.\nHow can I help you today?" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    setMessages(prev => [...prev, { from: 'user', text: input }])
    const userText = input
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      let reply = "Thanks! I’m here to assist you 😊"

      if (userText.toLowerCase().includes("price"))
        reply = "Our prices are available on the product page 👍"

      if (userText.toLowerCase().includes("order"))
        reply = "You can place an order by adding items to your cart !"

      if (userText.toLowerCase().includes("hello") || userText.toLowerCase().includes("hi"))
        reply = "Hello! 👋 How may I assist you?"

      setMessages(prev => [...prev, { from: 'bot', text: reply }])
    }, 900)
  }

  return (
    <div className="container py-5 mt-5">
      <div className="text-center py-2 mb-4 rounded">
        Need faster help?
        <Link href="/login" className="fw-bold ms-2" style={{ color: "#25C15A" }}>
          Login
        </Link>
      </div>

      <h2 className="fw-bold text-center mb-4" style={{ color: "var(--text-color)" }}>
        Chat with Clicks AI
      </h2>

      <div className="row">
        <div className="col-md-8">
          <div
            className="p-3 rounded"
            style={{
              height: "450px",
              overflowY: "auto",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)"
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`d-flex mb-3 ${msg.from === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                {msg.from === 'bot' && (
                  <img
                    src="/ai-avatar.png"
                    alt="AI"
                    className="rounded-circle me-2 d-none d-sm-block"
                    style={{ width: 32, height: 32 }}
                  />
                )}

                <span
                  className="p-2 rounded"
                  style={{
                    maxWidth: "70%",
                    background:
                      msg.from === "user"
                        ? "linear-gradient(90deg, #25C15A, #0A8F43)"
                        : "rgba(255,255,255,0.12)",
                    color: msg.from === "user" ? "#fff" : "var(--text-color)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.text}
                </span>

                {msg.from === 'user' && (
                  <img
                    src="/user-avatar.png"
                    alt="You"
                    className="rounded-circle ms-2 d-none d-sm-block"
                    style={{ width: 32, height: 32 }}
                  />
                )}
              </div>
            ))}

            {typing && <div className="text-muted small">Clicks AI is typing…</div>}
          </div>
          <form onSubmit={sendMessage} className="d-flex gap-2 mt-3">
            <input
              className="form-control"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "var(--text-color)"
              }}
            />
            <button
              className="btn"
              style={{
                background: "#25C15A",
                color: "white",
                borderRadius: "8px",
                fontWeight: 600
              }}
            >
              Send
            </button>
          </form>
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
          <div
            className="p-4 rounded text-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)"
            }}
          >
            <h5 className="fw-bold" style={{ color: "var(--text-color)" }}>
              Have an account?
            </h5>
            <p className="text-muted mt-2 mb-3">
              Login to access your support details faster.
            </p>

            <Link
              href="/login"
              className="btn w-100"
              style={{
                background: "#25C15A",
                color: "white",
                borderRadius: "8px",
                fontWeight: 600
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
