import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, LOGIN_URL } from "../../config";
import api from "../../config/api";

function Login() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const auth_token = urlParams.get("auth_token");

  useEffect(() => {
    api
      .get("/user", {
        headers: {
          Authorization: "Bearer " + auth_token,
        },
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("token", auth_token);
          navigate('/');
        } else {
            alert("Something wrong!")
        }
      });
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="text-center w-full">
          <div className="mb-6">
            <h1 className="text-3xl mb-3">Selamat datang!</h1>
            <h6 className="text-lg text-gray-400">
              Pasti lagi ada tugas jualan ya, bang?
            </h6>
          </div>
          <div className="mx-auto">
            <a href={LOGIN_URL}>
              <button className="bg-blue-500 rounded-lg flex items-center shadow-sm overflow-hidden mx-auto">
                <div className="bg-white p-3 w-12">
                  <img src="brands/google.png" alt="" className="w-full" />
                </div>
                <h6 className="text-white px-5">Masuk dengan Google</h6>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
