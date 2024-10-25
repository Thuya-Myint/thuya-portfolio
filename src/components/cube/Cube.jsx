import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRecoil } from "react-icons/si";
import { darkState } from '../state/atom'
import { useRecoilValue } from 'recoil';

const Cube = () => {
    const dark = useRecoilValue(darkState);
    return (
        <div className='cube-container  w-[90%] h-[90%] flex items-center justify-center overflow-hidden'>
            <div className={`transition-all duration-700 cube text-[4rem] ${dark ? 'text-black' : 'text-white'}`}>
                <div className={`transition-all duration-700 text-blue-600 face  bg-opacity-45 bg-focus front ${dark ? 'bg-white ' : 'bg-black'}`}><FaReact /></div>
                <div className={`transition-all duration-700  face back  bg-opacity-45 bg-focus text-green-600 ${dark ? 'bg-white' : 'bg-black'}`}><FaNodeJs /></div>
                <div className={`transition-all duration-700 face right  bg-opacity-45 bg-focus text-green-700 ${dark ? 'bg-white' : 'bg-black'}`}><SiMongodb /></div>
                <div className={`transition-all duration-700 face left  bg-opacity-45 bg-focus  text-blue-700 ${dark ? 'bg-white' : 'bg-black'}`}><TbBrandReactNative /></div>
                <div className={`transition-all duration-700 face   bg-opacity-45 bg-focus top ${dark ? 'bg-white text-orange-600' : 'bg-black text-orange-400'}`}><IoLogoFirebase /></div>
                <div className={`transition-all text-blue-600 duration-700   bg-opacity-45 bg-focus face bottom ${dark ? 'bg-white' : 'bg-black'}`}><SiRecoil /></div>
            </div>
        </div>
    )
}

export default Cube
