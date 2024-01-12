import { Blogs } from "../../assets/Constants"
import { PrimaryButton } from "../../Components/Button"
import { BlogComponent } from "./BlogComponent"


export const BlogList = () => {
    return(
        <div className="flex justify-center items-center w-full text-gray-200 py-9 my-9">
            <div className="flex flex-col justify-center xl:w-9/12 w-11/12 items-center gap-5 ">
                <div className="flex w-full items-center justify-between flex-col gap-3 md:flex-row md:gap-9">
                    <h2 className="text-3xl">Latest Blogs</h2>
                    <PrimaryButton text={'Explore All Blogs'} icon={'arrow-right'}/>
                </div>
                <div className="flex justify-center w-full items-center transition-all duration-500 gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 flex-col gap-5 ">
                    {
                        Blogs.map((blog, key) =>(
                            key < 3 ?
                            <BlogComponent key={key} blog={blog}/> 
                            :''
                        ))
                    }
                </div>
            </div>
        </div>
    )
}