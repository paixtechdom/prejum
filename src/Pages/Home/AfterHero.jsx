import { AfterHeroContent } from '../../assets/Constants'

export const AfterHero = () => {
    return(
        <div className="flex justify-center items-center w-full text-gray-200 py-9 border-t border-b  border-gray-500">
            <div className="flex justify-center xl:w-9/12 w-11/12 items-center transition-all duration-500 gap-2 md:flex-row sm:flex-col flex-col">
                {
                    AfterHeroContent.map((content, key)  =>(
                        <div key={key} className='overflow-hidden relative p-3 left-0 rounded-xl'>
                            <>
                            <div className="absolute top-0 trr" style={{
                                width: 2+'px',
                                height: 150+'px',
                                right: 0
                            }}></div>
                            <div className="line absolute top-0 trt" style={{
                                width: 150+'px',
                                height: 2+'px',
                                right: 0
                            }}></div>
                            <div className="absolute bottom-0 bll" style={{
                                width: 2+'px',
                                height: 150+'px',
                                left: 0
                            }}></div>
                            <div className="line absolute bottom-0 blb" style={{
                                width: 150+'px',
                                height: 2+'px',
                                left: 0
                            }}></div>
                            </>
                            <div className='flex flex-col gap-2 m-3 items-center text-center'>
                                <i className={`bi bi-${content.img} text-5xl`}></i>
                                <h3 className='text-lg'>{content.title}</h3>
                                <p className='text-gray-300 text-sm'>{content.content}</p>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}