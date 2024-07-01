"use client"

import Image from "next/image";
import { space_grotesk, questrial, montserrat } from "../fonts";
import Link from "next/link";
import { useState } from "react";

export const Footer = () => {
    const [isHide, setIsHide] = useState(true);
    return (
        <footer>
            <div className="py-20 px-8 sm:px-20">
                <div className="flex flex-col gap-6">
                    <h3 style={questrial.style} className="sm:text-5xl text-3xl md:text-7xl">Be the First to Receive the Latest News From SU-SANCHAR. </h3>
                    <div className="flex flex-col" style={questrial.style}>
                        <label className="text-gray-500 text-xs" htmlFor="email">Email *</label>
                        <input className="p-2 border-b-[1px] text-xs text-gray-500 border-black bg-transparent outline-none" type="email" id="email" />
                    </div>
                    <div className="flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-6">
                        <div className="flex items-center w-full" style={questrial.style}>
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-500   border-gray-500 accent-white rounded-none" />
                            <label htmlFor="default-checkbox" className="ms-2 text-xs text-gray-500">Yes, subscribe me to your newsletter.</label>
                        </div>
                        <button style={space_grotesk.style} className="bg-black text-white py-2 text-sm px-4 rounded-full w-full sm:w-1/2 transition-all border-black border-[1px] hover:text-black hover:bg-white">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-24 sm:px-6 lg:space-y-16 lg:px-8">
                    <div className="flex items-center md:justify-between md:flex-row flex-col sm:gap-0 gap-6">
                        <div>
                            <div>
                                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <Image width={200} height={200} src="/img/logo.png" className="h-1/2 invert" alt="Flowbite Logo" />
                                </Link>
                            </div>

                            <ul className="mt-8 flex gap-6 justify-center">
                                <li>
                                    <a href="https://www.linkedin.com/company/su-sanchar-aerospace/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75" >
                                        <span className="sr-only">Linkedin</span>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.youtube.com/@susancharaerospace"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">Youtube</span>

                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://x.com/susanchar10735"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">Twitter</span>

                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            />
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="flex gap-8 sm:gap-20 w-full md:w-3/5 justify-center sm:justify-end text-center mt-10 md:mt-0 ">
                            <div className="w-[40vw] md:w-2/5">
                                <p className="font-medium text-gray-900" style={space_grotesk.style}>COMPANY</p>

                                <ul className="mt-6 space-y-4 text-xs sm:text-sm" style={questrial.style}>
                                    <li>
                                        <Link href="/" className="text-gray-500 transition hover:opacity-75">HOME</Link>
                                    </li>

                                    <li>
                                        <Link href="/about" className="text-gray-500 transition hover:opacity-75"> ABOUT </Link>
                                    </li>

                                    <li>
                                        <Link href="/services" className="text-gray-500 transition hover:opacity-75"> SERVICES </Link>
                                    </li>

                                    <li>
                                        <Link href="/contact" className="text-gray-500 transition hover:opacity-75"> CONTACT </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-[40vw] md:w-2/5">
                                <p className="font-medium text-gray-900" style={space_grotesk.style}>CONTACT</p>

                                <ul className="mt-6 space-y-4 text-xs sm:text-sm" style={questrial.style}>
                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75">info@susancharaerospace.com</a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75">Phone: +91 9354021289, <br /> +91 7817870741
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:opacity-75"> Noida, Uttar Pradesh, India
                                            <br />

                                            Registered office : Haripurwa, Hardoi, UP India, 241001
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        {
                            !isHide &&
                            <div className="w-[30vw] sm:w-1/4">
                                <p className="font-medium text-gray-900" style={space_grotesk.style}>Legal</p>

                                <ul className="mt-6 space-y-4 text-xs sm:text-sm" style={questrial.style}>
                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                                    </li>
                                </ul>
                            </div>
                        }

                        </div>
                    </div>

                    <p style={questrial.style} className="text-sm text-gray-500">&copy;  2024 by SU-SANCHAR AEROSPACE.</p>
                </div>

            </div>
        </footer>
    );
}