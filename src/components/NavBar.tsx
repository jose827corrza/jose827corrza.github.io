import { NavLink } from 'react-router-dom'
import { SiWhatsapp } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

import logo from '../assets/logo.png'

export const NavBar = () => {
  return (
    <nav className={`flex fixed z-10 w-full  top-0 justify-between items-center px-8 pt-2 bg-headers bg-gray-300 pb-2 opacity-75`} >
        <ul className='flex justify-between w-full'>
            <li>
                <NavLink to={'/'}>
                    <img className='object-cover h-8 w-8' src={logo} alt="logo" />
                </NavLink>
            </li>
            <li>
                <div className='grid grid-flow-col gap-3'>
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-2xl font-semibold underline' : 'text-2xl font-semibold'
                            }
                        >
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink to={'/about-me'} className={({ isActive }) =>
                            isActive ? 'text-2xl font-semibold underline' : 'text-2xl font-semibold'
                            }>
                        <h3>About me</h3>
                    </NavLink>
                    <NavLink to={'/projects'} className={({ isActive }) =>
                            isActive ? 'text-2xl font-semibold underline' : 'text-2xl font-semibold'
                            }>
                        <h3>Projects</h3>
                    </NavLink>
                </div>
            </li>
            <li>
                <div className='grid grid-flow-col gap-3'>
                    <a href="https://wa.me/+573059044855" rel="noopener noreferrer">
                        <SiWhatsapp fill="#000" size={24}/>
                    </a>
                    <a href="https://github.com/jose827corrza" rel="noopener noreferrer">
                    <AiFillGithub fill="#000" size={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jose-daniel-corredor/?locale=en_US"  rel="noopener noreferrer">
                        <BsLinkedin fill="#000" size={24}/>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
  )
}

