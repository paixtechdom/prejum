import { AfterHeroContent } from '../../assets/Constants'
import { AnimatedBorder } from '../../Components/AnimatedBorder'

export const AfterHero = () => {
    return(
        <div className="flex justify-center items-center w-full text-gray-200 py-9 border-t border-b  border-gray-500">
            <div className="flex justify-center md:w-9/12 w-11/12 items-center transition-all duration-500 gap-2 md:flex-row sm:flex-col flex-col">
                {
                    AfterHeroContent.map((content, key)  =>(
                        <div key={key} className='overflow-hidden relative p-3 left-0 rounded-xl'>
                            <AnimatedBorder />
                            <div className='flex flex-col gap-2 m-3 items-center text-center'>
                                <i className={`bi bi-${content.img} text-5xl`}></i>
                                <h3 className='text-lg'>{content.title}</h3>
                                <p className='text-gray-300 text-sm line-25'>{content.content}</p>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}