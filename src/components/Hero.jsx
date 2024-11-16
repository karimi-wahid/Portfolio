import { motion } from 'framer-motion'
import myPhoto from '../assets/myPhoto.jpg'
import { aboutMe } from '../indexData'


const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}


const Hero = () => {
    const resume = 'resume.pdf'
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8 w-full'>
                        <motion.img
                            src={myPhoto}
                            alt="photo"
                            className='border border-stone-900 rounded-3xl w-[90%] lg:w-[70%] h-[400px] object-cover'
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }} />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={containerVariants}

                        className='flex flex-col lg:items-start mt-10 w-full'>
                        <motion.h2
                            variants={childVariants}
                            className='pb-2 text-4xl tracking-tighter lg:text-6xl'>Wahidullah Karimi</motion.h2>
                        <motion.span
                            variants={childVariants}
                            className='bg-gradient-to-r from-stone-300 to-stone-800 bg-clip-text text-3xl tracking-tight text-transparent'>Front End Developer</motion.span>
                        <motion.p
                            variants={childVariants}
                            className='my-2 max-w-lg py-4 text-xl leading-relaxed tracking-tighter'>
                            {aboutMe.info}
                        </motion.p>
                        <motion.a
                            variants={childVariants}
                            href="../../resume.pdf" target='_blank' rel='noopener noreferrer' download='resume' className='w-2/4 text-center bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-gradient-to-r from-green-600 to-green-800 transition-colors duration-500 hover:text-white'>Download Resume</motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero