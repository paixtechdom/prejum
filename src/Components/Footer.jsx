import { Link } from "react-router-dom"
import { NavInfo } from "../assets/Constants"
import { ContactForm } from "./Forms"

export const Footer = () => {
    return(
        <div className="flex justify-center items-center w-full text-gray-200 py-9 bg-gray-900">
            <div className="flex justify-between xl:w-9/12 w-11/12 items-center transition-all duration-500 gap- flex-col ">
                <ContactForm />

                <div className="flex flex-col w-full gap-5 text-gray-300 border-t pt-6 items-center">
                    <h3 className="text-gray-200 text-xl font-bold">Quick Links</h3>
                    {
                        NavInfo.map((nav, key) => (
                            <Link key={key} className='flex gap-3'>
                                <i className={`bi bi-${nav.icon}-fill`}></i>
                                <p className="underline">{nav.title}</p>
                            </Link>
                  
                        ))
                    }
                </div>
                <div className="text-gray-300 flex flex-col items-center">

                    <p className="mt-9 mb-3">Read our <a href="" className="underline">Privacy policy</a> and <a href="" className="underline">Terms of service</a></p>

                    <div className="flex items-center gap-2">
                        &copy; Copyright @ <div className="text-xl text-pink-900">PREJUM</div> 2024
                    </div>
                </div>
            </div>
        </div>
    )
}