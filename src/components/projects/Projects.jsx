import React from 'react'
import NavBar from '../navbar/NavBar'
import { darkState } from '../state/atom'
import { useRecoilValue } from 'recoil'
import { IoWarningOutline } from "react-icons/io5";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";
import { SlGlobe } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { GrInProgress } from "react-icons/gr";
const Projects = () => {
    const dark = useRecoilValue(darkState)
    return (
        <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'}  transition-all relative duration-700 w-screen  flex flex-col items-center `}>
            <NavBar />
            <div className='w-full h-auto flex  overflow-auto items-center my-[10vh]'>
                <div className={`w-1/2  flex flex-col gap-2 font-GIT items-center justify-center relative  border-r-2 ${dark ? 'border-red-700' : 'border-blue-700'}`}>
                    <div className={`transition-all w-[70%] duration-500 cursor-pointer bg-opacity-15 hover:bg-opacity-25 p-4 rounded-sm ${dark ? 'bg-white' : 'bg-black'}`}>
                        <div className='text-end'>Click to See Details</div>
                        <div className='text-[1.2rem]'>RealTime To Do</div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[2rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Functions</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className='text-gray-400'>User Login with <span className={`${dark ? 'text-white' : 'text-black'}`}> Encryption and Authentication</span></div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Add, Delete, Update To do Task</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Change Status Todo, InProgress, Compeleted</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Assign User to Task</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Update User Information</div>
                        </div>
                        <div className={`flex items-center justify-between p-1 mt-2 ${dark ? 'bg-white text-red-500' : 'bg-black text-blue-500'}`}><IoWarningOutline className={`mr-2 `} />
                            <div className=''>Can't Provide Hosting Due to Hosting Limit on Free Plan!</div>
                        </div>
                    </div>
                    <div className={`transition-all w-[70%] duration-500 cursor-pointer bg-opacity-15 hover:bg-opacity-25 p-4 rounded-sm ${dark ? 'bg-white' : 'bg-black'}`}>
                        <div className='text-end'>Click to See Details</div>
                        <div className='text-[1.2rem]'>Cloud Path (Weather Location Map)</div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[2rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Functions</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Search Location on Map</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>See Weather details Related to Location!</div>
                        </div>

                        <div className={`flex items-center justify-between p-1 mt-2 ${dark ? 'bg-white text-red-500' : 'bg-black text-blue-500'}`}><SlGlobe className={`mr-2 `} />
                            <Link to={"https://weather-map-recoil.onrender.com"}>You Can Try Here!</Link>
                        </div>
                    </div>
                    <div className={`transition-all w-[70%] duration-500 cursor-pointer bg-opacity-15 hover:bg-opacity-25 p-4 rounded-sm ${dark ? 'bg-white' : 'bg-black'}`}>
                        <div className='text-end'>Click to See Details</div>
                        <div className='text-[1.2rem]'>MultiShop E-commerce</div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[2rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Functions</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className='text-gray-400'>User Login with <span className={`${dark ? 'text-white' : 'text-black'}`}> Encryption and Authentication</span></div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Purchase Products Related to Shop</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Super Admin Create Multiple Shop Admin for retail Shop!</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>See Order Details</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Change Order Status or add Customize Order Status</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Add, Update, Delete Products For own Shop</div>
                        </div>

                        <div className={`flex items-center justify-between p-1 mt-2 ${dark ? 'bg-white text-red-500' : 'bg-black text-blue-500'}`}>Customer (Purchaser)
                            <Link to={"https://multishop-ecommerce-1.onrender.com"}>You Can Try Here!</Link>
                        </div>
                        <div className={`flex items-center justify-between p-1 mt-2 ${dark ? 'bg-white text-red-500' : 'bg-black text-blue-500'}`}>Admin (Seller)
                            <Link to={"https://multishop-ecommerce-2.onrender.com"}>You Can Try Here!</Link>
                        </div>
                        <div className={`flex items-center justify-between p-1 mt-2 ${dark ? 'bg-white text-red-500' : 'bg-black text-blue-500'}`}><IoWarningOutline className={`mr-2 `} />
                            <div className=''>Free Hosting Could be delay 1-2 min in Free Plan!</div>
                        </div>
                    </div>



                    <div className={`transition-all w-[70%] duration-500 cursor-pointer bg-opacity-15 hover:bg-opacity-25 p-4 rounded-sm ${dark ? 'bg-white' : 'bg-black'}`}>
                        <div className='text-end'>Click to See Details</div>
                        <div className='text-[1.2rem]'>Learning Management System (MutiCampaign)</div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[2rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Functions</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className='text-gray-400'>User Login with <span className={`${dark ? 'text-white' : 'text-black'}`}> Encryption and Authentication</span></div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>See Courses About Trending Nowaday</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Browse Course</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Choose which course to attend</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Track Your Performance, Result</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Principle Create Campaign</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Campaign Admin Add, Update, Delete Campaign Information</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Campaign Admins Control Related Course Enrollment</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>See Related Students' Result and Performance </div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Campaign Admin Add, Update, Delete Courses</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Receive Email whenever students enroll Course</div>
                        </div>
                        <div className='flex items-center'><VscDebugBreakpointFunctionUnverified className={`mr-2 text-[1rem] ${dark ? 'text-red-700' : 'text-blue-700'}`} />
                            <div className=''>Principle Suspense Campaign Admin!</div>
                        </div>
                        <div className={`flex items-center justify-between p-1 mt-2 ${dark ? 'bg-white text-red-500' : 'bg-black text-blue-500'}`}><GrInProgress className={`mr-2 `} />
                            <div className=''>Developing!</div>
                        </div>
                    </div>












                    <div className='w-[20%] absolute top-[1%] left-[99.5%] flex items-center'>
                        <div className={`w-[10px] h-[10px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'}  bg-opacity-90 absolute`}></div>
                        <div className={`w-[15px] dot1 h-[15px] rounded-full  ${dark ? 'bg-red-700' : 'bg-blue-700'}  bg-opacity-55 absolute left-[-2.5px]`}></div>
                        <div className={`w-[20px] dot2 h-[20px] rounded-full  ${dark ? 'bg-red-700' : 'bg-blue-700'}   bg-opacity-55 absolute left-[-5px]`}></div>
                    </div>
                </div>



            </div>
        </div >
    )
}

export default Projects
