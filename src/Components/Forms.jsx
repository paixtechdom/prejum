import { useState } from "react"
import { PrimaryButton } from "./Button"
import contactImg from '../assets/Images/organization.jpg'
import { SocialMediaInfo } from "../assets/Constants"
const Suscribe = () => {
    const [ scale, setScale ] = useState(1)

    return(
        <div className="flex justify-center items-center w-full text-gray-200 py-9 bg-blue-30">
            <div className="flex justify-between xl:w-9/12 w-11/12 items-center transition-all duration-500 gap-3 flex-col ">
            <div className="w-full ">
                <h2 className="text-2xl">Suscribe to receive updates</h2>
            </div>
            <form className="flex justify-between w-full items-center transition-all duration-500 gap-3 md:flex-row flex-col h-full">
               <div className="flex border w-full rounded-lg overflow-hidden">
                    <i className="bi bi-person-fill bg-black p-2 text-white opacity-50"></i>
                    <input type="text" placeholder="Name" className="bg-transparent p-2"/>
               </div>
               <div className="flex border w-full rounded-lg overflow-hidden">
                    <i className="bi bi-envelope-fill bg-black p-2 text-white opacity-50"></i>
                    <input type="mail" placeholder="Email" className="bg-transparent p-2"/>
               </div>
                <div className={`flex cursor-pointer items-center bg-gradient-to-r from-gray-900 to-pink-900 shadow-xl rounded-lg p-1 text-lg transition-all duration-500 w-full justify-center cursor-pointer`}
                style={{
                    transform: `scale(${scale})`
                }}
                onMouseOver={() =>{
                    setScale(0.95)
                }}
                onMouseOut={() =>{
                    setScale(1)
                }}>

                    <i className="bi bi-bell-fill text-gray-300 bg-gray-90 rounded-full flex items-center justify-center p-2 subscriptionBell"></i>
                    <input type="submit" placeholder="Name" className="bg-transparent" value={'SUSCRIBE'}/>
                </div>
            </form>
            </div>
        </div>
    )
}


const ContactForm = () => {
    const [ scale, setScale ] = useState(1)

    return(
        <div className="flex flex-col gap-1 justify-center items-center w-full text-gray-200 py-9">
            <div className="flex gap-4 w-full">
                {
                    SocialMediaInfo.map((media, key) => (
                        <div key={key}>
                            <i className={`bi bi-${media.icon} text-lg text-gray-300`}></i>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-between items-center w-full md:gap-9 gap-8 md:flex-row flex-col-reverse h-full bg-blue-70">
                <form className="flex justify-between w-full items-center transition-all duration-500 gap-3 flex-col h-full md:w-full bg-blue-30">
                    <div className="w-full ">
                        <h2 className="text-2xl text-gray-300">Send us a message</h2>
                    </div>
                    <div className="flex border w-full rounded-lg overflow-hidden">
                            <i className="bi bi-person-fill bg-black p-2 text-white opacity-50"></i>
                            <input type="text" placeholder="Enter your name" className="bg-transparent p-2 w-full"/>
                    </div>
                    <div className="flex border w-full rounded-lg overflow-hidden">
                            <i className="bi bi-envelope-fill bg-black p-2 text-white opacity-50"></i>
                            <input type="mail" placeholder="Enter your email" className="bg-transparent p-2 w-full"/>
                    </div>
                    <div className="flex border w-full rounded-lg overflow-hidden">
                            <i className="bi bi-chat-fill bg-black p-2 text-white opacity-50"></i>
                            <textarea name="" id="" placeholder="Enter your Message" className="p-2 bg-transparent" style={{
                                minHeight: 100+'px',
                                maxHeight: 100+'px',
                                minWidth: 100+'%',
                                maxWidth: 100+'%',
                            }}></textarea>
                    </div>
                    <div className={`flex cursor-pointer items-center bg-gradient-to-r from-gray-900 to-pink-900 shadow-xl rounded-lg p-1 text-lg transition-all duration-500 w-full justify-center cursor-pointer`}
                    style={{
                        transform: `scale(${scale})`
                    }}
                    onMouseOver={() =>{
                        setScale(0.95)
                    }}
                    onMouseOut={() =>{
                        setScale(1)
                    }}>

                        <input type="submit" placeholder="Name" className="bg-transparent" value={'SEND MESSAGE'}/>
                        <i className="bi bi-chevron-right text-gray-100 bg-gray-90 rounded-full flex items-center justify-center p-2 sendMessage"></i>
                    </div>
                </form>
                <img src={contactImg} alt="Contact Us" className="md:w-5/12 max-h-96 md:h-full"/>
            </div>
        </div>
    )
}

export { Suscribe, ContactForm }