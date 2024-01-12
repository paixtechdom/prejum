import { useState } from "react"
import { Link } from "react-router-dom"

const PrimaryButton = ({icon, text}) => {
    const [ scale, setScale ] = useState(1)
    return(
        <div className={`flex cursor-pointer items-center bg-gradient-to-r from-gray-900 to-pink-900 shadow-xl rounded-full p-1 text-sm transition-all duration-500 w-fit`}
        style={{
            transform: `scale(${scale})`
        }}
        onMouseOver={() =>{
            setScale(1.1)
        }}
        onMouseOut={() =>{
            setScale(1)
        }}>
            {
                text ?
                <div className='text-gray-300 px-3'>{text.toUpperCase()}</div> : ''
            }
            <i className={`bi bi-${icon} text-gray-300 bg-gray-900 rounded-full flex items-center justify-center`} style={{
                height: 30+'px',
                width: 30+'px',
            }}></i>
        </div>
    )
}
const SecondaryButton = ({icon, text }) => {
    const [ scale, setScale ] = useState(1)
    return(
        <div className={`flex cursor-pointer items-center bg-gray-90 border border-gray-300 rounded-full p-1 text-sm transition-all duration-500 w-fit`} style={{
            transform: `scale(${scale})`
        }}
        onMouseOver={() =>{
            setScale(0.9)
        }}
        onMouseOut={() =>{
            setScale(1)
        }}>
            <div className='text-gray-300 px-3 '>{text.toUpperCase()}</div>
            <i className={`bi bi-${icon} text-gray-300 flex items-center justify-center bg-gray-900 rounded-full `} style={{
                height: 30+'px',
                width: 30+'px',
            }}></i>
        </div>
    )
}

export { PrimaryButton, SecondaryButton }