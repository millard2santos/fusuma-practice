import React from 'react'

import { LogIn } from '../components/LogIn';
import banner from '../assets/bannerImage.png'

export const MainPage = () => {
    return (

            <div className="relative flex flex-col items-center ">
                <img src={banner} alt="" className='w-full h-[192px]' />
                <div className='absolute w-[132px] h-[132px] rounded-full border-4 border-[#0D9488] bg-white top-32 '>
                </div>
                <section className='w-screen h-[80%] flex flex-col items-center justify-center mt-20'>
                    <LogIn />
                </section>
               
            </div>
        
    )
}
