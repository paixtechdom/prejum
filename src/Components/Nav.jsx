import { useState } from "react"
import { Link } from "react-router-dom"
import { NavInfo } from "../assets/Constants"
import { PrimaryButton } from "./Button"
export const Nav = ({currentNav}) => {
    const [dropdownPos, setDropDownPos ] = useState(100)

    return(
    <div className="flex justify-center items-center w-full py-5 bg-gradient-to-r from-gray-900 to-pink-900 fixed top-0 z-50">
        <div className="flex justify-between xl:w-9/12 w-11/12 items-center transition-all duration-500 md:bg-none z-50">

            <div className="logo text-2xl text-gray-300">PREJUM</div>
            <div className="flex gap-4">
                <div className="md:hidden">
                    <i className={`bi bi-search text-gray-300 text-xl cursor-pointer`}></i>
                </div>
                <div className="md:hidden" onClick={()=> setDropDownPos(dropdownPos == 0 ? -100 : 0)}>
                    <i className={`bi bi-${dropdownPos == 0 ? 'x-lg' : 'justify'} text-gray-300 text-2xl cursor-pointer`}></i>
                </div>

            </div>
            <div className={`flex gap-8 absolute 
            top-9 p-5 transition-all duration-1000 flex-col bg-gray-900 w-full mt-9 ${dropdownPos == 0 ? 'left-0' : '-left-100'}
            md:flex-row md:flex md:relative md:p-0 md:mt-0 md:top-0 md:w-fit md:bg-transparent md:left-0 md:items-center`} style={{
                // left: dropdownPos+'%',
            }}>
                {
                    NavInfo.map((nav, key) => (
                        <Link key={key} to={`/${nav.link}`} className={`flex items-center gap-3 items-center md:gap-0 md:flex-col ${currentNav == nav.title ? 'opacity-50' : ''}`}>
                            <i className={`bi bi-${nav.icon}-fill text-gray-300 text-xl md:hidden`}></i>
                            <div className='text-gray-300 text-sm'>{nav.title}</div>
                        </Link>

                        ))
                    }
                
                    <Link to={`/`} className=" w-fit">
                    <PrimaryButton text='Search' icon='search'/>
                    </Link>
            </div>
        </div>
    </div>
    )
}