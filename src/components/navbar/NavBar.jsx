import React from 'react'
import Toggle from '../toggle/Toggle'
import { darkState } from '../state/atom'
import { useRecoilState } from 'recoil'
import { NavLinks } from '../constants'
import { useNavigate } from 'react-router-dom'
import WorkWithMe from '../workWithMe/WorkWithMe'
const NavBar = ({ active }) => {
    const [dark, setDark] = useRecoilState(darkState);
    const navigate = useNavigate();

    const handleCurrent = (name, path) => {
        if (name === 'HOME') navigate('/')
        else navigate(path)
    }
    return (
        <div className={`transition-all duration-700  fixed top-0 left-0 z-50 w-full h-[8vh] flex items-center justify-between ${dark ? 'bg-black ' : 'bg-white '}`}
        >
            <div className={`h-full font-GIT flex items-center `}>
                {
                    NavLinks.map((nav, index) => (
                        <div key={nav.id} className={`navText flex items-center h-full relative cursor-pointer p-4  ${dark ? 'text-white' : 'text-black'} `}
                            onClick={() => handleCurrent(nav.name, nav.path, index)}
                        >
                            {nav.name}
                            <div className={`transition-all bg-opacity-20 duration-500 absolute navTextC ${active === index + 1 ? 'h-full' : 'h-0'} bottom-0 h-0  left-0 w-full ${dark ? 'bg-white' : 'bg-black'}`}></div>
                        </div>
                    ))
                }
            </div>
            <WorkWithMe />
            <div className='w-[10%] h-[8vh] flex items-center justify-center'>
                <Toggle />
            </div>
        </div>
    )
}

export default NavBar
