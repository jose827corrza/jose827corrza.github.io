import { NavLink } from 'react-router-dom'
import { SiWhatsapp } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const NavBar = () => {
  return (
    <nav className={`flex fixed z-10 w-full  top-0 justify-between items-center px-8 pt-2 bg-headers`} >
        <ul className='flex justify-between w-full'>
            <li>
                <p>Logo</p>
                {/* Icon */}
            </li>
            <li>
                <div className='grid grid-flow-col gap-3'>
                    <NavLink to={'/'}>
                        <h3 className='text-2xl font-semibold'>Home</h3>
                    </NavLink>
                    <NavLink to={'/about-me'}>
                        <h3 className='text-2xl font-semibold'>About me</h3>
                    </NavLink>
                    <NavLink to={'/projects'}>
                        <h3 className='text-2xl font-semibold'>Projects</h3>
                    </NavLink>
                </div>
            </li>
            <li>
                <div className='grid grid-flow-col gap-3'>
                    <a href="https://wa.me/+573059044855" rel="noopener noreferrer">
                        <SiWhatsapp fill="#000" size={24}/>
                    </a>
                    <a href="https://github.com/jose827corrza" className="contact" rel="noopener noreferrer">
                    <AiFillGithub fill="#000" size={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jose-daniel-corredor/?locale=en_US" className="contact" rel="noopener noreferrer">
                        <BsLinkedin fill="#000" size={24}/>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar