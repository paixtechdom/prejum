import person from './Images/person.jpg'
import education from './Images/image.jpg'
import shoe from './Images/images_(15)-transformed.png'
import organization from './Images/organization.jpg'
import blog from './Images/images (6).jpeg'
import img5 from './Images/design.jpeg'
import img6 from './Images/images (9).jpeg'
import img7 from './Images/maintenance.jpeg'
import img8 from './Images/image.jpg'
import girl1 from './Images/girl 1.png'


const NavInfo = [
    {
        title: 'Home',
        icon: 'house',
        link: ''
    },
    {
        title: 'About',
        icon: 'person',
        link: 'About'
    },
    {
        title: 'Blog',
        icon: 'book',
        link: 'Blog'
    },
    {
        title: 'Contact',
        icon: 'telephone',
        link: 'Contact'
    },
]

const SocialMediaInfo = [
    {
        icon: 'facebook'
    },
    {
        icon: 'instagram'
    },
    {
        icon: 'twitter'
    },
    {
        icon: 'whatsapp'
    },
    {
        icon: 'tiktok'
    },
]

const AfterHeroContent = [
    {
        img: 'compass',
        title: 'Lorem this',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos laudantium voluptates soluta sint'
    },
    {
        img: 'stopwatch',
        title: 'Lorem that',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos laudantium voluptates soluta sint'
    },
    {
        img: 'snow',
        title: 'Lorem those',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos laudantium voluptates soluta sint'
    }
]

const Blogs = [
    {
        title: 'Tech 1 ignissimos cumque fuga qui quibusdam quia',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '12 July, 2023',
        img: img5,
        id: 'latestBlog',
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Tech'
        
    },
    {
        title: 'Career 2 optio tempore voluptas quia',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '13 Aug, 2023',
        img: img6,
        id: 'blog2',
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Career'
                
        
    },
    {
        title: 'Tools 3 optio tempore voluptas dignissimos cu',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '14 Sept, 2023',
        id: 'blog3',
        img: img7,
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Tools'
        
        
    },
    {
        title: 'Education 4 optio tempore voluptcumq',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '15 Oct, 2023',
        id: 'blog4',
        img: img8,
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Education'

    },
    {
        title: 'Techie 5 optio temp voluptacu',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '14 Sept, 2023',
        id: 'blog3',
        img: img7,
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Tech'
        
        
    },
    {
        title: 'Toolsie 6 optio tempore voluptas dignissimos cumq',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '15 Oct, 2023',
        id: 'blog4',
        img: img8,
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Tools'

    },
]

const Categories = [
    {
        title: 'Personal Development',
        desc: 'Personal Development ut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
        img: girl1
    },
    {
        title: 'Education',
        desc: 'Education ut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
        img: girl1
    },
    {
        title: 'Finance',
        desc: 'Finance ut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
        img: girl1
    },
    // {
    //     title: 'Lifestyle',
    //     desc: 'ut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
    //     img: girl1
    // },
    {
        title: 'Communication',
        desc: 'Communication ut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
        img: girl1
    },
]
export { NavInfo, SocialMediaInfo, AfterHeroContent, Blogs, Categories }