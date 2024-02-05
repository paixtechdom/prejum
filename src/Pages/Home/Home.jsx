import { Card, CardImageOverlay } from "../../Components/Card"
import { BlogList } from "../Blog/BlogList"
import { AfterHero } from "./AfterHero"
import { Hero } from "./Hero"
import person from '../../assets/Images/person.jpg'
import advert from '../../assets/Images/images (9).jpeg'
import { CategoriesDisplay } from "./CategoriesDisplay"
import { Suscribe } from "../../Components/Forms"
import { useContext } from "react"
import { AppContext } from "../../assets/Contexts/AppContext"
import { useEffect } from "react"
import { Blogs } from "../../assets/Constants"
import { BlogComponent } from "../Blog/BlogComponent"
import { PrimaryButton } from "../../Components/Button"
import { Helmet } from "react-helmet-async"
import { MoreBlogs } from "./MoreBlogs"

export const Home = () => {
  const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
      setCurrentNav('Home')
      document.documentElement.scrollTop = 0
    }, [])
    return(
        <div className="bg-gradient-to-l from-gray-900 to-pink-900">
           <Helmet>
              <title>{`Home Page - PREJUM`}</title>
          </Helmet>
          <Hero />  
          <AfterHero />
          <Card header={'Purpose of the blog Lorem ipsum dolor'} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} buttonText={'Read More'} buttonLink={'About'} img={person}/>
          <MoreBlogs no={3} header={'Latest Blogs'}/>
          <CardImageOverlay header={'Mission of the blog Lorem ipsum dolor'} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} buttonText={'Read More'} buttonLink={'About'} img={advert}/>
          <CategoriesDisplay />
            <Suscribe />
        </div>
    )
}