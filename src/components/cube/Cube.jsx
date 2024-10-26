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
            <div className={`transition-all duration-700  cube text-[4rem] ${dark ? 'text-black' : 'text-white'}`}>
                <div className={`transition-all duration-700 text-blue-600 face flex flex-col font-GIT  bg-opacity-45 bg-focus front ${dark ? 'bg-white ' : 'bg-black'}`}
                    style={dark ? { boxShadow: "inset 0 0 20px rgba(255, 0, 0, 0.5)" } : { boxShadow: "inset 0 0 20px rgba(0, 255, 255, 0.5)" }}

                ><FaReact className='rotAni' /><span className='text-[1.2rem]'>REACT</span></div>

                <div className={`transition-all duration-700  face back  bg-opacity-45 bg-focus  flex flex-col font-GIT  text-green-600 ${dark ? 'bg-white' : 'bg-black'}`}
                    style={dark ? { boxShadow: "inset 0 0 20px rgba(255, 0, 0, 0.5)" } : { boxShadow: "inset 0 0 20px rgba(0, 255, 255, 0.5)" }}
                ><FaNodeJs className='rotAni' /><span className='text-[1.2rem]'>NODE</span></div>

                <div className={`transition-all duration-700 face right  bg-opacity-45 bg-focus  flex flex-col font-GIT  text-green-700 ${dark ? 'bg-white' : 'bg-black'}`}
                    style={dark ? { boxShadow: "inset 0 0 20px rgba(255, 0, 0, 0.5)" } : { boxShadow: "inset 0 0 20px rgba(0, 255, 255, 0.5)" }}
                ><SiMongodb className='rotAni' /><span className='text-[1.2rem]'>MONOGO DB</span></div>
                <div className={`transition-all duration-700 face left  bg-opacity-45 bg-focus   flex flex-col font-GIT  text-blue-700 ${dark ? 'bg-white' : 'bg-black'}`}
                    style={dark ? { boxShadow: "inset 0 0 20px rgba(255, 0, 0, 0.5)" } : { boxShadow: "inset 0 0 20px rgba(0, 255, 255, 0.5)" }}
                ><TbBrandReactNative className='rotAni' /><span className='text-[1.2rem]'>REACT NATIVE</span></div>
                <div className={`transition-all duration-700 face   bg-opacity-45 bg-focus flex flex-col font-GIT   top ${dark ? 'bg-white text-orange-600' : 'bg-black text-orange-400'}`}
                    style={dark ? { boxShadow: "inset 0 0 20px rgba(255, 0, 0, 0.5)" } : { boxShadow: "inset 0 0 20px rgba(0, 255, 255, 0.5)" }}
                ><IoLogoFirebase className='rotAni' /><span className='text-[1.2rem]'>FIREBASE</span></div>
                <div className={`transition-all text-blue-600 duration-700 flex flex-col font-GIT     bg-opacity-45 bg-focus face bottom ${dark ? 'bg-white' : 'bg-black'}`}
                    style={dark ? { boxShadow: "inset 0 0 20px rgba(255, 0, 0, 0.5)" } : { boxShadow: "inset 0 0 20px rgba(0, 255, 255, 0.5)" }}
                ><SiRecoil className='rotAni' /><span className='text-[1.2rem]'>RECOIL</span></div>
            </div>
        </div>
    )
}

export default Cube
