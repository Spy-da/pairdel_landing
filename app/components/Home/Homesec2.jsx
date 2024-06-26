"use client"
import Image from "next/image"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


export default function Homesec2() {
    useEffect(() => {
        // GSAP animation for phone2 image (translate Y)
        gsap.to('.phone2', {
            duration: 0.5, // Duration of the animation in seconds
            ease: "power1.inOut",
            y: -150,
            scrollTrigger: {
                trigger: '.phone2',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5,
                // markers:true
            }
        });

        // GSAP animation for pop2 image (translate X)
        gsap.to('.pop4', {
            duration: 1, // Duration of the animation in seconds
            ease: "expo.out",
            x: '-20%',
            y: -50,
            scrollTrigger: {
                trigger: '.pop4',
                // start: 'top bottom',
                // end: 'bottom top',
                scrub: 0.5
            }
        });

        gsap.to('.pop3', {
            duration: 1, // Duration of the animation in seconds
            ease: "expo.out",
            x: '-20%',
            y: -50,
            scrollTrigger: {
                trigger: '.pop4',
                // start: 'top bottom',
                // end: 'bottom top',
                scrub: 0.5
            }
        });

        gsap.to('.pop5', {
            duration: 1, // Duration of the animation in seconds
            ease: "expo.out",
            x: '20%',
            // y: -50,
            scrollTrigger: {
                trigger: '.pop5',
                // start: 'top bottom',
                // end: 'bottom top',
                scrub: 0.7
            }
        });
    }, []);
  return (
    <div className='contain text-[#FFFFFF] 3xl:justify-center 3xl:bg-center overflow-hidden flex flex-col lg:flex-row gap-[64px] lg:gap-[24px] xl:gap-[74px] 2xl:gap-[99px] items-center /justify-between px-[24px] xl:px-[128px] py-[64px] lg:py-[135px] bg-[url(/bg-liness1.svg)]  xl:bg-[url(/bg-liness.svg)] /bg-center /md:bg-cover /bg-no-repeat bg-repeat xl:bg-no-repeat'>

        <div className='w-full lg:w-[522px] flex flex-col gap-[20px] text-start'>
            <h2 className='font-[700] text-[36px]  md:text-[56px] leading-[44px] md:leading-[68px]'>
                Quick, safe, and hassle-free delivery
            </h2>

            <p className='font-[500] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px]'>
                Track all your orders in one convenient place, 
                ensuring a smooth process with on-time arrivals, 
                transparent pricing, and a delightful travel experience, 
                free from delivery headaches.
            </p>
        </div>
        <div className='relative md:block flex justify-center'>
            <Image src={'/phone2.svg'} height={530} width={509} alt='' className="phone2 w-[70%] md:w-[100%]"></Image>
            <Image src={'/pop3.svg'} height={92} width={335} alt='' className='absolute top-[20%] md:top-[-8%] right-[-10%] max-w-[50%] md:max-w-[100%] pop3'></Image>
            <Image src={'/pop4.svg'} height={92} width={335} alt='' className='absolute top-[0%] md:top-[10%] right-[-10%] max-w-[50%] md:max-w-[100%] pop4'></Image>
            <Image src={'/pop5.svg'} height={122} width={327} alt='' className='absolute left-[-10%] md:left-[-20%] bottom-[-15%] md:bottom-[-30%] h-[80%] md:h-[100%] max-w-[50%] md:max-w-[100%] pop5'></Image>
        </div>
    </div>
  )
}
