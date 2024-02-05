import { Link } from 'react-router-dom'
import { AnimatedBorder } from '../../Components/AnimatedBorder'
import { PrimaryButton, SecondaryButton }  from '../../Components/Button'

export const BlogComponent = ({blog}) => {
    return(
        <Link to={`/Blog/${blog.id}`} className="flex flex-col justify-between overflow-hidden relative p-1 rounded-xl h-full">
           <AnimatedBorder />
            <div className='h-2/5 overflow-hidden flex items-center justify-center rounded-t rounded-b-xl'>
                <img src={blog.img} alt={blog.title} className='w-fit h-fit scale-'/>
            </div>
            <div className="flex flex-col gap-4 p-2 h-3/5 border border-t-0 border-gray-500 rounded rounded-t-xl">
                <h3 className="text-xl">{blog.title}</h3>
                <p className="text-sm text-gray-300  line-25">{blog.desc}</p>
                <PrimaryButton text={'Read Blog'} icon={'arrow-right'}/>

            </div>
        </Link>

    )
}