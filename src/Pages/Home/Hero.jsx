import { SocialMediaInfo } from '../../assets/Constants'
import me from '../../assets/Images/me2.png'
import girl2 from '../../assets/Images/girl 2.png'
import { PrimaryButton, SecondaryButton } from '../../Components/Button'

export const Hero = () => {
    return(
        <div className="flex justify-center items-center w-full bg-gradient-to-l from-gray-900 to-pink-900 text-gray-200 h-screen relativ">
                <div className='absolute w-full flex justify-end h-full' style={{
                }}>
                    <img src={girl2} alt={girl2} className='opacity-50'/>
                </div>
            <div className="flex justify-center xl:w-9/12 w-11/12 items-center transition-all duration-500 h-full relative">
                <div className="flex justify-center items-center flex-col text-center gap-9 mt-9">
                    {/* <p className='text-gray-200 text-xl'>PREJUM BLOG</p> */}
                    <h1 className="text-3xl md:text-5xl w-8/12">
                        Premium contents for teenage girls and youths
                    </h1>
                    <p className='text-gray-300 text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus animi quidem delectus, hic pariatur ut in sunt sit dolore, natus atque. Sapiente, iure numquam vel exercitationem pariatur voluptatum cumque.</p>

                    <div className="flex gap-3 mt-3">
                        <PrimaryButton icon='search' text={'Search'}/>
                        <SecondaryButton icon='bell-fill' text={'Suscribe'}/>
                    </div>
                    <div className="flex gap-6">
                        {
                            SocialMediaInfo.map((media, key) => (
                                <div key={key}>
                                    <i className={`bi bi-${media.icon} text-2xl text-gray-300`}></i>
                                </div>
                            ))
                        }
                    </div>
                    <div className="absolute bottom-0 mb-9 pb-9 upDown transition-all duration-500">
                        <PrimaryButton icon='arrow-down'/>
                    </div>
                </div>
            </div>
        </div>
    )
}