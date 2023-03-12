import React from "react";

export const AddNewProductComponent = () =>{
    return(
        <>
            <div className="mt-5 mx-4">
                <div className="mb-4">
                    <label htmlFor="" className="text-black">
                        Nama Product
                    </label>
                    <input
                        type="text"
                        className="border-b  border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Nama Product"
                        value="ayam upin-ipin"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black-100">
                        Price
                    </label>
                    <input
                        type="text"
                        className="border-b  border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Price"
                        value="0.0"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black">
                        Product Image
                    </label>
                    <input
                        type="file"
                        className="border-b border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Gambar Product"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black">
                        Description
                    </label>
                    <input
                        type="text"
                        className="border-b border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Descripsi"
                        value="description "
                    />
                </div>
                <div className="">
                    <label htmlFor="" className="text-black">
                        Varian
                    </label>
                    <div className="mt-2 mb-4">

                        <button id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover"
                                className="text-black justify-between bg-gray-100 hover:bg-gray-200 text-black w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button">Varian<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none"
                                                         stroke="currentColor" viewBox="0 0 24 24"
                                                         xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg></button>

                        <div id="dropdownRadioBgHover"
                             className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownRadioBgHoverButton">
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <label htmlFor="default-radio-4"
                                               className="w-full ml-2 text-sm font-medium  rounded dark:text-gray-300">Isi Coklat</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <label htmlFor="default-radio-5"
                                               className="w-full ml-2 text-sm font-medium  rounded dark:text-gray-300">Isi Strawberry</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <label htmlFor="default-radio-6"
                                               className="w-full ml-2 text-sm font-medium  rounded dark:text-gray-300">Isi Keju</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span>Tambahkan varian dari product anda</span>
                    <input
                        type="text"
                        className="border-b my-2 border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Varian Baru"
                    />
                </div>
            </div>
        </>
    )
}

// <div className="mb-4">
//     <label htmlFor="" className="text-black">
//         Tambahkan custom options
//     </label>
//     <div className="my-2">
//         <input
//             type="text"
//             className="border-b border-grey-600 w-full outline-none text-mf py-2"
//             placeholder="Tambahkan Varian Baru"
//         />
//     </div>
// </div>
