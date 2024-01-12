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

export const Home = () => {
  const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
      setCurrentNav('Home')
    }, [])
    return(
        <div className="bg-gradient-to-l from-gray-900 to-pink-900">
          <Hero />  
          <AfterHero />
          <Card header={'Purpose of the blog Lorem ipsum dolor'} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} buttonText={'Read More'} buttonLink={'About'} img={person}/>
          <BlogList />
          <CardImageOverlay header={'Mission of the blog Lorem ipsum dolor'} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} buttonText={'Read More'} buttonLink={'About'} img={advert}/>
          <CategoriesDisplay />
          <Suscribe />
        </div>
    )
}