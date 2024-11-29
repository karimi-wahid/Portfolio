import foodImg from './assets/food_img.jpg'
import jobImg from './assets/job_portal.jpg'
import nurtureImg from './assets/nurture.png'
import earthStore from './assets/earth-store.jpg'


export const aboutMe = {
    info : `Hello! I'm Front-end developer. And I have knowledge of some web development technologies like JavaScript, Tailwind CSS, React.js, Git and Github.

    With a passion for creating dynamic and responsive web applications. I am eager to enhance my skills in front-end and look forward to the opportunities ahead in the tech industry.`
}

export const project = [
    {
        title: 'Natural-Nurture eCommerce',
        description: 'This is e-commerce website focuses on beauty products, providing a seamless shopping experience while promoting sustainability. Key features: Modern designProduct, user-friendly interface, Responsive design for mobile and desktop devices.',
        image: nurtureImg,
        technologies: ['React', 'Tailwind CSS'],
        linkToProject: 'https://natural-nurture-k.netlify.app/'
    },
    {
        title: 'Earth-Store eCommerce',
        description: 'This e-commerce website focuses on eco-friendly products, providing a seamless shopping experience while promoting sustainability.Key Features: User-friendly interface with clean, modern designProduct browsing and filter options for easy navigation Responsive design for mobile and desktop devices, Secure checkout process for user convenience Giving discount based on coupon code',
        image: earthStore,
        technologies: ['React', 'Tailwind CSS'],
        linkToProject: 'https://earth-store-k.netlify.app/'
    },
    {
        title: 'Job Portal',
        description: 'This is a user-friendly website for job portal. key features: User-friendly interface, filtering jobs based on type and time, fully responsive for mobile, tablet and desktop.',
        image: jobImg,
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Food App',
        description: 'This is a food application focuses on best food. key features: fully responsive for all devices, filtering food based on price and type.',
        image: foodImg,
        technologies: ['React', 'Tailwind CSS'],
	linkToProject: 'https://resturant-k.vercel.app/'
    },
]


export const Contacts = {
    address: 'Kart-E-Naw, 8 District, Kabul, AFG',
    phoneNo: '+93 766303465',
    email: 'wahidullah.karimi22@gmail.com'
}