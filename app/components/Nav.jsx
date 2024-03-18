"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
// import { useRouter } from 'next/navigation';

export default function Nav() {
    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         const homesec4Element = document.getElementById('homesec4');

    //         if (homesec4Element) {
    //             const homesec4Position = homesec4Element.offsetTop + homesec4Element.offsetHeight;
                
    //             // Change 50 to the desired offset from the top of the section
    //             if (scrollPosition > homesec4Position) {
    //                 setIsScrolled(true);
    //             } else {
    //                 setIsScrolled(false);
    //             }
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div id='navbar' className={`navMenu mt-[32px] font-[600] text-[20px] leading-[28px] fixed z-[50] ml-[24px] xl:ml-[128px] flex gap-[64px] w-fit py-[16px] pl-[32px] pr-[16px] rounded-[4000px]  items-center text-[#FFFFFF]  bg-gradient-to-b from-[#FFFFFF1F] to-[#FFFFFF1F] backdrop-blur-[20px]`}>
            <Link href={'/'} className='flex items-center gap-[11.76px]'>
                <Image width={35.11} height={36} src={'/pairdelLogo.svg'} alt='logo'/>
                <p>Pairdel</p> 
            </Link>

            <div className='flex gap-[12px] items-center'>
                <Link href={'/'} className='px-[20px] py-[10px]'>
                    Blog
                </Link>

                <Link href={'/'} className='px-[20px] py-[10px]'>
                    Help Center
                </Link>

                <a href="http://" className='px-[26px] py-[14px] bg-[#1E2F28]  rounded-[4000px] font-[700] text-[20px] leading-[28px]'>
                    Get the app
                </a>
            </div>

            {/* <button
                type="button"
                className={`hamburger lg:hidden ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="hamburger-bar top"></div>
                <div className="hamburger-bar middle"></div>
                <div className="hamburger-bar bottom"></div>
            </button> */}
        </div>
    )
}