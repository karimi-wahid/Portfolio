import foodImg from './assets/food_img.jpg'
import jobImg from './assets/job_portal.jpg'
import tourImg from './assets/tour_travel.jpg'
import movieImg from './assets/movieImg.jpg'


export const aboutMe = {
    info : `Hello! I'm fresher Front End developer. And I have knowledge of some web development technologies like JavaScript, Tailwind CSS, and React.js.

    With a passion for creating dynamic and responsive web applications, I aspire to become a full-stack web developer. I am eager to enhance my skills in both front-end and back-end development and look forward to the opportunities ahead in the tech industry.`
}

export const project = [
    {
        title: 'Tour & Travel App',
        description: 'This is a tour & travel application created with React.js and pure CSS. The app is a single-page application that features an About section, a Contact section and Services section. It is fully responsive, ensuring a seamless user experience across different devices.',
        image: tourImg,
        technologies: ['HTML', 'CSS', 'React'],
    },
    {
        title: 'Movie App',
        description: 'This is a movie application created with React.js and pure CSS. The app includes functionality that allows users to type in a search input and displays the corresponding movie. It is fully responsive, providing an optimal user experience across various devices.',
        image: movieImg,
        technologies: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
    },
    {
        title: 'Job Portal',
        description: 'This is a job portal application created with JavaScript and pure CSS. The app features a hero section, a contact page, and a browse jobs page. It includes functionality that allows users to browse jobs based on type and time.',
        image: jobImg,
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Food App',
        description: 'This is a food application created with React.js and Tailwind CSS. The app is a single-page application that features a hero section and a display of top-rated menu items. It includes functionality that allows users to filter food options based on type and price. The app is fully responsive, ensuring a seamless experience on various devices.',
        image: foodImg,
        technologies: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
    },
]


export const Contacts = {
    address: 'Kart-E-Naw, 8 District, Kabul, AFG',
    phoneNo: '+93 766303465',
    email: 'wahidullah.karimi22@gmail.com'
}