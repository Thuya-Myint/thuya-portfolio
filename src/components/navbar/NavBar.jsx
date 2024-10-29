import React from 'react'
import Toggle from '../toggle/Toggle'
import { darkState } from '../state/atom'
import { useRecoilState } from 'recoil'
import { currentState } from '../state/atom'
import { NavLinks } from '../constants'
import { contactState } from '../state/atom'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
    const [dark, setDark] = useRecoilState(darkState);
    const [current, setCurrent] = useRecoilState(currentState);
    const [contact, setContact] = useRecoilState(contactState);
    const navigate = useNavigate();

    const handleCurrent = (name, path) => {
        setCurrent('')
        setCurrent(name)
        setContact(false)
        if (name === 'CONTACT') {
            setContact(!contact)
        }
        if (name === 'HOME') navigate('/')
        else navigate(path)
    }
    return (
        <div className={`transition-all duration-700  fixed top-0 left-0 z-50 w-full h-[8vh] flex items-center justify-center ${dark ? 'bg-black ' : 'bg-white '}`}
        >
            <div className={`w-[90%] h-full font-GIT flex items-center `}>
                {
                    NavLinks.map(nav => (
                        <div key={nav.id} className={`navText flex items-center h-full relative cursor-pointer p-4  ${dark ? 'text-white' : 'text-black'} `}
                            onClick={() => handleCurrent(nav.name, nav.path)}
                        >
                            {nav.name}
                            <div className={`transition-all bg-opacity-20 duration-500 absolute navTextC ${current === nav.name ? 'h-full' : 'h-0'} bottom-0 h-0  left-0 w-full ${dark ? 'bg-white' : 'bg-black'}`}></div>
                        </div>
                    ))
                }
            </div>
            <div className='w-[10%] h-[8vh] flex items-center justify-center'>
                <Toggle />
            </div>
        </div>
    )
}

export default NavBar
