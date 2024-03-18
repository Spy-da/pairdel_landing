import Image from 'next/image'
import React from 'react'

export default function ForTravellers() {
  return (
    <div className='flex flex-col lg:flex-row  items-center justify-center gap-[64px] shoptravel-content'>
        <div>
            <Image src={'/traveler.svg'} width={560} height={446} alt='' placeholder="blur" blurDataURL="data:..." loading="lazy"></Image>
        </div>

        <div className='w-full md:w-[560px] flex flex-col gap-[44px]'>
            <h2 className='font-[700] text-[24px] md:text-[32px] leading-[32px] md:leading-[44px] text-[#1E2F28]'>Lorem ipsum dolor connectur</h2>

            <div className='flex flex-col gap-[36px]'>
                <span className='flex gap-[24px] items-start justify-between'>
                    <Image src={'/no1.svg'} width={28} height={28} alt='' className='w-[24px] h-[24px] md:w-[28px] md:h-[24px]'></Image>

                    <span className='flex flex-col gap-[12px]'>
                        <h3 className='font-[600] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1E2F28]'>Lorem ipsum dolor connectur</h3>
                        <p className='font-[500] text-[16px] leading-[24px] md:leading-[26px] text-[#1E2F28B2]'>Lorem ipsum dolor sit amet
                            consectetur. In scelerisque mattis
                            vulputate lacus ac sagittis urna. 
                            Non sapien blandit suspendisse
                        </p>
                    </span>
                </span>

                <span className='flex gap-[24px] items-start justify-between'>
                    <Image src={'/no2.svg'} width={28} height={28} alt='' className='w-[24px] h-[24px] md:w-[28px] md:h-[24px]'></Image>

                    <span className='flex flex-col gap-[12px]'>
                        <h3 className='font-[600] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1E2F28]'>Lorem ipsum dolor connectur</h3>
                        <p className='font-[500] text-[16px] leading-[24px] md:leading-[26px] text-[#1E2F28B2]'>Lorem ipsum dolor sit amet
                            consectetur. In scelerisque mattis
                            vulputate lacus ac sagittis urna. 
                            Non sapien blandit suspendisse
                        </p>
                    </span>
                </span>

                <span className='flex gap-[24px] items-start justify-between'>
                    <Image src={'/no3.svg'} width={28} height={28} alt='' className='w-[24px] h-[24px] md:w-[28px] md:h-[24px]'></Image>

                    <span className='flex flex-col gap-[12px]'>
                        <h3 className='font-[600] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#1E2F28]'>Lorem ipsum dolor connectur</h3>
                        <p className='font-[500] text-[16px] leading-[24px] md:leading-[26px] text-[#1E2F28B2]'>Lorem ipsum dolor sit amet
                            consectetur. In scelerisque mattis
                            vulputate lacus ac sagittis urna. 
                            Non sapien blandit suspendisse
                        </p>
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}
