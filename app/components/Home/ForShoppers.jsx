import React from 'react'
import Image from 'next/image'

export default function ForShoppers() {
  return (
    <div className='flex flex-col lg:flex-row  items-center justify-center gap-[64px] shoptravel-content'>
        <div>
            <Image src={'/shopper.svg'} width={560} height={446} alt='' placeholder="blur" blurDataURL="data:..." loading="lazy"></Image>
        </div>

        <div className='w-full md:w-[560px] flex flex-col gap-[44px]'>
            <h2 className='font-[700] text-[24px] md:text-[32px] leading-[32px] md:leading-[44px] text-[#1E2F28]'>Shop anywhere with Pairdel</h2>
            
            <div className='flex flex-col gap-[36px]'>
                <span className='flex gap-[24px] items-start /justify-between'>
                    <Image src={'/no1.svg'} width={28} height={28} alt='' className='w-[24px] h-[24px] md:w-[28px] md:h-[24px]'></Image>

                    <span className='flex flex-col gap-[12px]'>
                        <h3 className='font-[600] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1E2F28]'>Tell us about the item you are looking for</h3>
                        <p className='font-[500] text-[16px] leading-[24px] md:leading-[26px] text-[#949494]'>
                            Describe what you want in detail, including brand, model, size, etc
                        </p>
                    </span>
                </span>

                <span className='flex gap-[24px] items-start /justify-between'>
                    <Image src={'/no2.svg'} width={28} height={28} alt='' className='w-[24px] h-[24px] md:w-[28px] md:h-[24px]'></Image>

                    <span className='flex flex-col gap-[12px]'>
                        <h3 className='font-[600] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1E2F28]'>Create an order for a product you want</h3>
                        <p className='font-[500] text-[16px] leading-[24px] md:leading-[26px] text-[#949494]'>
                            Specify where you&apos;d like the traveler to find it (store, market, etc.) and set a budget. It can either a store purchase or pick up order
                        </p>
                    </span>
                </span>

                <span className='flex gap-[24px] items-start /justify-between'>
                    <Image src={'/no3.svg'} width={28} height={28} alt='' className='w-[24px] h-[24px] md:w-[28px] md:h-[24px]'></Image>

                    <span className='flex flex-col gap-[12px]'>
                        <h3 className='font-[600] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1E2F28]'>Agree on a monetary reward for your traveler</h3>
                        <p className='font-[500] text-[16px] leading-[24px] md:leading-[26px] text-[#949494]'>
                            Negotiate a fair price for the delivery service
                        </p>
                    </span>
                </span>


                <span className='flex gap-[24px] items-start /justify-between'>
                    <Image src={'/no4.svg'} width={28} height={28} alt='' className='w-[24px] h-[24px] md:w-[28px] md:h-[24px]'></Image>

                    <span className='flex flex-col gap-[12px]'>
                        <h3 className='font-[600] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1E2F28]'>Meet with your traveler and receive your item</h3>
                        <p className='font-[500] text-[16px] leading-[24px] md:leading-[26px] text-[#949494]'>
                            Arrange a convenient meeting spot to get your items
                        </p>
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}
