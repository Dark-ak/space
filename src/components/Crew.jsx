import React, { useState } from 'react'
import data from "../utilities/data.json"

const Crew = () => {

  const crewData = data.crew
  const [crew, setCrew] = useState(crewData[0])
  const [active, setActive] = useState(0)

  const change = (event) => {
    setCrew(crewData[event.target.id])
    setActive(event.target.id)
  }

  return (
    <div className='mt-6'>
      <div className='flex items-center justify-center text-white uppercase gap-2 tracking-[2.70px] text-base font-barlow md:flex md:justify-start md:text-xl md:ml-6 md:mt-10 lg:text-[28px] lg:ml-44  lg:gap-5'>
        <p className='opacity-25 md:font-bold md:tracking-[3.38px]'>02</p>
        <p className='md:tracking-[3.38px]'>Meet your crew</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-5 mx-5 md:flex-col-reverse lg:flex-row-reverse lg:justify-end lg:ml-44 lg:gap-12'>

        <div className='flex flex-col md:flex-col-reverse  md:gap-10 lg:gap-28'>
          <div className='flex flex-col'>
            <img src={crew.images.webp} alt="" className='w-[177.12px] h-[230px] md:w-[456.37px] md:h-[572px]' />
            <div className='h-[3px] bg-gray md:hidden'></div>
          </div>
          <div className='flex items-center justify-center gap-4 mt-7 lg:hidden lg:'>
            <div id="0" className={`w-2.5 h-2.5 bg-white opacity-100  rounded-full ${active != 0 && "opacity-20"}`} onClick={change}></div>
            <div id="1" className={`w-2.5 h-2.5 bg-white opacity-100 rounded-full ${active != 1 && "opacity-20"}`} onClick={change}></div>
            <div id="2" className={`w-2.5 h-2.5 bg-white opacity-100 rounded-full ${active != 2 && "opacity-20"}`} onClick={change}></div>
            <div id="3" className={`w-2.5 h-2.5 bg-white opacity-100 rounded-full ${active != 3 && "opacity-20"}`} onClick={change}></div>
          </div>
        </div>


        <div className='flex flex-col gap-4 mt-5 mx-5 md:w-[458px] lg:w-[50%]'>
          <div className='flex flex-col gap-4'>
            <p className='text-white opacity-50 text-center text-base font-normal font-bellefair md:text-2xl lg:text-left lg:text-3xl'>{crew.role}</p>
            <p className='text-center text-white text-2xl font-normal uppercase font-bellefair md:text-[40px] lg:text-left lg:text-6xl'>{crew.name}</p>
          </div>
          <p className='text-center text-light text-[15px] font-barlow font-normal leading-[25px] md:text-base md:leading-7 lg:text-left lg:text-lg lg:w-[80%]'>{crew.bio}</p>
          <div className='hidden items-center justify-center gap-4 mt-7 lg:flex lg:justify-start lg:mt-20'>
            <div id="0" className={`w-2.5 h-2.5 bg-white opacity-100 rounded-full lg:w-3.5 lg:h-3.5 ${active != 0 && "opacity-20"}`} onClick={change}></div>
            <div id="1" className={`w-2.5 h-2.5 bg-white opacity-100 rounded-full lg:w-3.5 lg:h-3.5  ${active != 1 && "opacity-20"}`} onClick={change}></div>
            <div id="2" className={`w-2.5 h-2.5 bg-white opacity-100 rounded-full lg:w-3.5 lg:h-3.5  ${active != 2 && "opacity-20"}`} onClick={change}></div>
            <div id="3" className={`w-2.5 h-2.5 bg-white opacity-100 rounded-full lg:w-3.5 lg:h-3.5  ${active != 3 && "opacity-20"}`} onClick={change}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew