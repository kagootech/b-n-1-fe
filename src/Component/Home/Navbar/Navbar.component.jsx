import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ logged }) => {
  return (
    <>
      <nav className="bg-white border-b-amber-50 px-4 pt-5 pb-5">
        <div className="flex justify-between" style={{ height: "30px" }}>
          <div>
            <div style={{ height: "30px" }}>
              <img
                src="/assets/logo/logo-panjang.svg"
                className=" h-full"
                alt=""
              />
            </div>
          </div>
          <div>
            <div style={{ height: "30px" }} className="my-1">
              <div className={"h-full"}>
                <Link to="/profile" className="inline">
                  <span className="bg-gray-100 px-3 py-2 rounded-full">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </Link>
                {logged ? (
                  "Your Name"
                ) : (
                  <>
                    <a href="http://auth.sellone.shop/login">Login</a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
//
// <div
//     className="bg-yellow-400 px-4 pt-4 pb-7"
//     style={{
//         borderBottomLeftRadius: "20px",
//         borderBottomRightRadius: "20px",
//     }}
// >
//     <div className="flex justify-between items-center">
//         <h6 className="text-lg font-medium">Helo, Taruna/i</h6>
//         <div>
//             <Link to="/profile">
//               <span className="bg-yellow-500 px-3 py-2 rounded-full">
//                 <i className="fa-solid fa-user"></i>
//               </span>
//             </Link>
//         </div>
//     </div>
// </div>
