import { Link } from "react-router-dom";
import React from "react";

function Profile() {
  const user = {
    name: "Reihannudin",
  };
  return (
    <>
      <div className="bg-white">
          <div className="px-4 bg-white  pb-4 pt-6 flex items-center mb-3">
              <Link to="/">
                  <h6 className="text-lg mb-0">
                      <i className="fa-solid fa-arrow-left"></i>
                  </h6>
              </Link>
              <h5 className="font-medium text-xl ml-3">Profile</h5>
          </div>
          <div></div>
        <div className="px-4 py-3">
          <div className="flex items-center">
            <div
              className="bg-blue-300 rounded-full"
              style={{
                width: "60px",
                height: "60px",
              }}
            ></div>
            <div className="pl-4">
              <h5 className="text-xl">{user.name}</h5>
              <h6 className="text-gray-400 text-sm">
                SMKN 1 Kabupaten Tangerang
              </h6>
            </div>
          </div>
        </div>
          <div className="gap-4 mx-3 py-4">
              <div className="flex my-2">
                  <i className="fa-solid fa-phone my-1 mx-3"></i>
                  <p>+(62)87773301182</p>
              </div>
              <div className="flex my-2">
                  <i className="fa-solid fa-envelope my-1 mx-3"></i>
                  <p>reedbulls91@gmail.com</p>
              </div>
          </div>
      </div>
      <div className="px-4 bg-white pb-5">
          <div className="w-full my-2  py-1 mx-auto">
              <a href={"/user/product"}>
                  <div className="flex my-3">
                      <i className="fa-solid fa-shopping-bag my-1 mx-3"></i>
                      <p>Product</p>
                  </div>
              </a>
              <hr />
          </div>
          <div className="w-full my-2  py-1  mx-auto">
              <a href={"/user/promotion"}>
                  <div className="flex my-3">
                      <i className="fa-solid fa-tags my-1 mx-3"></i>
                      <p>Promotion</p>
                  </div>
              </a>
              <hr />
          </div>
          <div className="w-full my-2 py-1 mx-auto">
              <a href={"/user/status/product"}>
                  <div className="flex my-3">
                      <i className="fa-solid fa-ticket my-1 mx-3"></i>
                      <p>Lifecycle Product</p>
                  </div>
              </a>
              <hr />
          </div>
          <div className="w-full my-2  py-1  mx-auto">
              <a href={"/"}>
                  <div className="flex my-3" style={{ color: "#da1010"}}>
                      <i className="fa-solid fa-sign-out my-1 mx-3"></i>
                      <p>Log out</p>
                  </div>
              </a>
              <hr />
          </div>
      </div>
    </>
  );
}

export default Profile;
