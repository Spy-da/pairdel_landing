import Image from 'next/image'
import React from 'react'

export default function Promotion() {
  return (
    <div className='promotion py-[112px] px-[24px] xl:px-[128px] bg-[#FFFFFF] ' id='promotion'>
        <div className='px-[24px] md:px-[96px] flex flex-col lg:flex-row lg:justify-between gap-[64px] lg:gap-[0px] bg-[#25A774] rounded-[32px] text-[#FFFFFF]  bg-[url(/bg-liness.svg)] bg-center bg-no-repeat'>
            <div className='flex flex-col gap-[32px] md:gap-[44px] pt-[64px] md:pt-[104px] lg:pb-[96px] w-full lg:w-[560px]'>
                <span className='flex flex-col gap-[16px] md:gap-[20px] text-start'>
                    <h1 className='font-[700] text-[36px] md:text-[50px] 2xl:text-[56px] leading-[44px] lg:leading-[68px] '>Shop anywhere, 
                        Earn while you travel
                    </h1>

                    <p className='font-[500] text-[18px] md:text-[24px] leading-[26px] md:leading-[36px]'>
                        Available to you on iOS and Android devices.
                    </p>
                </span>



                <a href="http://" className='py-[12px] md:py-[14px] px-[22px] md:px-[26px]  rounded-[400px] text-[#1E2F28] bg-[#FFFFFF] w-fit font-[700] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]'>
                    Get the app
                </a>
            </div>


            <div className='flex items-end'>
                <Image src={'/mockup.svg'} height={681} width={335} alt='' className=''></Image>
            </div>
        </div>
    </div>
  )
}
