import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-[#04492E] px-[24px] xl:px-[128px] pt-[64px] md:pt-[112px]'>
        <div className='pb-[64px] border-b-[1px] border-[#027849] flex flex-col md:flex-row justify-between gap-[48px] lg:gap-[176px]'>
            <span className='lg:w-[25%] md:w-[30%] flex flex-col gap-[24px]'>
                <h3 className='font-[600] text-[18px] leading-[28px] text-[#F5FFFB]'>
                    Experience seamless delivery and earn extra cash with the Pairdel mobile app
                </h3>

                <span className='flex gap-[22px]'>
                    <a href="http://" className=''>
                        <Image src={'/GoogleButton.svg'} alt='' width={192} height={64} className='w-[132px] md:w-full'></Image>
                    </a>

                    <a href="http://" >
                        <Image src={'/AppStoreButton.svg'} alt='' width={192} height={64} className='w-[132px] md:w-full'></Image>
                    </a>
                </span>
            </span>

            <div className='flex flex-col md:flex-row gap-[71px] md:gap-[0px] md:w-[70%] lg:w-[55%] justify-between md:items-start'>
                <div className='flex flex-col gap-[16px]'>
                    <h3 className='font-[600] text-[18px] leading-[28px] text-[#F5FFFB]'>Resources</h3>
                    <span className='flex flex-col gap-[20px] font-[500] text-[18px]  text-[#F5FFFBCC]'>
                        <Link href={'/'} className='leading-[28px]'>Blog</Link>
                        <Link href={'/'} className='leading-[28px]'>Help Center</Link>
                    </span>
                </div>

                <div className='flex flex-col gap-[16px]'>
                    <h3 className='font-[600] text-[18px] leading-[28px] text-[#F5FFFB]'>Legal</h3>
                    <span className='flex flex-col gap-[20px] font-[500] text-[18px]  text-[#F5FFFBCC]'>
                        <Link href={'/'} className='leading-[28px]'>Terms of Use</Link>
                        <Link href={'/'} className='leading-[28px]'>Privacy Policy</Link>
                    </span>
                </div>

                <div className='flex flex-col gap-[16px]'>
                    <h3 className='font-[600] text-[18px] leading-[28px] text-[#F5FFFB]'>Get in Touch</h3>

                    <span className='flex flex-col gap-[24px]'>
                        <a href="mailto:help@pairdel.com" className='font-[500] text-[18px] leading-[28px] text-[#F5FFFBCC]'>help@pairdel.com</a>

                        <span className='flex gap-[32px]'>
                            <a href="http://">
                                <Image src={'/facebook.svg'} alt='' height={24} width={24}></Image>
                            </a>
                            <a href="http://"><Image src={'/instagram.svg'} alt='' height={24} width={24}></Image></a>
                            <a href="http://"><Image src={'/linkedin.svg'} alt='' height={24} width={24}></Image></a>
                            <a href="http://"><Image src={'/twitter.svg'} alt='' height={24} width={24}></Image></a>
                        </span>
                    </span>
                </div>
            </div>

        </div>

        <p className='text-[#F5FFFBCC] py-[64px] md:py-[0px] md:pt-[44px] md:pb-[88px] text-center font-[400] text-[18px] leading-[28px]'>
            © 2024 Pairdel · All rights reserved.
        </p>
    </div>
  )
}
