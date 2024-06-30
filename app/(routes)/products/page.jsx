"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import { oswald, space_grotesk, questrial, jura } from "../../fonts";
import { Card } from "../_components/Card";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../../../helpers/isomorphicEffect";

gsap.registerPlugin(ScrollTrigger);





export default function Page() {
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
            <main className="bg-hero-products bg-cover w-full h-screen bg-center relative hero-section hero-service-section flex items-center justify-between pr-0 md:pr-2">
                <div className="relative z-10 px-8 md:px-20 flex flex-col gap-8 md:mx-0 mx-auto">
                    <h1 style={oswald.style} className="text-[#FEFBDE] text-[15vw] sm:text-[80px] text-center md:text-left leading-none">
                        OUR
                        <br />
                        PRODUCTS
                    </h1>
                </div>
            </main>
            <section>
                <div className="bg-black py-28 px-8 sm:px-14 flex flex-col gap-6 sm:gap-12">
                    <div className="relative w-[95%] mx-auto">
                        <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-white text-sm sm:text-xl">THE SU-SANCHAR DRONES</div>
                    <div style={questrial.style} className="text-white md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none">Perception-Enabled Technology</div>
                    <p className="text-sm font-medium w-full text-center md:w-2/5 ml-auto md:text-justify px-6 text-white">Engineered to drive autonomously, the Volaso delivery robot uses Perception Enabled Sensors to make decisions with environmental awareness, efficiency and safety.</p>
                    <div className="w-full mt-20 flex gap-8 h-full md:flex-row flex-col">
                        <div className="w-full md:w-1/2 flex flex-col overflow-hidden rounded-2xl shadow-2xl h-full bg-white">
                            <div className="p-10 shadow-2xl flex flex-col gap-6 pb-32">
                                <span style={space_grotesk.style}>ON THE ROAD SAFETY</span>
                                <hr />
                                <p className="text-sm font-medium">This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.</p>
                            </div>
                            <div className="w-full h-full">
                                <Image width={1000} height={1000} src="/img/service-1.jpg" alt="service-1" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col overflow-hidden rounded-2xl shadow-2xl md:mt-16 h-full bg-white">
                            <div className="p-10 shadow-2xl flex flex-col gap-6 pb-32">
                                <span style={space_grotesk.style}>LOW EMISSIONS & EFFICIENCY</span>
                                <hr />
                                <p className="text-sm font-medium">This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.</p>
                            </div>
                            <div className="w-full h-full">
                                <Image width={1000} height={1000} src="/img/service-2.png" alt="service-2" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={ref3} className="mb-20">
                <div className="bg-white pt-28 sm:px-14 px-6 flex flex-col gap-6 sm:gap-12">
                    <div className="relative w-[95%] mx-auto">
                        <div className="h-[0.5px] bg-[#c2c2c2] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-black w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div className="text-black sm:text-xl text-sm pl-8">OUR PRODUCTS</div>
                    <div className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none">Fully Autonomous, Uncompromisingly Sustainable</div>
                    <div className="flex flex-col relative" ref={ref}>
                        <Card product={"/img/product-2.jpg"} className={"md:flex-row"} title={'SURVEILLANCE DRONE'} features={["Realtime Monitoring", "Advanced Imaging"]} description={["Real-Time Monitoring", "Advanced Imaging", "Secure Data Transmission"]} />
                        <Card product={"/img/product-2.jpg"} className={"absolute top-0 md:flex-row-reverse w-full"} features={["AI Driven Precision", "Autonomous Protection"]} refernce={ref1} title={'SURVEILLANCE DRONE (AI POWERED)'} description={["AI-Driven Precision", "Autonomous Protection"]} />
                        <Card product={"/img/product-1.jpg"} className={"absolute top-0 md:flex-row w-full"} refernce={ref2} features={["Real-Time Surveillance", "Communication Anywhere"]} title={'COMMUNICATION DRONE'} description={["Real-Time Surveillance", "Communication Anywhere"]} />
                    </div>
                </div>
            </section>
           
        </>

    )
}