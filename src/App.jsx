import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import View from "./Pages/Product/View";
import Checkout from "./Pages/Product/Checkout";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Auth/Login";

function AuthRoutes() {
  return (
    <>
      <Routes>
        <Route path="/product/:state/checkout" element={<Checkout />} />
        <Route path="/user/product" element={<Product />} />
        <Route path="/user/new/product" element={<AddNewProduct />} />
        <Route path="/user/product/:state" element={<MyProductView />} />
        <Route path="/user/edit/product/:state" element={<EditProduct />} />
        <Route path="/user/promotion" element={<PromotionProduct />} />
        <Route
          path="/user/update/product/:state"
          element={<UpdatePromotion />}
        />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/user/status/product" element={<LifecycleProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

function GuestRoutes({ setLogged }) {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setLogged={setLogged} />} />
        <Route path="/login/redirect" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (logged) {
      alert("Your are logged now!");
    }
  }, [localStorage.token]);

  return (
    <div className="App mx-3">
      <div
        className="app-content bg-white mx-auto"
        style={{ maxWidth: "400px", minHeight: "100vh" }}
      >
        <Routes>
          <Route index={true} path="/" element={<Home logged={logged} />} />
          <Route path="/product/:state" element={<View />} />
          <Route path="/product/:state/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/name" element={<ProductAll />} />
          <Route path="/user/product" element={<Product />} />
          <Route path="/user/new/product" element={<AddNewProduct />} />
          <Route path="/user/new/product/variant" element={<AddNewVariant />} />
          <Route path="/user/product/:state" element={<MyProductView />} />
          <Route path="/user/add/product/" element={<AddNewProduct />} />
          <Route path="/user/edit/product/:state" element={<EditProduct />} />
          <Route path="/user/promotion" element={<PromotionProduct />} />
          <Route
            path="/user/update/product/:state"
            element={<UpdatePromotion />}
          />
          <Route path="/user/status/product" element={<LifecycleProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login/redirect" element={<Login />} />
        </Routes>
        {logged ? <AuthRoutes /> : <GuestRoutes setLogged={setLogged} />}
        {/* <a href="https://saweria.co" className="fixed bottom-3 right-4 bg-yellow-400 px-5 py-2 rounded-full shdadow">
          Dukung kami
        </a> */}
      </div>
    </div>
  );
}

export default App;
