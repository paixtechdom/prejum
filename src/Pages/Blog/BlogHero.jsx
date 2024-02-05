import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Blogs } from "../../assets/Constants"
import { PrimaryButton } from "../../Components/Button"

export const BlogHero = ({blog, btnText, icon}) => {
    const [liked, setLiked ] = useState(false)

    return(
        <>
        <div className="bg-gradient-to-l from-gray-900 to-pink-900 pb-9 ">
            {/* <p className="mt-9 pt-9"></p> */}
            <div className="flex flex-col items-center justify-cente py-9 bg-gray-900 md:gap-6">
                <div className="flex flex-col text-center items-center justify-center gap-2 md:gap-4 w-11/12 md:w-9/12 py-9">
                    <h1 className="text-gray-200 text-3xl md:text-4xl">{blog.title}</h1>
                    <p className="text-sm text-gray-300 text-center line-25">{blog.desc}</p>
                    <Link to={`${blog.id}`}>
                    <PrimaryButton text={btnText} icon={icon}/>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center w-11/12 md:w-9/12">
                    <img src={blog.img} alt={`${blog.title}'s Image`}  className='w-full'/>
                    <div className="flex justify-between w-full text-gray-200 mt-5 md:w-9/12">
                        <div className="flex flex-col items-center">
                            <i className={`bi bi-hand-thumbs-up${liked ? '-fill' : ''} cursor-pointer`} onClick={() => setLiked(!liked)}></i>
                            <p className="small">{liked ? blog.noLikes+1 : blog.noLikes}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="bi bi-chat cursor-pointer"></i>
                            <p className="small">{blog.noLikes}</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <i className="bi bi-clock"></i>
                            <p className="small">{blog.date}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}