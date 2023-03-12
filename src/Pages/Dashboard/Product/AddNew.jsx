import {Link} from "react-router-dom";
import {MyProductComponent} from "../../../Component/Dashboard/Product/MyProduct/MyProduct.component";
import React from "react";
import {EditProductComponent} from "../../../Component/Dashboard/Product/MyProduct/EditProduct.component";
import {AddNewProductComponent} from "../../../Component/Dashboard/Product/MyProduct/NewProduct.component";

export function AddNewProduct () {
    return(
        <>
            <div className="bg-white w-full" style={{ position : "fixed" }}>
                <div className="px-4 bg-white  pb-2 pt-6 flex items-center mb-3">
                    <Link to="/">
                        <h6 className="text-lg mb-0">
                            <i className="fa-solid fa-arrow-left"></i>
                        </h6>
                    </Link>
                    <h5 className="font-medium text-xl ml-3">Add New Product</h5>
                </div>
            </div>
            <div className="h-100" style={{ paddingTop : "70px" , background : "white", height : "100%"}}>
                <AddNewProductComponent />
            </div>
            <div
                className="fixed bottom-0 left-0 w-full"
                style={{
                    zIndex: 2,
                }}
            >
                <div
                    className="flex mx-auto px-4 py-3 border-t bg-white"
                    style={{
                        maxWidth: "400px",
                    }}
                >
                    <Link to={""} className="w-full">
                        <button className="bg-red-600 w-full text-white rounded-lg py-2 text-center w-full">
                            Save Product
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}