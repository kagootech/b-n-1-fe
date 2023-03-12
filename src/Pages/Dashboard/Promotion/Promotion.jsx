import {Link} from "react-router-dom";
import React from "react";
import {PromotionProductComponent} from "../../../Component/Dashboard/Promotion/PromotionProduct";

export const PromotionProduct = () => {
    return (
        <>
            <div className="bg-white w-full" style={{ position : "fixed" }}>
                <div className="px-4 bg-white  pb-2 pt-6 flex items-center mb-3">
                    <Link to="/">
                        <h6 className="text-lg mb-0">
                            <i className="fa-solid fa-arrow-left"></i>
                        </h6>
                    </Link>
                    <h5 className="font-medium text-xl ml-3">Promotion</h5>
                </div>
            </div>
            {/*// , borderBottom : "1px solid #eeeeee"*/}
            <div className="h-100" style={{ paddingTop : "73px" ,background : "rgba(245,245,245,0.66)", borderTop : "1px solid #eaeaea" , height : "100%"}}>
                <div className="py-3 " style={{ background : "white" , borderRight : "1px solid #ebebeb" , borderLeft : "1px solid #ebebeb"}}>
                   <div className="mx-4">
                       <p>Buatlah Promo aga orang-orang tertarik dengan produk mu!</p>
                   </div>
                </div>
                <div  style={{ marginTop :"2px"}}>
                    <PromotionProductComponent />
                </div>
            </div>

        </>
    )
}