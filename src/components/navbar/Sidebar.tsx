import { RefObject, useEffect,  useRef } from 'react'
import { GrClose } from "react-icons/gr"
import NavbarLink from "./NavbarLink"
import {BsFacebook, BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs'

interface Sidebar { 
    closeEvent: () => void
}

const Sidebar = ({closeEvent}: Sidebar) => {
    const element = useRef<HTMLInputElement>()
    
    useEffect(() => {
        const handler = (e : MouseEvent | EventTarget ) => {
            if(!element.current?.contains(e.target)) {
                closeEvent()
            }
        }
        document.addEventListener('click', handler, true)
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

  return (
    <div ref={element as RefObject<HTMLDivElement>} className='absolute top-0 right-0 w-[240px] h-screen  bg-card shadow-lg animation_right flex items-center justify-between flex-col px-5 py-10 pt-16'>
    <button className='absolute top-4 right-4'><GrClose className='text-2xl font-bold' onClick={closeEvent}/></button>
   <div className="flex flex-col  w-full">
  <NavbarLink clickEvent={closeEvent} path='/' icon='../icons/home.svg' text='Home' />
  <NavbarLink clickEvent={closeEvent} path='/' icon='../icons/categories.svg' text='Books' />
  <NavbarLink clickEvent={closeEvent} path='/about' icon='../icons/about.svg' text='About' />
  <NavbarLink clickEvent={closeEvent} path='/location' icon='../icons/location.svg' text='Location' />
  <NavbarLink clickEvent={closeEvent} path='/books' icon='../icons/book.svg' text='Writers' />
  <NavbarLink clickEvent={closeEvent} path='/login' icon='../icons/login.svg' text='Login' />
  <NavbarLink clickEvent={closeEvent} path='/register' icon='../icons/register.svg' text='Sign up' />
   </div>
   <div className="flex gap-4">
   <BsFacebook className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
<BsInstagram className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
<BsTwitter className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
<BsGithub className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
   </div>
    </div>
  )
}

export default Sidebar