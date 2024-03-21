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
        <div id='navbar' className={`font-[600] text-[20px] leading-[28px]  w-full fixed lg:left-[0%] xl:left-[0%] 2xl:left-[5.5%] text-[#FFFFFF] z-[80] 3xl:flex justify-center`}>
            <div className={`mx-[24px] xl:mx-0 barbar pl-[24px] md:pl-[32px] border-[1.77px] border-[#FFFFFF1A] pr-[10px] md:pr-[16px] flex justify-between items-center mt-[32px]  xl:ml-[128px] 2xl:ml-[45px] 3xl:ml-[0] bg-gradient-to-b from-[#FFFFFF1F] to-[#FFFFFF1F] backdrop-blur-[20px] md:w-fit py-[10px] md:py-[16px] gap-[64px] rounded-[4000px] ${isOpen ? "active" : ""}`}>
                <Link href={'/'} className='flex items-center gap-[11.76px]'>
                    <Image width={35.11} height={36} src={'/pairdelLogo.svg'} alt='logo'/>
                    <p>Pairdel</p> 
                </Link>

                <div
                    className={`/flex gap-[12px] hidden  md:flex items-center justify-between`}
                >
                    <span className='/hidden md:block flex flex-col justify-center items-start'>
                        <Link href={'/'} className='px-[20px] py-[10px]'>
                            Blog
                        </Link>

                        <Link href={'/'} className='px-[20px] py-[10px]'>
                            Help Center
                        </Link>

                        <a href="http://" className='px-[26px] py-[14px] bg-[#1E2F28]  rounded-[4000px] font-[700] text-[20px] leading-[28px]'>
                            Get the app
                        </a>
                    </span>

                    
                </div>


                <button
                        type="button"
                        className={`hamburger  bg-[#1E2F28]  /flex /flex-col /gap-[10px]  md:hidden ${isOpen ? "active" : ""}`}
                        onClick={toggleMenu}
                    >
                        
                        <div className="hamburger-bar top"></div>
                        <div className="hamburger-bar middle"></div>
                        <div className="hamburger-bar bottom"></div>
                        
                    </button>
            </div>

            <span className={`/hidden md:hidden flex flex-col text-center w-full justify-center px-[24px] gap-[24px] items-start navMenu ${
                        isOpen ? " active " : ""
                    }`}  >
                <Link href={'/'} className='px-[20px] py-[10px] w-full border-b-[1px] border-[#FFFFFF33]'>
                    Blog
                </Link>

                <Link href={'/'} className='px-[20px] py-[10px] w-full border-b-[1px] border-[#FFFFFF33]'>
                    Help Center
                </Link>

                <a href="http://" className='px-[26px] py-[14px] bg-[#25A774]  rounded-[4000px] font-[700] text-[20px] leading-[28px] w-full'>
                    Get the app
                </a>
            </span>
    
        </div>
    )
}