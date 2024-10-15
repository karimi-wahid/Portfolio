import logo from '../assets/logo1.png'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-15 mb-3 h-[80px] w-full border-b border-stone-800'>
        <div className='flex flex-shrink-0 items-center w-[50%]'>
            <a href="/" aria-label='Home'>
                <img src={logo} alt="profile photo" className='mx-2 lg:w-[30%] w-[50%]' />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-3xl'>
            <a href="https://www.linkedin.com/in/wahidullah-karimi-216a2425b" target='_blank' rel='noopener noreferrer' aria-label='Linked In'>
                <FaLinkedin />
            </a>
            <a href="https://github.com/karimi-wahid?tab=repositories" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                <FaGithubSquare />
            </a>
        </div>
        
    </nav>
  )
}

export default Navbar