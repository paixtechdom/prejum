import { Link } from "react-router-dom"
import { PrimaryButton, SecondaryButton } from "./Button"
import { ScrollPageDown } from "../Functions/Functions"


const Card = ({header, text, img, buttonText, buttonLink, clas, w, buttonIcon, goTo, id}) => {
    return(
        <div id={id} className="flex justify-center items-center w-full text-gray-200 py-9 md:h-96 my-9">
            <div className={`flex md:${clas} justify-between ${!w == '' ? `md:w-9/12 w-11/12` : 'md:w-8/12 w-10/12'} items-center transition-all duration-500 md:gap-9 gap-8 md:flex-row flex-col-reverse flex-col h-full `}>
                <div className="flex flex-col md:gap-5 gap-3 text-cente md:text-left md:w-8/12">
                    <h2 className="text-2xl md:text-3xl">{header}</h2>
                    <div className="text-gray-300 text-sm flex flex-col gap-3 line-25">
                        {
                            text.map((t, key) => (
                                <p key={key}>{t}</p>
                            ))
                        }
                    </div>
                    {
                        buttonText ? 
                        
                            !goTo == ''  ? 
                        <a href={`#${goTo}`}>
                            <SecondaryButton text={buttonText} icon={!buttonIcon == '' ? buttonIcon :'arrow-right'}/>
                        </a> :
                        <Link to={`/${buttonLink}`}>
                            <SecondaryButton text={buttonText} icon={!buttonIcon == '' ? buttonIcon :'arrow-right'}/>
                        </Link>
                        : ''
                    }
                </div>
                {
                    img ? 
                    <div className="md:w-5/12">

                        <img src={img} alt={header ? header : text} className='max-h-96 md:h-full'/>
                    </div>
                         :''
                }
            </div>
        </div>
    )
}

const CardImageOverlay = ({header, text, img, buttonText, buttonLink, w, buttonIcon, goTo, id}) => {
    return(
        <div id={id} className="flex justify-center items-center w-full text-gray-200 py-9 h-96 my-9 relative">
            <div className="absolute h-full w-full" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                zIndex: 5
            }}></div>
            <div className="absolute h-full w-full flex items-center justify-center overflow-hidden" style={{
            }}>
                <img src={img} alt={header ? header : text}         className='absolute z-0 scale-150 h-full w-full md:scale-100 md:h-fit md:w-full'/>
            </div>

            <div className={`flex ${!w == '' ? `md:w-9/12 w-11/12` : 'md:w-8/12 w-10/12'}  items-center h-full`}>
                <div className="flex flex-col md:gap-5 gap-3 items-center text-center md:items-start md:text-left md:w-7/12 z-10">
                    <h2 className="text-3xl md:text-4xl">{header}</h2>
                    <p className="text-gray-300 text-sm  line-25">{text}</p>
                    {
                        !goTo == ''  ? 
                    <a href={`#${goTo}`}>
                        <SecondaryButton text={buttonText} icon={!buttonIcon == '' ? buttonIcon :'arrow-right'}/>
                    </a> :
                    <Link to={`/${buttonLink}`}>
                        <SecondaryButton text={buttonText} icon={!buttonIcon == '' ? buttonIcon :'arrow-right'}/>
                    </Link>
                    } 
                </div>
            </div>
        </div>
    )
}

export { Card, CardImageOverlay }

