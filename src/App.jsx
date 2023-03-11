import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import View from "./Pages/Product/View";
import Checkout from "./Pages/Product/Checkout";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Auth/Login";


function App() {
  return (
    <div className="App">
      <div className='app-content bg-gray-50 mx-auto' style={{ maxWidth: '400px', minHeight: '100vh' }}>
        <Routes>
          <Route index={true} path="/" element={<Home />} />
          <Route path="/product/:state" element={<View />} />
          <Route path="/product/:state/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login/redirect" element={<Login />} />
        </Routes>
        {/* <a href="https://saweria.co" className="fixed bottom-3 right-4 bg-yellow-400 px-5 py-2 rounded-full shdadow">
          Dukung kami
        </a> */}
      </div>
    </div>
  );
}

export default App;
