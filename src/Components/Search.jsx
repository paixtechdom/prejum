import { useState } from "react"
import { Categories } from "../assets/Constants"

export const Search = () => {
    const [ showSearchBar, setShowSearchBar ] = useState(true)
    return(
        <div className="bg-gradient-to-l from-gray-900 to-pink-900 py-9 my-9 flex flex-col items-center w-full">

            <div className="flex justify-between  xl:w-9/12 w-11/12 items-center transition-all duration-500 text-gray-300">

            <div className={`flex justify-between transition-all duration-500 ${showSearchBar ? 'border border-gray-400  rounded-2xl  w-full ' : 'w-1/12'} overflow-hidden`}>
                <div className="flex flex-col items-center cursor-pointer p-3" onClick={() => {
                    setShowSearchBar(!showSearchBar)
                }}>
                    <i className={`bi bi-search text-xl ${showSearchBar ? ' px-4 border-r border-gray-400' : ''}`}></i>
                    {
                        !showSearchBar ? 
                        <p className="text-sm">Search</p> : ''
                    }
                </div>
                {
                        showSearchBar ? 
                        <input type="text" placeholder="Search" className="bg-transparent w-11/12 outline-none"/> :''
                }
            </div>
            {/* <div className={`flex justify-between ${showSearchBar ? ' ' : 'w-11/12 border px-3 rounded-2xl border-gray-400'}`}>
                {
                    !showSearchBar ? 
                    Categories.map((cat, key) => (
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" id="" />
                            <p>{cat.title}</p>

                        </div>

                    )) : ''
                }
                <div className="flex flex-col items-center cursor-pointer p-3" onClick={() => {
                    setShowSearchBar(!showSearchBar)
                }}>
                    <i className="bi bi-sliders text-2xl"></i>
                    {
                        showSearchBar ? 
                        <p className="text-sm">Filter</p> : ''
                    }
                </div>
                </div> */}

            </div>
        </div>
    )
}