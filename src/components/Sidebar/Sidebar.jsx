/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { MyContext } from '../../utilities/context'


const Sidebar = ({ close }) => {

  const { setTab } = useContext(MyContext)

  const change = (event) => {
    event.stopPropagation()
    setTab(event.target.id)
    close(false)
  }

  return (
    <div className={`top-0 right-0 z-10 bg-opacity-25 bg-glass backdrop-blur-2xl w-[38vh] text-white fixed h-full ease-in-out duration-200 `} >
      <div className='p-4'>
        <div onClick={() => close(false)}>
          <img src="/assets/shared/icon-close.svg" alt="" className='pl-48' />
        </div>

        <div className='flex flex-col gap-6 font-barlow tracking-[.2rem] text-base ml-5 mt-14'>
          <div className='flex gap-2' id='home' onClick={change}>
            <p className='font-bold' id="home">00</p>
            <p className='font-normal' id="home">HOME</p>
          </div>

          <div className='flex gap-2 cursor-pointer' id="dest" onClick={change}>
            <p className='font-bold' id="dest">01</p>
            <p className='font-thin' id='dest'>DESTINATION</p>
          </div>

          <div className='flex gap-2 cursor-pointer' id="crew" onClick={change}>
            <p className='font-bold' id='crew'>02</p>
            <p className='font-thin' id='crew'>CREW</p>
          </div>

          <div className='flex gap-2 cursor-pointer' id="tech" onClick={change}>
            <p className='font-bold' id='tech'>03</p>
            <p className='font-thin' id='tech'>TECHNOLOGY</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar