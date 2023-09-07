import React, { useState } from 'react'
import data from "../utilities/data.json"

const Dest = () => {

  const destinations = data.destinations

  const [active, setActive] = useState(destinations[0])

  const change = (event) => {
    const filtered = destinations.find((item) => item.name == event.target.id)
    setActive(filtered)
  }
  return (
    <div className='mt-8 pb-5 lg:pb-20'>
      <div className='hidden text-white uppercase gap-2 tracking-[2.70px] text-base font-barlow md:flex md:text-xl md:ml-6 md:mt-10 lg:text-[28px] lg:ml-44  lg:gap-5'>
        <p className='opacity-25 md:font-bold md:tracking-[3.38px]'>01</p>
        <p className='md:tracking-[3.38px]'>Pick Your Destination</p>
      </div>
      <div className='flex flex-col justify-center items-center mt-5 mx-5 gap-5 md:gap-10 lg:flex-row lg:mt-24 lg:gap-36'>

        <div className='flex font-barlow flex-col justify-center items-center gap-6 '>
          <p className=' text-white font-normal tracking-[2.70px] md:hidden'><span className='font-bold opacity-25 tracking-[4.72px] text-base '>01</span> PICK YOUR DESTINATION</p>
          <img src={active.images.webp} alt="mars" className='w-44 h-44 md:h-[300px] md:w-[300px] lg:w-[445px] lg:h-[445px]' />
        </div>

        <div className='flex flex-col items-center gap-5 lg:items-start'>
          <div className='flex text-sm items-center justify-center  tracking-widest gap-5 text-white font-barlow uppercase md:text-base lg:justify-start lg:mb-5'>
            <p className={`border-b-4 p-1 border-b-white font-normal border-opacity-0 hover:border-opacity-50 tracking-[2.70px] ${active.name == "Moon" && "border-opacity-100"}`} id='Moon' onClick={change}>Moon</p>
            <p className={`border-b-4 p-1 border-b-white border-opacity-0 font-normal hover:border-opacity-50 tracking-[2.70px] ${active.name == "Mars" && "border-opacity-100"}`} id="Mars" onClick={change}>Mars</p>
            <p className={`border-b-4 p-1 border-b-white border-opacity-0 font-normal hover:border-opacity-50 tracking-[2.70px] ${active.name == "Europa" && "border-opacity-100"}`} id="Europa" onClick={change}>Europa</p>
            <p className={`border-b-4 p-1 border-b-white border-opacity-0 font-normal hover:border-opacity-50 tracking-[2.70px] ${active.name == "Titan" && "border-opacity-100"}`} id="Titan" onClick={change}>Titan</p>
          </div>

          <div className='text-center md:w-[573px] lg:text-left lg:w-96'>
            <p className=' text-6xl text-white font-normal font-bellefair uppercase m-2 lg:text-8xl'>{active.name}</p>
            <p className='leading-normal font-normal text-[15px] text-light font-barlow md:text-[base] lg:text-left lg:text-lg lg:leading-loose lg:font-normal'>{active.description}</p>
          </div>

          <hr className='w-full h-5 text-gray my-1 md:w-[573px] lg:w-96' />

          <div className='flex flex-col md:flex-row gap-5 md:gap-24 uppercase text-center font-normal pb-5'>
            <div>
              <p className='text-light text-sm tracking-widest font-barlow'>Avg. Distance</p>
              <p className='text-white text-[28px] font-bellefair'>{active.distance}</p>
            </div>

            <div className='text-center'>
              <p className='text-light text-sm tracking-widest font-barlow'>Est. travel time </p>
              <p className='text-white text-[28px] font-bellefair'>{active.travel}</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dest