import React from 'react'
import { IoMdSunny } from "react-icons/io";
import { LuMoon } from "react-icons/lu";
import { useRecoilState } from 'recoil';
import { darkState } from '../state/atom'
const Toggle = () => {
    const [dark, setDark] = useRecoilState(darkState);
    return (
        <div className={`transition-all duration-300 w-[45%] ${dark ? 'bg-white' : 'bg-black'} h-1/2 bg-opacity-25 rounded-full flex items-center justify-between px-1 relative`}>
            <IoMdSunny className=' text-[1.4rem] text-white' />
            <LuMoon className='text-[1.4rem] text-black' />
            <div className={`transition-all flex items-center justify-center duration-300 absolute w-[25px] h-[25px] cursor-pointer ${dark ? 'bg-black left-[6%] ' : 'bg-white left-[55%] '}  rounded-full`} onClick={() => setDark(!dark)}
                style={dark ? { boxShadow: `2px 4px 25px white` } : { boxShadow: `2px 4px 25px black` }}
            >

            </div>
        </div>
    )
}

export default Toggle
