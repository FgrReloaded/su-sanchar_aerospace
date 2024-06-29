"use client";

import { useEffect, useRef } from "react";
import { oswald, space_grotesk, jura, questrial } from "../fonts";
import { Card } from "./_components/Card";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useIsomorphicLayoutEffect } from "../../helpers/isomorphicEffect.js";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();


    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ref3.current,
                    start: "35% top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                    pinnedContainer: ref3.current,
                },
            });

            tl.fromTo(
                ref1.current,
                { top: "100%", ease: "power1.inOut" },
                { top: "0%", ease: "power1.inOut" }
            ).fromTo(
                ref2.current,
                { top: "100%", ease: "power1.inOut" },
                { top: "0%", ease: "power1.inOut" }
            );

        });

        return () => ctx.revert();

    });


    return (
        <>
            <main className="bg-hero-pattern bg-cover w-full h-screen bg-center relative hero-section flex items-center justify-between md:pr-2">

                <div className="relative z-10 sm:px-32 px-8 flex flex-col gap-8 mx-auto md:mx-0 md:mt-0 mt-6">
                    <h1 style={oswald.style} className="text-[#FEFBDE] text-[15vw] sm:text-[80px] text-center md:text-left leading-none">
                        SU-SANCHAR AEROSPACE
                    </h1>
                    <p className="text-xl text-white w-4/5 text-center md:text-left mx-auto md:mx-0 md:ml-6">We are aerospace company specializing in Defense</p>
                </div>
            </main>
            <section>
                <div className="bg-black py-40 px-8 sm:px-20 flex flex-col gap-6 sm:gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-white text-sm sm:text-xl">VISION</div>
                    <div style={questrial.style} className="text-white md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none ">We&apos;re Here to Revolutionize the World of Drone Communication</div>
                    <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-0">
                        <div style={jura.style} className="text-white md:w-[30%] md:text-left text-center mt-16 text-[17px]">Su-Sanchar Aerospace Pvt. Ltd pioneers next-gen defense drone tech for national security. Our UAS redefine defense ops with cutting-edge autonomy, reliability, and strategic advantage. We&apos;re committed to excellence, forging partnerships, and shaping the future of aerial defense.</div>
                        <div className="mask-image md:w-3/5 h-[300px] sm:h-[475px] w-full">
                            <Image width={1000} height={1000} src="/img/home-revolution.jpg" alt="drone-img" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            <section ref={ref3}>
                <div className="bg-white pt-28 sm:px-14 px-6 flex flex-col gap-6 sm:gap-12">
                    <div className="relative w-[95%] mx-auto">
                        <div className="h-[0.5px] bg-[#c2c2c2] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-black w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div className="text-black sm:text-xl text-sm pl-8">OUR PRODUCTS</div>
                    <div className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none">Fully Autonomous, Uncompromisingly Sustainable</div>
                    <div className="flex flex-col relative" ref={ref}>
                        <Card product={"/img/product-1.jpg"} className={"md:flex-row"} title={'THERMAL IMAGING'} features={["Realtime Monitoring", "Advanced Imaging"]} description={"Our cutting-edge drone boasts real-time monitoring capabilities, allowing users to receive instant updates and live feeds from the drone’s camera. Equipped with advanced imaging technology, it captures high-resolution photos and videos, providing clear and detailed visuals for various applications. Additionally, the drone ensures secure data transmission, safeguarding all captured data against unauthorized access and ensuring it remains confidential and protected during transfers."} />
                        <Card product={"/img/product-2.jpg"} className={"absolute top-0 md:flex-row-reverse"} features={["AI Driven Precision", "Autonomous Protection"]} refernce={ref1} title={'NIGHT VISION'} description={"This state-of-the-art drone features AI-driven precision, enabling it to perform complex tasks with remarkable accuracy and efficiency. Its intelligent algorithms optimize flight paths and operations, ensuring optimal performance in various environments. Additionally, the drone offers autonomous protection, seamlessly detecting and avoiding obstacles to safeguard itself and its surroundings, allowing for worry-free operation in any setting."} />
                        <Card product={"/img/product-3.jpg"} className={"absolute top-0 md:flex-row"} refernce={ref2} features={["Real-Time Surveillance", "Communication Anywhere"]} title={'HIGH RESOLUTION CAMERA'} description={"Our advanced drone offers real-time surveillance, providing continuous and immediate monitoring of designated areas. Its robust communication system ensures seamless connectivity and data transmission, enabling reliable communication everywhere, even in remote or challenging environments. This combination of real-time surveillance and ubiquitous communication makes it an ideal solution for security, reconnaissance, and various other applications."} />
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-black py-40 sm:px-20 px-10 flex flex-col gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-white text-sm sm:text-xl">WHY SU-SANCHAR</div>
                    <div style={questrial.style} className="text-white md:text-[75px] text-3xl sm:text-5xl md:text-left text-center leading-none">A Different Approach, Using a New Method of Manufacturing</div>
                    <div className="flex flex-col cursor-default" style={space_grotesk.style}>
                        <div className="h-16 border-white border-b-2 flex items-center justify-between pr-2">
                            <p className="sm:text-sm text-xs md:text-xl text-left text-white">Safeguarding every sight, every flight with swift surveillance human detection.</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                            </div>
                        </div>
                        <div className="h-16 border-white border-b-2 flex items-center justify-between pr-2">
                            <p className="sm:text-sm text-xs md:text-xl text-left text-white">Tracking the network from the sky for precision navigation.</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                            </div>
                        </div>
                        <div className="h-16 border-white border-b-2 flex items-center justify-between pr-2">
                            <p className="sm:text-sm text-xs md:text-xl text-left text-white">Reliable detection, secure borders with precision gas sensor of this defense drone 24/7.</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                            </div>
                        </div>
                        <div className="h-16 border-white border-b-2 flex items-center justify-between pr-2">
                            <p className="sm:text-sm text-xs md:text-xl text-left text-white">Safeguarding borders one degree at a time and stay ahead with real-time or night time thermal detection</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="bg-black py-40 px-10 sm:px-20 flex flex-col gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-white text-sm sm:text-xl">COMPANY</div>
                    <div style={questrial.style} className="text-white md:text-[75px] text-3xl sm:text-5xl md:text-left text-center leading-none ">Su-Sanchar in Numbers</div>
                    <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
                        <div className="flex flex-col gap-6 w-full" style={questrial.style}>
                            <h3 className="text-white text-7xl ">50+</h3>
                            <div className="relative">
                                <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                                <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                            </div>
                            <p className="text-gray-400">Employees</p>
                        </div>
                        <div className="flex flex-col gap-6 w-full" style={questrial.style}>
                            <h3 className="text-white text-7xl ">8</h3>
                            <div className="relative">
                                <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                                <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                            </div>
                            <p className="text-gray-400">Core Team</p>
                        </div>
                        <div className="flex flex-col gap-6 w-full" style={questrial.style}>
                            <h3 className="text-white text-7xl ">5+</h3>
                            <div className="relative">
                                <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                                <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                            </div>
                            <p className="text-gray-400">Partners Worldwide</p>
                        </div>
                        <div className="flex flex-col gap-6 w-full" style={questrial.style}>
                            <h3 className="text-white text-7xl ">100+</h3>
                            <div className="relative">
                                <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                                <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                            </div>
                            <p className="text-gray-400">Customers</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="bg-white py-40 px-10 sm:px-20 flex flex-col gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#c2c2c2] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-black w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-black text-sm sm:text-xl">COLLABORATION</div>
                    <div style={questrial.style} className="text-black md:text-[75px] text-3xl sm:text-5xl md:text-left text-center leading-none ">Our Industry Partners</div>
                    <div className="flex justify-center flex-wrap gap-6">
                        <div className="md:w-[40vw] sm:w-[30vw] shadow-lg rounded-xl overflow-hidden">
                            <Image width={1000} height={1000} src="/img/partner.png" alt="partner" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-[40vw] sm:w-[30vw] shadow-lg rounded-xl overflow-hidden">
                            <Image width={1000} height={1000} src="/img/partner.png" alt="partner" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-[40vw] sm:w-[30vw] shadow-lg rounded-xl overflow-hidden">
                            <Image width={1000} height={1000} src="/img/partner.png" alt="partner" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-[40vw] sm:w-[30vw] shadow-lg rounded-xl overflow-hidden">
                            <Image width={1000} height={1000} src="/img/partner.png" alt="partner" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section> */}

        </>

    );
}