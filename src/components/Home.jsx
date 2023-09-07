
const Home = () => {
  return (
    <div className='pt-10 px-8 md:pt-32 lg:flex lg:justify-center'>
      <div className='flex flex-col justify-start items-center gap-10 md:gap-20 lg:flex-row lg:gap-56 lg:items-end'>
        <div className='flex flex-col justify-center items-center gap-6 text-light'>
          <p className='font-barlow text-[14px]  tracking-[.20rem] font-extralight md:text-xl md:font-normal lg:tracking-[4.72px] lg:text-[28px]'>SO, YOU WANT TO TRAVEL TO</p>
          <p className='text-7xl text-white font-bellefair md:text-[150px]'>SPACE</p>
          <div>
            <p className='text-[14px] text-center md:text-base md:w-[444px] lg:text-lg lg:leading-loose lg:text-left'> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>

          </div>
        </div>

        <div className='rounded-full px-12 py-12 ease-linear  duration-300 cursor-pointer hover:bg-white hover:bg-opacity-30'>
          <p className='text-blue text-xl bg-white rounded-full py-16 px-10  font-bellefair md:text-[32px] md:py-24 md:px-12'>EXPLORE</p>
        </div>
      </div>
    </div>
  )
}

export default Home