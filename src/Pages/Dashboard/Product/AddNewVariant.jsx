import {Link, useNavigate} from "react-router-dom";
import {MyProductComponent} from "../../../Component/Dashboard/Product/MyProduct/MyProduct.component";
import React from "react";
import {EditProductComponent} from "../../../Component/Dashboard/Product/MyProduct/EditProduct.component";
import {AddNewProductComponent} from "../../../Component/Dashboard/Product/MyProduct/NewProduct.component";
import {AddNewVariantComponent} from "../../../Component/Dashboard/Product/MyProduct/NewVariant.component";

export function AddNewVariant () {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="bg-white" >
                <div className="bg-white "  style={{ position : "fixed"  , width: "92%" }}>
                    <div className="px-4 bg-white  pb-4 pt-6 flex items-center mb-3" style={{ borderBottom: "1px solid #ebebeb"}}>
                        <button onClick={goBack}>
                        <h6 className="text-lg mb-0">
                                <i className="fa-solid fa-arrow-left"></i>
                            </h6>
                        </button>
                            <h5 className="font-medium text-xl ml-3">Add New Variant</h5>
                    </div>
                </div>
            </div>
            <div className="h-100" style={{ paddingTop : "70px" , background : "white", height : "100%"}}>
                <AddNewVariantComponent />
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