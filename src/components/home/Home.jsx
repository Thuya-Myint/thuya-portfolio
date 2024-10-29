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
import AbRadar from '../radar/AbRadar'
import Progress from '../progress/Progress'
import { GrTechnology } from "react-icons/gr";
import { TbLanguageHiragana } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiCplusplusbuilder } from "react-icons/si";

const Home = () => {
    const active = 1;
    const dark = useRecoilValue(darkState)
    const skill = useRef();
    const intro = useRef();
    const [click, setClick] = useState(false);
    const ability = {
        'Java SE': 80,
        'HTML': 90,
        'CSS': 80,
        'JavaScript': 70,
        'C++': 40,
        'C': 30,
        'PHP': 75,
        'SQL': 70,
        'React': 75,
        'React Native': 45,
        'Node': 70,
        'Recoil': 50,
    };


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
        <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'}  transition-all relative duration-700 w-screen  flex flex-col items-center `}>
            <NavBar active={active} />
            <div ref={intro} className='w-full h-[92vh] flex '>
                <div className='w-2/3 font-GIT flex flex-col mt-[10%] p-4'>
                    <div className='text-[2.5rem] opacity-65'>Hello! My name is Thuyamyint.</div>
                    <div className='text-[1.5rem] flex items-center flex-wrap'>I'm a Beginner Full-Stack WEB <FaCode className='mx-2' /> Developer! , Mobile <TbDevicesCode className='mx-2' /> Creator! & StandAlone <FaComputer className='mx-2' /> Developer!
                    </div>
                    <div className='text-[1.4rem]'>
                        My main Languages include following
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
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} ml-2 flex items-center justify-center`}>
                                <FaJava className=' text-[1.8rem] text-blue-600' />
                            </div>
                        </div>
                    </div>
                    <div className='text-[1.4rem] mt-6'>
                        Other Individuals Have the Ability to Understand Languages!
                        <div className='w-full mt-2 flex items-center '>
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center `}>
                                <div className=' text-[1.8rem] font-semibold text-blue-600'>C</div>
                            </div>
                            <div className={`cursor-pointer transition-all duration-1000 ml-2 w-[45px] h-[45px] rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center`}>
                                <SiCplusplusbuilder className=' text-[1.8rem] text-blue-600' />
                            </div>
                            <div className={`cursor-pointer transition-all duration-1000 w-[45px] h-[45px] rounded-full ${dark ? 'bg-blue-950' : 'bg-gray-100 '} flex items-center justify-center ml-2`}>
                                <FaPython className={`text-[1.8rem] ${dark ? 'text-yellow-400' : 'text-yellow-500'} `} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-1/3'>
                    <Cube />
                </div>
            </div>
            <div className='w-full flex justify-end z-50'>
                <WorkWithMe />
            </div>
            <div className={`transition-all duration-700 ${click ? 'top-[52%] rotate-180' : ' top-[42%] rotate-0'} absolute font-GIT  justify-center cursor-pointer`}
            >
                <div className={`transition-all duration-200 text-[1.2rem] w-full ${click && 'rotate-180'}`}>My Ability</div>
                <div className=' transition-all duration-500 flex justify-center text-[1.6rem] up'><IoIosArrowDown className={`${dark ? 'text-red-700' : 'text-blue-700'}`} /></div>
                <div className='transition-all duration-500 flex justify-center text-[1.6rem] mid'><IoIosArrowDown className={`${dark ? 'text-red-700' : 'text-blue-700'}`} /></div>
                <div className='transition-all duration-500 flex justify-center text-[1.6rem] end'><IoIosArrowDown className={`${dark ? 'text-red-700' : 'text-blue-700'}`} /></div>
            </div>

            <div ref={skill} className='w-full [100vh] flex gap-2 justify-center z-10'>
                <div className={`w-[40%] h-[75%] text-center font-GIT `}>
                    <div className={`transition-all flex items-center justify-between p-2 text-[1.2rem] mb-2 duration-300 rounded-sm  ${dark ? ' bg-white text-black' : 'bg-black text-white'}`}>
                        Programming Languages
                        <GrTechnology className={`text-[1.3rem] ${dark ? 'text-red-700' : 'text-blue-500'}`} />
                    </div>
                    <AbRadar ability={ability} />
                </div>
                <div className={`w-[40%] h-[75%] text-center font-GIT `}>
                    <div className={`transition-all flex items-center justify-between p-2 text-[1.2rem] mb-2 duration-300 rounded-sm  ${dark ? ' bg-white text-black' : 'bg-black text-white'}`}>
                        Linguistics
                        <TbLanguageHiragana className={`text-[1.3rem] ${dark ? 'text-red-700' : 'text-blue-500'}`} />
                    </div>
                    <Progress />
                </div>

            </div>
        </div>
    )
}

export default Home
