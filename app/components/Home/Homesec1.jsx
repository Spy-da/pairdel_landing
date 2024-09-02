"use client"
import Image from 'next/image'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Homesec1() {

    useEffect(() => {
        // GSAP animation for phone1 image (translate Y)
        gsap.to('.phone1', {
            duration: 0.5, // Duration of the animation in seconds
            ease: "power1.inOut",
            y: -100,
            scrollTrigger: {
                trigger: '.phone1',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5,
                // markers:true
            }
        });

        // GSAP animation for pop2 image (translate X)
        gsap.to('.pop2', {
            duration: 1, // Duration of the animation in seconds
            ease: "expo.out",
            x: '20%',
            y: -50,
            scrollTrigger: {
                trigger: '.pop2',
                // start: 'top bottom',
                // end: 'bottom top',
                scrub: 0.7
            }
        });
    }, []);
  return (
    <div className='contain homesec1 text-[#FFFFFF]  flex flex-col-reverse lg:flex-row gap-[64px] lg:gap-[24px] xl:gap-[74px] 2xl:gap-[107px] items-center  3xl:justify-center 3xl:bg-center /lg:justify-between px-[24px] xl:px-[128px] py-[64px] lg:py-[135px] bg-[url(/bg-liness1.svg)]  xl:bg-[url(/bg-liness.svg)] /bg-center /md:bg-cover /bg-no-repeat bg-repeat xl:bg-no-repeat'>
        <div className='relative md:block flex justify-center'>
            <Image src={'/phonee1.svg'} height={530} width={509} alt='' className='phone1 w-[70%] md:w-[100%]'></Image>
            <Image src={'/pop1.svg'} height={256} width={216} alt='' className='absolute top-[-20%] md:top-[-10%] right-[10%] md:right-0  max-w-[30%] md:max-w-[100%]'></Image>
            <Image src={'/pop2.svg'} height={122} width={327} alt='' className='absolute bottom-[-10%] right-[50%] md:right-[45%] max-w-[45%] md:max-w-[100%] pop2'></Image>
        </div>

        <div className='w-full lg:w-[522px] flex flex-col gap-[20px] text-start'>
            <h2 className='font-[700] text-[36px]  md:text-[56px] leading-[44px] md:leading-[68px]'>
                Delivery Options You Can Trust
            </h2>

            <p className='font-[500] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px]'>
                All our registered travelers have been carefully 
                verified to ensure your packages are in good hands. 
                You just have to choose from the available offers based 
                on delivery date, price, and reviews. For once, you have
                 real delivery options.
            </p>
        </div>
    </div>
  )
}
