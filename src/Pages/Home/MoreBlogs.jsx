import { PrimaryButton } from "../../Components/Button"
import { BlogList } from "../Blog/BlogList"
import { Link } from "react-router-dom"

export const MoreBlogs = ({no, header}) => {
    return(
        <div className="flex justify-center items-center w-full text-gray-200 py-9 my-9">
        <div className="flex flex-col justify-center md:w-9/12 w-11/12 items-center gap-5 ">
            <div className="flex w-full items-center justify-between flex-co gap-3 md:flex-row md:gap-9">
                <h2 className="text-2xl">{header.toUpperCase()}</h2>
                <Link to='/Blog'>
                <PrimaryButton text={'Explore'} icon={'arrow-right'}/>
                </Link>
            </div>
           <BlogList no={no}/>
        </div>
    </div>
    )
}