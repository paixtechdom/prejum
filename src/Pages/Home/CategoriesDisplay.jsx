import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Categories } from "../../assets/Constants"
import { PrimaryButton } from "../../Components/Button"
import girl from '../../assets/Images/girl 2.png'



export const CategoriesDisplay = () => {
    const [ currentCategory, setCurrentCategory ] = useState(0)
    useEffect(() => {
        setCurrentCategory(0)
    }, [])

    useEffect(() => {
        const int = setInterval(() => {
            changeCategory()
        }, 4000);
        return () => clearInterval(int)
    }, [currentCategory])

    const changeCategory = () => {
            setCurrentCategory(currentCategory == Categories.length - 1 ? 0 : currentCategory + 1 )
    }
 

    return(
        <div className="flex justify-center items-center w-full text-gray-200 py-9 mt-9 border-b border-gray-500">
            <div className="flex flex-col justify-between md:w-9/12 w-11/12 items-center transition-all duration-1000 md:gap-9 gap-9 md:flex-row h-full my-9">
            <div className={`rounded-full border border-2 relative flex justify-center items-center w-full scale-75 md:scale-10`} style={{
                    width: 300+'px',
                    height: 300+'px',
                    borderColor: 'rgb(225, 225, 225, 0.1)'
                }}>
                    <div className="flex flex-col items-center absolute text-gray-200 text-xl opacity-90">
                        {/* <img src={girl} alt="" className="w-6/12"/> */}
                        <div className="">BLOG CATEGORIES</div>
                    </div>
                    <div className="flex flex-col h-full w-full justify-between items-center scale-125">
                        {
                            Categories.map((category, key) => (
                                key == 0 ?
                                <CategoryDiv key={key} i={key} category={category} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
                                 : ''
                            ))
                        }
                        <div className="w-full flex justify-between">
                        {
                            Categories.map((category, key) => (
                                key < 3 && key > 0 ? 
                                <CategoryDiv key={key} i={key} category={category} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
                                : ''
                                ))
                        }
                        </div>
                        {
                            Categories.map((category, key) => (
                                key == Categories.length - 1 ? 
                                <CategoryDiv key={key} i={key} category={category} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
                                : ''
                                ))
                        }
                    </div>
                </div>
                <div className="flex flex-col h-full w-full md:w-6/12 justify-between items-center gap-3 text-center md:items-right mt-9 md:mt-0 overflow-hidden pt-9 md:pt-0">
                    {/* <img src={Categories[currentCategory].img} alt={currentCategory.title} className="w-4/12" /> */}
                    <p className={`bi bi-${Categories[currentCategory].icon}`} style={{
                    transform: 'scale(4.5)',
                    }}>
                    </p>

                    <div className="w-full mt-2 md:mt-0">
                        <div className="transition-all duration-500 flex justify-start" style={{
                            width: 400+'%',
                            transform: `translateX(-${currentCategory * (100 / Categories.length)}%)`,
                        }}>
                            {
                                Categories.map((cat, key) => (
                                    <h3 key={key} className="text-2xl w-full" >{cat.title}</h3>

                                ))
                            }

                        </div>

                    </div>
                    <div className="w-full">
                        <div className="w-full" style={{
                            transform: 'translateX(-300%)'
                        }}>
                            <div className="transition-all duration-1000 flex flex-row-reverse" style={{
                                width: 400+'%',
                                transform: `translateX(${currentCategory * (100 / Categories.length)}%)`,
                            }}>
                                {
                                    Categories.map((cat, key) => (
                                        <p key={key} className="text-gray-300 w-full px-4  line-25 text-sm">{cat.desc}</p>

                                    ))
                                }

                            </div>

                        </div>
                    </div>
                    <Link to={``}>
                        <PrimaryButton text={'Explore Now'} icon='arrow-right'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}


const CategoryDiv = ({category, setCurrentCategory, i, currentCategory}) => {
   return(
    <div className={`flex flex-col items-center w-fit bg-pink-90 cursor-pointer transition-all duration-200 ${currentCategory == i ? 'scale-90 md:scale-100' : 'opacity-70 md:opacity-70 scale-75 md:scale-90'}`} onClick={() => {
        setCurrentCategory(i)
    }}>
        <div className="flex flex-col items-center gap-3">
            {/* <img src={category.img} alt={category.title} className="" style={{
            width: 50+'px'
            }}/> */}
            <i className={`bi bi-${category.icon}`} style={{
            // width: 80+'px',
            transform: 'scale(2.5)'
            }}/>
            <h3 className="text-gray-300 text-sm">
                {category.title}
            </h3>
        </div>
    </div>
 )
}