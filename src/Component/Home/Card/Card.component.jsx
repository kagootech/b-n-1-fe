import React from "react";

function Card() {
    return (
        <>
            <div className="card bg-white w-[190px] m-2 rounded-lg shadow-lg" style={{ minHeight: "250px" , maxHeight : "250px"}}>
                <div className="top" >
                    <img
                        className="w-[190px] h-[130px] object-cover "
                        src="/products/fs.jpg"
                        alt="img"
                        style={{ borderRadius: "8px 8px 0px 0px"}}
                    />
                </div>
                <div className="bottom flex flex-col justify-center items-start px-3 py-2 bg-">
                    <div className="title font-semibold text-md my-1">
                        Kulpi
                    </div>
                    <div className="category text-xs font-light ">
                        BTS Food
                    </div>

                    <div className="pricing flex items-center">
                        {" "}
                        <div className="price ">IDR.5000.00</div>
                        {/*<div className="ml-2 text-xs ">*/}
                        {/*    $<del>1320</del>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex items-center ">
                        <button className="border px-3 w-full py-1 text-sm rounded-md mr-1 ">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card