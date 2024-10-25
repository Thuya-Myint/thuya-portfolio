import React, { useRef, useState } from 'react'
import NavBar from '../navbar/NavBar'
import WorkWithMe from '../workWithMe/WorkWithMe'
import { darkState } from '../state/atom'
import { useRecoilValue } from 'recoil'
import { FaCode } from "react-icons/fa6";
import { TbDevicesCode } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRecoil } from "react-icons/si";
import Cube from '../cube/Cube'
import { IoIosArrowDown } from "react-icons/io";
const Home = () => {
    const dark = useRecoilValue(darkState)
    const skill = useRef();
    const intro = useRef();
    const [click, setClick] = useState(false);

    const handelScrollToSkill = () => {
        if (click) {
            intro.current.scrollIntoView(
                {
                    behavior: "smooth",
                    block: "start",
                }
            )
        } else {
            skill.current.scrollIntoView(
                {
                    behavior: "smooth",
                    block: "start",
                }
            )
        }
        setClick(!click)
    }
    return (
        <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'}  transition-all relative duration-700 w-screen  mt-[8vh]  flex flex-col items-center overflow-hidden`}>
            <NavBar />
            <div ref={intro} className='w-full h-[92vh] flex '>
                <div className='w-2/3 font-GIT flex flex-col mt-[10%] p-4'>
                    <div className='text-[3rem] opacity-65'>Hi! I'm Thuyamyint.</div>
                    <div className='text-[1.8rem] flex items-center'>I'm a Beginner Full-Stack WEB <FaCode className='mx-4' /> Developer! & Mobile <TbDevicesCode className='mx-4' /> Creator!</div>
                    <div className='text-[1.4rem]'>
                        These are my main Languages!
                        <div className='w-full mt-2 flex items-center '>
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center`}>
                                <FaReact className=' text-[1.8rem] text-blue-600' />
                            </div>
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] ml-2 rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center`}>
                                <FaNodeJs className=' text-[1.8rem] text-green-600' />
                            </div>
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] ml-2 rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center`}>
                                <div className={`text-[0.6rem] ${dark ? 'text-yellow-300' : 'text-yellow-600'}`}>Express</div>
                            </div>
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] ml-2 rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center`}>
                                <SiMongodb className=' text-[1.8rem] text-green-700' />
                            </div>
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] ml-2 rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center`}>
                                <TbBrandReactNative className=' text-[1.8rem] text-blue-700' />
                            </div>
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] ml-2 rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center`}>
                                <IoLogoFirebase className={`text-[1.8rem] ${dark ? 'text-orange-400' : 'text-orange-600'} `} />
                            </div>
                            <div className={`cursor-pointer transition-all duration-1000 ml-2 w-[45px] h-[45px] rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center`}>
                                <SiRecoil className=' text-[1.8rem] text-blue-600' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                    <Cube />
                </div>
            </div>
            <WorkWithMe />
            <div className={`transition-all duration-700 ${click ? 'top-[52%] rotate-180' : ' top-[35%]'} absolute font-GIT  justify-center cursor-pointer`} onClick={handelScrollToSkill}
            >
                <div className={`transition-all duration-700 text-[1.2rem] w-full ${click && 'rotate-180'}`}>{click ? 'Scroll Up' : 'Scroll Down'} </div>
                <div className='flex justify-center text-[1.6rem] up'><IoIosArrowDown className={`${dark ? 'text-red-700' : 'text-blue-700'}`} /></div>
                <div className='flex justify-center text-[1.6rem] mid'><IoIosArrowDown className={`${dark ? 'text-red-700' : 'text-blue-700'}`} /></div>
                <div className='flex justify-center text-[1.6rem] end'><IoIosArrowDown className={`${dark ? 'text-red-700' : 'text-blue-700'}`} /></div>
            </div>

            <div ref={skill} className='w-full h-[100vh]'>

            </div>
        </div>
    )
}

export default Home
