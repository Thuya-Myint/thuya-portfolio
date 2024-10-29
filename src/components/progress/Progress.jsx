import React from 'react'
import { Language } from '../constants'
import { darkState } from '../state/atom'
import { useRecoilValue } from 'recoil'

const Progress = () => {
    const dark = useRecoilValue(darkState);
    return (
        <div className='w-full h-full '>
            {
                Language.map((lang, index) => (
                    <div key={index}>
                        <div className='text-start text-[1.5rem]'>{lang.id}</div>
                        <div className='flex justify-between my-2 items-center'>
                            <div className='w-[15%] '>Reading</div>
                            <div className={`w-[70%] h-[2px] bg-slate-400 ${dark ? 'bg-opacity-25' : 'bg-opacity-55'} relative`}>
                                <div className={`absolute h-full ${dark ? 'bg-red-700' : 'bg-blue-700'}`}
                                    style={{ width: `${lang.reading / 100 * 100}%` }}
                                ></div>
                                <div className='w-[20%] relative flex items-center '
                                    style={{ left: `${lang.reading}%` }}
                                >
                                    <div className={`w-[10px] h-[10px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'}  bg-opacity-90 absolute`}></div>
                                    <div className={`w-[15px] dot1 h-[15px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'} bg-opacity-55 absolute left-[-2.5px]`}></div>
                                    <div className={`w-[20px] dot2 h-[20px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'} bg-opacity-55 absolute left-[-5px]`}></div>
                                </div>
                            </div>
                            <div>{lang.reading}%</div>
                        </div>
                        <div className='flex justify-between my-2 items-center'>
                            <div className='w-[15%] '>Writing</div>
                            <div className={`w-[70%] h-[2px] bg-slate-400 ${dark ? 'bg-opacity-25' : 'bg-opacity-55'} relative`}>
                                <div className={`absolute h-full ${dark ? 'bg-red-700' : 'bg-blue-700'}`}
                                    style={{ width: `${lang.writing / 100 * 100}%` }}
                                ></div>
                                <div className='w-[20%] relative flex items-center '
                                    style={{ left: `${lang.writing}%` }}
                                >
                                    <div className={`w-[10px] h-[10px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'}  bg-opacity-90 absolute`}></div>
                                    <div className={`w-[15px] dot1 h-[15px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'} bg-opacity-55 absolute left-[-2.5px]`}></div>
                                    <div className={`w-[20px] dot2 h-[20px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'} bg-opacity-55 absolute left-[-5px]`}></div>
                                </div>
                            </div>
                            <div>{lang.writing}%</div>
                        </div>
                        <div className='flex justify-between my-2 items-center'>
                            <div className='w-[15%] '>Listening</div>
                            <div className={`w-[70%] h-[2px] bg-slate-400 ${dark ? 'bg-opacity-25' : 'bg-opacity-55'} relative`}>
                                <div className={`absolute h-full ${dark ? 'bg-red-700' : 'bg-blue-700'}`}
                                    style={{ width: `${lang.listening / 100 * 100}%` }}
                                ></div>
                                <div className='w-[20%] relative flex items-center '
                                    style={{ left: `${lang.listening}%` }}
                                >
                                    <div className={`w-[10px] h-[10px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'}  bg-opacity-90 absolute`}></div>
                                    <div className={`w-[15px] dot1 h-[15px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'} bg-opacity-55 absolute left-[-2.5px]`}></div>
                                    <div className={`w-[20px] dot2 h-[20px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'} bg-opacity-55 absolute left-[-5px]`}></div>
                                </div>
                            </div>
                            <div>{lang.listening}%</div>
                        </div>
                        <div className='flex justify-between my-2 items-center'>
                            <div className='w-[15%] '>Speaking</div>
                            <div className={`w-[70%] h-[2px] bg-slate-400 ${dark ? 'bg-opacity-25' : 'bg-opacity-55'} relative`}>
                                <div className={`absolute h-full ${dark ? 'bg-red-700' : 'bg-blue-700'}`}
                                    style={{ width: `${lang.speaking / 100 * 100}%` }}
                                ></div>
                                <div className='w-[20%] relative flex items-center '
                                    style={{ left: `${lang.speaking}%` }}
                                >
                                    <div className={`w-[10px] h-[10px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'}  bg-opacity-90 absolute`}></div>
                                    <div className={`w-[15px] dot1 h-[15px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'} bg-opacity-55 absolute left-[-2.5px]`}></div>
                                    <div className={`w-[20px] dot2 h-[20px] rounded-full ${dark ? 'bg-red-700' : 'bg-blue-700'} bg-opacity-55 absolute left-[-5px]`}></div>
                                </div>
                            </div>
                            <div>{lang.speaking}%</div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Progress
