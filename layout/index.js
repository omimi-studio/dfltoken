import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="relative bg-indigo-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
