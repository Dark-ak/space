import React, { useState } from 'react'
import data from "../utilities/data.json"

const Tech = () => {

  const techData = data.technology

  const [tech, setTech] = useState(techData[0])
  const [active, setActive] = useState(0)

  const change = (event) => {
    setTech(techData[event.target.id])
    setActive(event.target.id)
  }

  return (
    <div className='mt-8 md:pb-10 lg:pb-20'>
      <div className='flex items-center justify-center text-white uppercase gap-2 mt-5 mb-8  text-base font-barlow md:flex md:justify-start md:text-xl md:ml-6 md:mt-10 lg:text-[28px] lg:ml-44 lg:gap-5'>
        <p className='opacity-25 md:font-bold tracking-[2.70px] md:tracking-[3.38px]'>03</p>
        <p className='tracking-[2.70px] md:tracking-[3.38px]'>Space Launch 101</p>
      </div>
      <div className='flex flex-col items- justify-center mt-5 gap-6 md:mt-14 md:gap-12 lg:flex-row-reverse lg:gap-10'>
        <div>
          <img src={tech.images.landscape} alt="tech" className='w-screen md:w-[768px] lg:hidden' />
          <img src={tech.images.portrait} alt="tech" className='hidden lg:inline w-[515px] h-[527px] relative left-32' />
        </div>

        <div className='flex flex-col gap-5 items-center lg:flex-row lg:gap-20 lg:ml-10'>
          <div className='flex font-bellefair gap-4 text-white text-base lg:flex-col'>
            <p id="0" className={`flex items-center justify-center rounded-full border-[1px] border-white border-opacity-25 text-center w-10 h-10 hover:border-opacity-100 md:w-[60px] md:h-[60px] md:text-2xl lg:w-20 lg:h-20 lg:text-[32px] ${active == 0 && "bg-white text-blue"}`} onClick={change}>1</p>
            <p id="1" className={`flex items-center justify-center rounded-full border-[1px] border-white border-opacity-25 text-center w-10 h-10 hover:border-opacity-100 md:w-[60px] md:h-[60px] md:text-2xl lg:w-20 lg:h-20 lg:text-[32px] ${active == 1 && "bg-white text-blue"}`} onClick={change}>2</p>
            <p id="2" className={`flex items-center justify-center rounded-full border-[1px] border-white border-opacity-25 text-center w-10 h-10 hover:border-opacity-100 md:w-[60px] md:h-[60px] md:text-2xl lg:w-20 lg:h-20 lg:text-[32px] ${active == 2 && "bg-white text-blue"}`} onClick={change}>3</p>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='uppercase text-center font-normal lg:text-left'>
              <p className='text-light text-sm font-barlow tracking-widest mb-1 md:tracking-[2.70px] md:font-normal md:mb-8 md:text-base'>The Terminology...</p>
              <p className='text-white text-2xl font-bellefair md:text-[40px] lg:text-[56px]'>{tech.name}</p>
            </div>
            <div className='w-[327px] text-light text-center font-barlow md:w-[458px] lg:text-left'>
              <p className='text-[15px] px-5 font-normal leading-normal md:leading-7 md:text-base lg:px-0 lg:text-lg lg:leading-loose'>{tech.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech