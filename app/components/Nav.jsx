"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

     const [modal, setModal] = useState(false);

        const toggleModal = () => {
            setModal(!modal);
        };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [modal]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const targetElement = document.getElementById('homesec4');
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop;
                const navBar = document.getElementById('navbar');
                
                if (scrollPosition >= targetPosition && scrollPosition <= targetPosition + 1000) {
                    setIsScrolled(true);
                    if (navBar) {
                        navBar.classList.add('scrolled');
                        navBar.classList.remove('unscrolled');
                    }
                } else {
                    setIsScrolled(false);
                    if (navBar) {
                        navBar.classList.add('unscrolled');
                        navBar.classList.remove('scrolled');
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div  className={`font-[600] text-[20px] leading-[28px] /flex w-full  justify-start xl:pl-[128px] fixed  xl:left-[64px] 3xl:left-[30%] text-[#FFFFFF] z-[80]`}>
            <div id='navbar' className={`mx-[24px] xl:mx-0 barbar pl-[24px] md:pl-[32px] border-[1.77px] border-[#FFFFFF1A] pr-[10px] md:pr-[16px] flex justify-between items-center mt-[32px]  /xl:ml-[128px] /2xl:ml-[45px] /3xl:ml-[0]  backdrop-blur-[20px] md:w-fit py-[10px] md:py-[16px] gap-[64px] rounded-[4000px] ${isOpen ? "active" : ""} ${isScrolled ? 'scrolled bg-[#0A8A58]' : 'unscrolled bg-gradient-to-b from-[#FFFFFF1F] to-[#FFFFFF1F]'}`}>
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

                        <button onClick={toggleModal} className='px-[26px] py-[14px] bg-[#1E2F28]  rounded-[4000px] font-[700] text-[20px] leading-[28px] hover:opacity-[0.8]'>
                            Get the app
                        </button>
                        
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
            

            {modal && (
            <div className="modal">
                <div onClick={toggleModal} className="overlay "></div>
                <div className="modal-content w-[560px] rounded-[24px] flex flex-col gap-[32px] justify-center items-center  py-[48px] ">
                    <h2 className="font-[700] text-[36px] leading-[52px] text-[#333333] text-center">Get the Pairdel app</h2>
                    <Image src={'/QR.png'} alt='' height={216} width={216}></Image>

                    <p className='font-[600] text-[20px] leading-[30px] text-[#5C5C5C] text-center w-[402px]'>
                        Scan the QR code with your phone camera to download the Pairdel app.
                    </p>
                </div>
            </div>
      )}
        </div>
    )
}