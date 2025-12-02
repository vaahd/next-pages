import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/cartcontext_temp.tsx';
import { WishlistProvider } from './components/WishlistContext';
import { DarkModeProvider } from './components/DarkModeContext';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <DarkModeProvider>
      <CartProvider>
        <WishlistProvider>

          <Navbar />

          <main className="container my-4">
            <Component {...pageProps} />
          </main>

          <Footer />

        </WishlistProvider>
      </CartProvider>
    </DarkModeProvider>
  );
}
