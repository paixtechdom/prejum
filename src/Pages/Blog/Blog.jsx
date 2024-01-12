import { useContext, useEffect } from "react"
import { AppContext } from "../../assets/Contexts/AppContext"


export const Blog = () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
      setCurrentNav('Blog')
    }, [])

    return(
        <div>
            Blog
        </div>
    )
}