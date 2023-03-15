import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import View from "./Pages/Product/View";
import Checkout from "./Pages/Product/Checkout";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Auth/Login";
import { Product } from "./Pages/Dashboard/Product/Product";
import { MyProductView } from "./Pages/Dashboard/Product/View";
import { EditProduct } from "./Pages/Dashboard/Product/Edit";
import { PromotionProduct } from "./Pages/Dashboard/Promotion/Promotion";
import { UpdatePromotion } from "./Pages/Dashboard/Promotion/Update";
import { LifecycleProduct } from "./Pages/Dashboard/Lifecycle/Lifecycle";
import { AddNewProduct } from "./Pages/Dashboard/Product/AddNew";

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

    if(logged){
      alert("Your are logged now!")
    }
  }, [localStorage.token])

  return (
    <div className="App">
      <div
        className="app-content bg-white mx-auto"
        style={{ maxWidth: "400px", minHeight: "100vh" }}
      >
        <Routes>
          <Route index={true} path="/" element={<Home logged={logged} />} />
          <Route path="/product/:state" element={<View />} />
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
