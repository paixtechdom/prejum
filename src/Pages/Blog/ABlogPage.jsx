import { useContext, useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router"
import { Blogs } from "../../assets/Constants"
import { Helmet } from "react-helmet-async"
import { PrimaryButton } from "../../Components/Button"
import { BlogHero } from "./BlogHero"
import { AppContext } from "../../assets/Contexts/AppContext"
import { MoreBlogs } from "../Home/MoreBlogs"



export const ABlogPage = () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
      setCurrentNav('Blog')
      document.documentElement.scrollTop = 0
    }, [])


    const id = useParams()
    const [ blog, setBlog ] = useState({})
    useEffect(() => {
        document.documentElement.scrollTop = 0
        Blogs.forEach((blog) => {
            if (blog.id == id.id) {
                setBlog(blog)
            }
        })
    }, [])

    return(
        <>
        <Helmet>
            <title>{`${blog.title} - PREJUM`}</title>
        </Helmet>
            <p className="mt-9 <-(9) remove pt-9"></p>
        <div className="bg-gradient-to-l from-gray-900 to-pink-900 pb-9 flex flex-col">
            <BlogHero blog={blog} icon={'arrow-down'} btnText={'Read more'}/>

            <div className="flex justify-center items-center w-full mt-9">
                <div className="flex w-11/12 md:w-9/12 justify-center items-center">
                    <div className="flex flex-col w-full gap-3 text-gray-200 text-sm line-30" style={{
                        // lineHeight: 29+'px'
                    }}>
                        {
                            blog.content?.map((cont, key) => (
                                <div key={key} className="flex flex-col md:flex-row md:justify-between items-center md:gap-9">
                                    {
                                        !cont.img == '' ? 
                                        <div className="flex flex-col items-center justify-center my-5 md:my-0 md:w-10/12">
                                            <img src={cont.img} alt={blog.title} className="w-full" /> 
                                            <p className="w-full bg-gray-200 text-black text-center">{cont.imgDesc}</p>
                                        </div> : ''
                                    }
                                <div className={`flex flex-col md:gap-3 md:mt-4 md:${!cont.img == '' ? 'w-6/12' : '' }`}>

                                        {
                                            !cont.head == '' ?
                                            <h3 className="text-2xl">{cont.head}</h3> :''
                                        }
                                        {
                                            cont.type == 'text' ?
                                            <p >{cont.text}</p> 
                                            : cont.type == 'quoute' ? 
                                            <div className="flex items-center justify-center bg-gray-900 p-6 relative my-6">
                                                <div className="absolute w-1/12 h-1 bg-white top-0 left-0"></div>
                                                <div className="absolute w-1 h-1/5 bg-white top-0 left-0"></div>
                                                <div className="absolute w-1/12 h-1 bg-white bottom-0 right-0"></div>
                                                <div className="absolute w-1 h-1/5 bg-white bottom-0 right-0"></div>
                                                <i className="">{cont.text}</i>

                                            </div>

                                            : cont.type == 'list' ?
                                            <div className="flex flex-col pl-3 my-4">
                                                {
                                                    cont.list?.map((list, key) => (
                                                        <p key={key} className="flex gap-3">
                                                            <span className=" font-bold">{key + 1}.</span>
                                                            <span>{list}</span>

                                                        </p>
                                                    ))
                                                }
                                            </div> 
                                            
                                            : ''
                                        }
                                    </div>

                                </div>
                            ))
                            // blog.title[0]
                        }

                    </div>
                </div>
            </div>

            <div className="flex flex-col">

            </div>
            <MoreBlogs no={3} header={'Related Blogs'}/>
        </div>
        </>
    )
}