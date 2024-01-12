import { Card, CardImageOverlay } from "../../Components/Card"
import person from '../../assets/Images/person.jpg'
import advert from '../../assets/Images/images (9).jpeg'
import { BlogList } from "../Blog/BlogList"
import { Suscribe } from "../../Components/Forms"
import { useContext, useEffect } from "react"
import { AppContext } from "../../assets/Contexts/AppContext"


export const About= () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
      setCurrentNav('About')
    }, [])

    return(
        <div className="bg-gradient-to-l from-gray-900 to-pink-900 pt-9 mt-">

          <CardImageOverlay header={'Purpose for creating the blog'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque'} buttonText={'Read More'} buttonIcon={'arrow-down'} buttonLink={'About'} w={'9/12'}  img={advert}/>
          <div className="mt-9 pt-9"></div>
          <Card header={"Passion and misison of the blog"} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque, . Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 'que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 'que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} buttonText={'Read More'} buttonIcon={'arrow-down'} buttonLink={'About'} w={'9/12'}  img={person}/>

          <div className="my-9 py-9 bg-gray-900">

          <Card header={"Personal background"} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 'et consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 'et consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} buttonText={'Read More'} buttonIcon={'arrow-down'} buttonLink={'About'} w={'9/12'}  img={advert} clas={'flex-row-reverse'}/>
          </div>
          <BlogList />
          <div className="border-t border-b">
            <Card header={"Motivation for creating the blog"} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 't amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 't amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} w={'9/12'}  img={person}/>

          </div>
          <Suscribe />
        </div>
    )
}