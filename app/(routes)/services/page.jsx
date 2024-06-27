import Image from "next/image";
import { oswald, space_grotesk, questrial, jura } from "../../fonts";


export const metadata = {
    title: "Services | Su-Sanchar",
    description: "We are aerospace company specializing in Defense",
};


export default function Page() {
    return (
        <>
            <main className="bg-hero-service bg-cover w-full h-screen bg-center relative hero-section hero-service-section flex items-center justify-between pr-0 md:pr-2">
                <div className="relative z-10 px-8 md:px-20 flex flex-col gap-8 md:mx-0 mx-auto">
                    <h1 style={oswald.style} className="text-[#FEFBDE] text-[15vw] sm:text-[80px] text-center md:text-left leading-none">
                        SERVICES
                        <br />
                        WE PROVIDE
                    </h1>
                </div>
            </main>
            <section>
                <div className="bg-white py-28 px-8 sm:px-14 flex flex-col gap-6 sm:gap-12">
                    <div className="relative w-[95%] mx-auto">
                        <div className="h-[0.5px] bg-[#c2c2c2] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-black w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-black text-sm sm:text-xl">THE SU-SANCHAR DRONES</div>
                    <div style={questrial.style} className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none">Perception-Enabled Technology</div>
                    <p className="text-sm font-medium w-full text-center md:w-2/5 ml-auto md:text-justify px-6">Engineered to drive autonomously, the Volaso delivery robot uses Perception Enabled Sensors to make decisions with environmental awareness, efficiency and safety.</p>
                    <div className="w-full mt-20 flex gap-8 h-full md:flex-row flex-col">
                        <div className="w-full md:w-1/2 flex flex-col overflow-hidden rounded-2xl shadow-2xl h-full">
                            <div className="p-10 shadow-2xl flex flex-col gap-6 pb-32">
                                <span style={space_grotesk.style}>ON THE ROAD SAFETY</span>
                                <hr />
                                <p className="text-sm font-medium">This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.</p>
                            </div>
                            <div className="w-full h-full">
                                <Image width={1000} height={1000} src="/img/service-1.jpg" alt="service-1" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col overflow-hidden rounded-2xl shadow-2xl md:mt-16 h-full">
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
            <section>
                <div className="bg-white py-40 px-8 md:px-20 flex flex-col gap-6 sm:gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#c2c2c2] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-black w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-black text-sm sm:text-xl">THE SU-SANCHAR DIGITAL PRODUCTS</div>
                    <div style={questrial.style} className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none">Seamless User Experience</div>
                    <div className="flex items-center mt-6 md:flex-row flex-col md:gap-0 gap-8">
                        <div className="w-full md:w-1/2 h-[300px] sm:h-[480px] ">
                            <Image width={1000} height={1000} src="/img/about-card-1.jpg" alt="card-1" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center">
                            <span>ADVANCED DATA SECURITY</span>
                            <span className="h-[0.5px] bg-[#c2c2c2] w-3/5 mx-auto"></span>
                            <p style={questrial.style} className="px-8 sm:px-20 text-justify leading-8 text-sm">At Su-Sanchar, we specialize in drone manufacturing with a mission to revolutionize communication with remote areas. We believe that drones can solve communication problems in areas that were previously impossible to reach. That&apos;s why we have dedicated ourselves to creating the best communication drones available on the market today. We offer a range of services aimed at making the world a better place through the use of drone technology.</p>
                        </div>
                    </div>
                    <div style={questrial.style} className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none">Operational Excellence</div>
                    <div className="flex items-center mt-6 flex-col-reverse md:flex-row-reverse md:gap-0 gap-8">
                        <div className="w-full md:w-1/2 h-[300px] sm:h-[480px] ">
                            <Image width={1000} height={1000} src="/img/about-card-2.jpg" alt="card-2" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center">
                            <span>REAL-TIME INFORMATION</span>
                            <span className="h-[0.5px] bg-[#c2c2c2] w-3/5 mx-auto"></span>
                            <p style={questrial.style} className="px-8 sm:px-20 text-justify leading-8 text-sm">At Su-Sanchar, we specialize in drone manufacturing with a mission to revolutionize communication with remote areas. We believe that drones can solve communication problems in areas that were previously impossible to reach. That&apos;s why we have dedicated ourselves to creating the best communication drones available on the market today. We offer a range of services aimed at making the world a better place through the use of drone technology.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}