import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton }  from '../../Components/Button'

export const BlogComponent = ({blog}) => {
    return(
        <Link to={`/${blog.link}`} className="flex flex-col justify-between overflow-hidden relative p-1 rounded-xl h-full">
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
            <div className='h-2/5 overflow-hidden flex items-center justify-center rounded-t'>
                <img src={blog.img} alt={blog.title} className='w-fit h-fit'/>
            </div>
            <div className="flex flex-col gap-4 p-2 h-3/5">
                <h3 className="text-xl">{blog.title}</h3>
                <p className="text-sm text-gray-300">{blog.desc}</p>
                <PrimaryButton text={'Read Blog'} icon={'arrow-right'}/>
            </div>
        </Link>
    )
}