import { Blogs } from "../../assets/Constants"
import { PrimaryButton } from "../../Components/Button"
import { BlogComponent } from "./BlogComponent"


export const BlogList = ({no}) => {
    return(
        <div className="flex justify-center w-full items-center transition-all duration-500 gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 flex-col gap-5 ">
        {
            Blogs.map((blog, key) =>(
                key < no ?
                <BlogComponent key={key} blog={blog}/> 
                :''
            ))
        }
    </div>
    )
}