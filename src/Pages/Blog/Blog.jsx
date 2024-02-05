import { useContext, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { AppContext } from "../../assets/Contexts/AppContext"
import { Search } from "../../Components/Search"
import { BlogList } from "./BlogList"
import { BlogHero } from "./BlogHero"
import { Blogs } from "../../assets/Constants"


export const Blog = () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
      setCurrentNav('Blog')
      document.documentElement.scrollTop = 0
    }, [])

    return(
        <>
         <Helmet>
              <title>{`Blog Page - PREJUM`}</title>
          </Helmet>
          <p className="mt- pt-9"></p>
            <BlogHero blog={Blogs[0]} icon={'arrow-right'} btnText={'Read blog'}/>
            <div className="bg-gradient-to-l from-gray-900 to-pink-900 flex flex-col items-center">
                <Search />
                <div className="flex justify-center items-center w-full text-gray-200 pb-9 mb-9">
                    <div className="flex justify-center xl:w-9/12 w-11/12 items-center transition-all duration-500 gap-2 md:flex-row sm:flex-col flex-col">
                        <BlogList no={18}/>
                    </div>
                </div>
            </div>
        </>
    )
}