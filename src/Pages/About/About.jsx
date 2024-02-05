import { Card, CardImageOverlay } from "../../Components/Card"
import person from '../../assets/Images/person.jpg'
import advert from '../../assets/Images/images (9).jpeg'
import { BlogList } from "../Blog/BlogList"
import { Suscribe } from "../../Components/Forms"
import { useContext, useEffect } from "react"
import { AppContext } from "../../assets/Contexts/AppContext"
import { PrimaryButton } from "../../Components/Button"
import { Helmet } from "react-helmet-async"


export const About= () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
      setCurrentNav('About')
      document.documentElement.scrollTop = 0
    }, [])

    return(
        <div className="bg-gradient-to-l from-gray-900 to-pink-900 pt-9 mt-">
          <Helmet>
            <title>{`About PREJUM`}</title>
          </Helmet>
          <CardImageOverlay header={'Purpose for creating the blog'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque'} buttonText={'Read More'} buttonIcon={'arrow-down'} goTo='mission' buttonLink={'About'} w={'9/12'}  img={advert}/>
          <div className="mt-9 pt-9"></div>
          <Card header={"Passion and misison of the blog"} id={'mission'} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque, . Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 'que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 'que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque que. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} buttonText={'Read More'} buttonIcon={'arrow-down'} goTo='personal' buttonLink={'About'} w={'9/12'}  img={person}/>

          <div className="my-9 py-9 bg-gray-900">

          <Card id={'personal'} header={"Personal background"} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 'et consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 'et consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} buttonText={'Read More'} buttonIcon={'arrow-down'} goTo='blogList' buttonLink={'About'} w={'9/12'}  img={advert} clas={'flex-row-reverse'}/>
          </div>
          <div className="flex justify-center items-center w-full text-gray-200 py-9 my-9">
            <div className="flex flex-col justify-center xl:w-9/12 w-11/12 items-center gap-5 ">
                <div className="flex w-full items-center justify-between flex-col gap-3 md:flex-row md:gap-9">
                    <h2 className="text-3xl">Latest Blogs</h2>
                    <PrimaryButton text={'Explore All Blogs'} icon={'arrow-right'}/>
                </div>
               <BlogList no={3}/>
            </div>
        </div>          <div className="border-t border-b">
            <Card header={"Motivation for creating the blog"} text={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 't amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque', 't amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque']} w={'9/12'}  img={person}/>

          </div>
          <Suscribe />
        </div>
    )
}