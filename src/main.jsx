import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BasketProvider from "./context/BasketProvider.jsx";
import WishlistProvider from "./context/WishlistProvider.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <BasketProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </BasketProvider>
    </BrowserRouter>
);
