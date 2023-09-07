import React, { useContext } from 'react'
import { MyContext } from '../../utilities/context'

const Tablet = () => {
    const { tab, setTab } = useContext(MyContext)

    const change = (event) => {
        setTab(event.target.id)
    }

    return (
        <div className='bg-white backdrop-blur-[81.55px] bg-opacity-5 pt-10 px-10 hidden md:flex justify-center items-center lg:w-[50%]'>
            <div className='flex gap-6 text-white text-sm font-barlow uppercase pr-10 lg:pr-0 '>
                <div className={`flex gap-2.5 lg:text-base cursor-pointer ${tab == "home" && "border-b-2"}`}>
                    <p id='home' className='hidden lg:inline font-bold' onClick={change}>00</p>
                    <p id='home' className="pb-9 font-normal tracking-widest" onClick={change}>Home</p>
                </div>
                <div className={`flex gap-2.5 lg:text-base cursor-pointer ${tab == "dest" && "border-b-2"}`}>
                    <p id='dest' className='hidden lg:inline font-bold' onClick={change}>01</p>
                    <p id='dest' className="pb-9 font-normal tracking-widest" onClick={change}>Destination</p>
                </div>
                <div className={`flex gap-2.5 lg:text-base cursor-pointer ${tab == "crew" && "border-b-2"}`}>
                    <p id='crew' className='hidden lg:inline font-bold' onClick={change}>02</p>
                    <p id='crew' className="pb-9 font-normal tracking-widest" onClick={change}>Crew</p>
                </div>
                <div className={`flex gap-2.5 lg:text-base cursor-pointer ${tab == "tech" && "border-b-2"}`}>
                    <p id='tech' className='hidden lg:inline font-bold' onClick={change}>03</p>
                    <p id='tech' className="pb-9 font-normal tracking-widest" onClick={change}>Technology</p>

                </div>
            </div>
        </div>
    )
}

export default Tablet