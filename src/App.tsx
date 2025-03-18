import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Product } from "./types/types";
import { useState } from "react";
const App = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product One", price: 29, addedToCart: false, quantity: 0 },
    { id: 2, name: "Product Two", price: 39, addedToCart: false, quantity: 0 },
    {
      id: 3,
      name: "Product Three",
      price: 49,
      addedToCart: false,
      quantity: 0,
    },
    { id: 4, name: "Product Four", price: 19, addedToCart: false, quantity: 0 },
    { id: 5, name: "Product Five", price: 59, addedToCart: false, quantity: 0 },
    { id: 6, name: "Product Six", price: 24, addedToCart: false, quantity: 0 },
    {
      id: 7,
      name: "Product Seven",
      price: 34,
      addedToCart: false,
      quantity: 0,
    },
    {
      id: 8,
      name: "Product Eight",
      price: 44,
      addedToCart: false,
      quantity: 0,
    },
  ]);

  const addToCart = (id: number) => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.map((product: Product) =>
        product.id === id
          ? { ...product, addedToCart: true, quantity: 1 }
          : product
      )
    );
  };

  const increaseQuantity = (id: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decreaseQuantity = (id: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, quantity: p.quantity - 1, addedToCart: p.quantity > 1 }
          : p
      )
    );
  };

  const removeFromCart = (id: number) => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, addedToCart: false, quantity: 0 }
          : product
      )
    );
  };
  const cartList = products.filter((each: Product) => each.addedToCart);
  return (
    <div>
      <BrowserRouter>
        <Navbar numberOfProduct={cartList.length} />
        <div className="p-4 sm:p-6 md:p-10">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  setProducts={setProducts}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeFromCart={removeFromCart}
                  cartList={cartList}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
