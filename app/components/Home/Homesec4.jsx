"use client"
import {useState} from 'react'
import ForShoppers from './ForShoppers'
import ForTravellers from './ForTravellers';



export default function Homesec4() {
  const[showTravelers, setShowTravelers] = useState(false);
  const [showShoppers, setShowShoppers] = useState(true);

  const toggleElement = ()=>{
    setShowShoppers((prevState) => !prevState);
    setShowTravelers((prevState) => !prevState)
  }
  return (
    <div className='homesec4  pt-[92px] pb-[96px] px-[24px] xl:px-[128px] bg-[#FFFFFF] text-[#1E2F28] ' id='homesec4'>
        <h1 className='font-[700] text-[36px] md:text-[56px] leading-[44px] md:leading-[68px] text-center mb-[36px]'>
            How Pairdel works
        </h1>

        <div className='flex gap-[16px] mb-[84px] justify-center'>
          <button type="button" className={`py-[12px] md:py-[14px] px-[16px] md:px-[20px] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-[600] rounded-[400px] ${showShoppers ? 'shop-travel':'inactive_shoptravel'}`}
            onClick={toggleElement}
          >
            For Shoppers
          </button>

          <button type="button" className={`py-[12px] md:py-[14px] px-[16px] md:px-[20px] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-[600] rounded-[400px] ${showTravelers ? 'shop-travel':'inactive_shoptravel'}`}
            onClick={toggleElement}
          >
            For Travelers
          </button>
        </div>
        
        <div >
          {showShoppers && <ForShoppers/>}
          {showTravelers && <ForTravellers/>} 
        </div>
        
    </div>
  )
}
