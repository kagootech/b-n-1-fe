import React from "react";
import {NameTagComponent} from "../NameTag/NameTag.component";

export const Search = () => {
    return(
        <>
            <div className="-mt-5 px-4">
                <NameTagComponent />
                <div className="shadow-sm rounded-full  overflow-hidden">
                    <input
                        type="text"
                        placeholder="Cari jualan apa bang?"
                        className="outline-none  rounded-full text-lg w-full bg-white px-5 py-2"
                    />
                </div>
            </div>

        </>
    )
}