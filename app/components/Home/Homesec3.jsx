"use client"
import Image from "next/image"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Homesec3() {

    useEffect(() => {
        gsap.to('.centerAlert', {
            duration: 1, // Duration of the animation in seconds
            ease: "expo.out",
            // x: '-20%',
            y: 150,
            scrollTrigger: {
                trigger: '.pop7',
                // start: 'top bottom',
                // end: 'bottom top',
                scrub: 1
            }
        });

        gsap.to('.pop6', {
            duration: 0.5, // Duration of the animation in seconds
            ease: "expo.out",
            x: '-10%',
            y: -15,
            scrollTrigger: {
                trigger: '.pop6',
                // start: 'top bottom',
                // end: 'bottom top',
                scrub: 1
            }
        });


        gsap.to('.pop7', {
            duration: 0.5, // Duration of the animation in seconds
            ease: "expo.out",
            x: '-70%',
            y: -15,
            scrollTrigger: {
                trigger: '.pop7',
                // start: 'top bottom',
                // end: 'bottom top',
                scrub: 1
            }
        });
    }, []);
  return (
    <div className='text-[#FFFFFF] overflow-hidden flex flex-col-reverse lg:flex-row gap-[64px] lg:gap-0 items-center justify-between px-[24px] xl:px-[128px] py-[64px] lg:py-[135px] bg-[url(/bg-liness1.svg)]  xl:bg-[url(/bg-liness.svg)] bg-no-repeat lg:bg-repeat xl:bg-no-repeat homesec3'>
        <div className='relative md:block flex justify-center '>
            <Image src={'/phone3.svg'} height={530} width={509} alt='' className="w-[70%] md:w-[100%]"></Image>
            <Image src={'/CenterAlert.svg'} height={146} width={192} alt='' className='absolute top-[-30%] md:top-[-5%] left-[5%] md:left-[-5%] centerAlert max-w-[35%] md:max-w-[100%]'></Image>
            <Image src={'/pop6.svg'} height={70} width={298} alt='' className='absolute right-0 md:right-[-15%] bottom-[8%] max-w-[45%] md:max-w-[100%] pop6'></Image>
            <Image src={'/pop7.svg'} height={70} width={298} alt='' className='absolute right-[-30%] md:right-[-50%] bottom-[-8%] max-w-[45%] md:max-w-[100%] pop7'></Image>
        </div>

        <div className='w-full md:w-[522px] flex flex-col gap-[20px] text-start'>
            <h2 className='font-[700] text-[36px]  md:text-[56px] leading-[44px] md:leading-[68px]'>
                Lorem ipsum dolor sit consectetur.
            </h2>

            <p className='font-[500] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px]'>
                Lorem ipsum dolor sit amet consectetur. 
                Sit nunc neque turpis tincidunt pellentesque
                non est aliquam. Lectus amet.
            </p>
        </div>
    </div>
  )
}
