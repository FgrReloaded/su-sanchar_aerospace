"use client"

import Link from 'next/link';
import { montserrat, play } from '../fonts';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export const Navbar = () => {
    const navbarRef = useRef(null);
    const navList = useRef(null);
    const checked = useRef(null);

    useEffect(() => {
        gsap.fromTo(".logo-animate", {
            y: -80,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15
        })
        let lastScrollTop = 0;
        const scrollThreshold = 50;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > scrollThreshold) {
                if (scrollTop > lastScrollTop) {
                    gsap.to(navbarRef.current, { top: '-100%', duration: 0.3, ease: 'power2.inOut' });
                    gsap.to(navbarRef.current, {
                        backgroundColor: "#000", duration: 0
                    })
                    let classes = navList.current.classList;
                    if(!classes.contains('translate-x-[100%]')) {
                        navList.current.classList.add('translate-x-[100%]');
                        checked.current.checked = false;
                    }
                }
            } else {
                gsap.to(navbarRef.current, { backgroundColor: 'transparent', duration: 0 });
            }
            if (scrollTop < lastScrollTop) {
                gsap.to(navbarRef.current, { top: '0%', duration: 0.3, ease: 'power2.inOut' });
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    const handleNavbar = () => {
        let currentBg = navbarRef.current.style.backgroundColor;
        let checkedValue = checked.current.checked;
        if(checkedValue) {
            navList.current.classList.remove('translate-x-[100%]');
            navbarRef.current.style.backgroundColor = (currentBg === 'transparent' || currentBg === "") ? '#000' : 'transparent';
            
        }else{
            setTimeout(() => {
                navbarRef.current.style.backgroundColor = (currentBg === 'transparent' || currentBg === "") ? '#000' : 'transparent';
            }, 750);
            navList.current.classList.add('translate-x-[100%]');
        }
    }

    return (
        <nav className='relative flex justify-center z-50'>
            <div ref={navbarRef} className="fixed w-full min-w-full top-0 z-10 bg-transparent h-[90px] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 md:px-16">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse logo-animate ml-6">
                    <span style={montserrat.style} className="self-center text-xl  whitespace-nowrap text-[#FEFBDE]">SU-SANCHAR</span>
                    <Image width={100} height={100} src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                </a>
                <label className="menu-button-wrapper mr-6" onClick={handleNavbar}>
                    <input ref={checked} type="checkbox" className="menu-button" />
                    <div className="icon-wrapper">
                        <label className="hamburger">
                            <input className="hamburger-input" type="checkbox" />
                            <span className="hamburger-line first"></span>
                            <span className="hamburger-line second"></span>
                            <span className="hamburger-line third"></span>
                        </label>
                    </div>
                </label>
                <div ref={navList} className="w-full md:translate-x-0 translate-x-[100%] md:mt-0 mt-4 md:block md:w-auto md:bg-transparent bg-black" id="navbar-default">
                    <ul style={play.style} className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
                        <li>
                            <Link href={'/'} className="block py-2 px-3 text-[#D5BF8D] hover:text-[#C2C2C2] text-[17px] logo-animate">HOME</Link>
                        </li>
                        <li>
                            <Link href={'/about'} className="block py-2 px-3 text-[#D5BF8D] hover:text-[#C2C2C2] text-[17px] logo-animate">ABOUT</Link>
                        </li>
                        <li>
                            <Link href={'/services'} className="block py-2 px-3 text-[#D5BF8D] hover:text-[#C2C2C2] text-[17px] logo-animate">SERVICES</Link>
                        </li>
                        <li>
                            <Link href={'/contact'} className="block py-2 px-3 text-[#D5BF8D] hover:text-[#C2C2C2] text-[17px] logo-animate">CONTACT</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};