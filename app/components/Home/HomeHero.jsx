import Image from 'next/image'
import React from 'react'

export default function HomeHero() {
  return (
    <div className='  flex flex-col lg:flex-row items-center /justify-center /justify-between /pb-[70px]  lg:pr-[11px] pt-[167.33px] lg:pt-[80px] xl:pt-[0px] px-[24px] xl:px-[0px] xl:pl-[128px] text-[#FFFFFF] bg-[url(/bg-liness1.svg)]  xl:bg-[url(/bg-liness.svg)] /bg-center /bg-no-repeat md:bg-repeat xl:bg-no-repeat'>
        <div className='lg:w-[50%] 2xl:w-[545px] flex flex-col gap-[44px] '>
            <div className='flex flex-col gap-[20px] justify-normal w-full'>
                <h2 className='font-[700] text-[36px]  md:text-[56px] leading-[44px] md:leading-[68px]'>
                    Lorem ipsum dolor, Lorem ipsum
                </h2>

                <p className='font-[500] text-[18px] md:text-[22px] leading-[24px] md:leading-[33px]'>
                    Pairdel connects shoppers and travellers around the world.
                    Ditch expensive courier services and shipping delays.
                </p>
            </div>

            <span className='flex gap-[22px]'>
                <a href="http://" className=''>
                    <Image src={'/GoogleButton.svg'} alt='' width={192} height={64} className='w-[132px] md:w-full'></Image>
                </a>

                <a href="http://" >
                    <Image src={'/AppStoreButton.svg'} alt='' width={192} height={64} className='w-[132px] md:w-full'></Image>
                </a>
            </span>
        </div>

        <div className='2xl:w-[780px] lg:w-[50%] w-[100%]'>
            <Image src={'/herogif.gif'} width={780} height={590} alt='' className='md:mb-[70px]  '></Image>
        </div>
    </div>
  )
}
