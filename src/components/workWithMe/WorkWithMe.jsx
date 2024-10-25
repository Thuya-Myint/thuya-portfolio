import React from 'react'
import { darkState } from '../state/atom'
import { useRecoilState } from 'recoil'

const WorkWithMe = () => {
    const [dark, setDark] = useRecoilState(darkState);
    return (
        <div className={`transition-all font-GIT border-opacity-50 duration-200 fixed bottom-[5%] w-[200px] h-[40px] flex justify-between items-center p-4 rounded-md border-[1px] ${dark ? 'border-white text-white' : 'border-black text-black'}`}
            style={dark ? { boxShadow: `0px 0px 260px white` } : { boxShadow: `0px 0px 200px black` }}>
            <div className='w-[20%] relative flex items-center'>
                <div className={`w-[10px] h-[10px] rounded-full ${dark ? 'bg-green-400' : 'bg-green-500'}  bg-opacity-55 absolute`}></div>
                <div className={`w-[15px] dot1 h-[15px] rounded-full ${dark ? 'bg-green-400' : 'bg-green-500'} bg-opacity-55 absolute left-[-2.5px]`}></div>
                <div className={`w-[20px] dot2 h-[20px] rounded-full ${dark ? 'bg-green-400' : 'bg-green-500'} bg-opacity-55 absolute left-[-5px]`}></div>
            </div>
            <div className='w-[80%] opacity-50 text-end cursor-pointer'>Work With Me!</div>
        </div>
    )
}

export default WorkWithMe
