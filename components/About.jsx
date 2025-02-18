import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        About Me
      </h2>

      <div className='flex flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>

        {/* This is where we need to fix the layout */}
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet repudiandae rem minima illo, aliquid doloremque 
            dignissimos a error quas sapiente ea eos cum, impedit facilis soluta cupiditate veniam consequatur rerum.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
              hover:-translate-y-1 duration:500 hover:shadow-black'>
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700 font-Ovo'>
            Tools and Technologies
          </h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index) => (
            <li key={index}
              className='flex items-center justify-center w-12 sm:w-14 aspect-square border-2 border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:border-lightHover'>
              <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
            </li>
  ))}
</ul>

        </div>
      </div>
    </div>
  )
}

export default About
