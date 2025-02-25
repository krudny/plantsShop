import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/main.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/CartContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
