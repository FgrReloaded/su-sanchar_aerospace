import Image from "next/image";
import { oswald, space_grotesk, questrial, jura } from "../../fonts";


export const metadata = {
    title: "About | Su-Sanchar",
    description: "We are aerospace company specializing in Defense",
};

export default function Page() {
    return (
        <>
            <main className="bg-hero-about bg-cover w-full h-screen bg-center relative hero-section flex items-center justify-between pr-0 md:pr-2">
                <div className="relative z-10 px-16 md:px-32 flex flex-col gap-8 mx-auto">
                    <h1 style={oswald.style} className="text-[#FEFBDE] text-[15vw] sm:text-[80px] text-center leading-none">
                        KNOW MORE
                        <br />
                        ABOUT US
                    </h1>
                </div>
            </main>
            <section>
                <div className="bg-white py-40 px-8 sm:px-20 flex flex-col gap-6 sm:gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#c2c2c2] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-black w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-black text-sm sm:text-xl">OUR MISSION</div>
                    <div style={questrial.style} className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none ">Driving a Sustainable Future</div>
                    <div className="flex items-center mt-6 md:flex-row flex-col md:gap-0 gap-8">
                        <div className="w-full md:w-1/2 h-[480px] ">
                            <Image width={1000} height={1000} src="/img/sustainable.jpg" alt="card-1" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <p style={questrial.style} className="w-full md:w-1/2 px-8 md:px-20 text-justify leading-8 text-sm">At Su-Sanchar, we specialize in drone manufacturing with a mission to revolutionize communication with remote areas. We believe that drones can solve communication problems in areas that were previously impossible to reach. That&apos;s why we have dedicated ourselves to creating the best communication drones available on the market today. We offer a range of services aimed at making the world a better place through the use of drone technology.</p>
                    </div>
                    <div style={questrial.style} className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none ">Operational Excellence</div>
                    <div className="flex items-center mt-6 md:flex-row-reverse flex-col-reverse md:gap-0 gap-8">
                        <div className="w-full md:w-1/2 h-[480px] ">
                            <Image width={1000} height={1000} src="/img/about-card-2.jpg" alt="card-2" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <p style={questrial.style} className="w-full md:w-1/2 px-8 md:px-20 text-justify leading-8 text-sm">At Su-Sanchar, we specialize in drone manufacturing with a mission to revolutionize communication with remote areas. We believe that drones can solve communication problems in areas that were previously impossible to reach. That&apos;s why we have dedicated ourselves to creating the best communication drones available on the market today. We offer a range of services aimed at making the world a better place through the use of drone technology.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white py-10 px-8 sm:px-20 flex flex-col gap-6 sm:gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#c2c2c2] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-black w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-black text-sm sm:text-xl">WHO WE ARE</div>
                    <div style={questrial.style} className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none ">Meet the Founders</div>
                    <p className="text-justify text-sm font-medium w-full md:w-2/4 mx-auto md:ml-auto">Su Sanchar Aerospace pioneers advanced drone solutions for defense, setting new standards in aerospace technology. Specializing in design, development, and deployment of cutting-edge unmanned aerial systems (UAS), we prioritize reliability, performance, and safety. With a mission-centric focus, our solutions provide defense agencies unparalleled situational awareness and strategic advantage. Committed to excellence and innovation, Su Sanchar Aerospace shapes the future of aerial defense technology, ensuring global security readiness.</p>
                    <div className="flex gap-6 justify-center w-full flex-wrap">
                        <div className="bg-black  flex flex-col w-full md:w-[30%] rounded-2xl overflow-hidden">
                            <div className="px-6 pt-12 mb-10 text-white">
                                <p style={space_grotesk.style} className="text-center">
                                    <span className="font-extrabold text-2xl">ADARSH SINGH</span>
                                    <br />
                                    (Mentor)
                                </p>
                                <p style={questrial.style} className="flex flex-col text-center mt-6">
                                    <span>BE in  ECE Graduated in 2021</span>
                                    <span>CEO of Hoverin aerospace Pvt Ltd.</span>
                                    <span>Skills in Embedded, IoT, Business Analyst</span>
                                    <span>Coordinated E-Cell in College</span>
                                </p>
                            </div>
                            <div className="w-full md:md:h-[250px]">
                                <Image width={1000} height={1000} src="/img/team/adarsh-singh.png" alt="team-1" className="w-full h-full object-cover mt-2 sm:mt-1 ml-20" />
                            </div>
                        </div>
                        <div className="bg-white flex flex-col w-full  md:w-[30%] rounded-2xl overflow-hidden shadow-xl">
                            <div className="px-6 pt-12 mb-10 text-black">
                                <p style={space_grotesk.style} className="text-center">
                                    <span className="font-extrabold text-2xl">PRADEEP KUMAR</span>
                                    <br />
                                    (Mentor)
                                </p>
                                <p style={questrial.style} className="flex flex-col text-center mt-6">
                                    <span>BE in  ECE Graduated in 2021</span>
                                    <span>CEO of Hoverin aerospace Pvt Ltd.</span>
                                    <span>Skills in Robotics, Embedded, IoT & ML</span>
                                    <span>Leaded Robotics Club in College</span>
                                </p>
                            </div>
                            <div className="w-full md:h-[250px]">
                                <Image width={1000} height={1000} src="/img/team/pradeep-kumar.png" alt="team-1" className="w-full h-full object-contain mt-8 ml-20" />
                            </div>
                        </div>
                        <div className="bg-black flex flex-col w-full md:w-[30%] rounded-2xl overflow-hidden">
                            <div className="px-6 pt-12 mb-10 text-white">
                                <p style={space_grotesk.style} className="text-center">
                                    <span className="font-extrabold text-2xl">Parth Pradhumn</span>
                                    <br />
                                    (Co-Founder)
                                </p>
                                <p style={questrial.style} className="flex flex-col text-center mt-6">
                                    <span>BE in  ME Graduated in 2023</span>
                                    <span>CMO of Hoverin aerospace Pvt Ltd.</span>
                                    <span>Skills in Graphic Design, Digital marketing</span>
                                    <span>Volunteer and TedX Tajnagri in college</span>
                                </p>
                            </div>
                            <div className="w-full md:h-[250px]">
                                <Image width={1000} height={1000} src="/img/team/parth-pradhumn.png" alt="team-1" className="w-full h-full object-contain mt-6 ml-20" />
                            </div>
                        </div>
                        <div className="bg-white flex flex-col w-full  md:w-[30%] rounded-2xl overflow-hidden shadow-xl">
                            <div className="px-6 pt-12 mb-10 text-black">
                                <p style={space_grotesk.style} className="text-center">
                                    <span className="font-extrabold text-2xl">NAVED AKTAR</span>
                                    <br />
                                    (Co-Founder)
                                </p>
                                <p style={questrial.style} className="flex flex-col text-center mt-6">
                                    <span>BE in  ME Graduated in 2021</span>
                                    <span>CTO of Hoverin aerospace Pvt Ltd</span>
                                    <span>Skills in Manufacturing, Production, CAD design</span>
                                </p>
                            </div>
                            <div className="w-full md:h-[250px]">
                                <Image width={1000} height={1000} src="/img/team/naved-aktar.png" alt="team-1" className="w-full h-full object-contain mt-8 ml-24" />
                            </div>
                        </div>
                        <div className="bg-black flex flex-col w-full justify-between  md:w-[30%] rounded-2xl overflow-hidden shadow-xl">
                            <div className="px-6 pt-12 mb-10 text-white">
                                <p style={space_grotesk.style} className="text-center">
                                    <span className="font-extrabold text-2xl">ABHISHEK MISHRA</span>
                                    <br />
                                    (Advisor)
                                </p>
                                <p style={questrial.style} className="flex flex-col text-center mt-6">
                                    <span>MBA in  marketing Post Graduated in 2009</span>
                                    <span>Skills in Strategic Business Advisor</span>
                                </p>
                            </div>
                            <div className="w-full md:h-[250px]">
                                <Image width={1000} height={1000} src="/img/team/abhishek-mishra.png" alt="team-1" className="w-full h-full object-contain mt-8 ml-20" />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white py-40 px-8 sm:px-20 flex flex-col gap-6 sm:gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#c2c2c2] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-black w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-black text-sm sm:text-xl">PRESS</div>
                    <div style={questrial.style} className="text-black md:text-[75px] text-3xl sm:text-6xl md:text-left text-center leading-none ">SU-SANCHAR on social media</div>
                    <p className="text-sm w-full md:text-left text-center sm:w-10/12 font-medium px-6 ">At Su-Sanchar, we help transform the way organizations approach their operations and enhance their productivity. Our state-of-the-art drone technology, coupled with our expert personnel, delivers real-time insights and analytics that drive smarter decision making. </p>
                    <div className="flex justify-between flex-wrap gap-6 w-[83%] md:ml-auto mx-auto">
                        <a href="https://www.linkedin.com/company/su-sanchar-aerospace/" className="md:w-[15vw] sm:w-[30vw] shadow-lg rounded-2xl overflow-hidden cursor-pointer">
                            <Image width={500} height={500} src="/img/linkedin.svg" alt="partner" className="w-full h-full object-cover" />
                        </a>
                        <a href="https://www.youtube.com/@susancharaerospace" className="md:w-[15vw] sm:w-[30vw] shadow-lg rounded-2xl overflow-hidden cursor-pointer">
                            <Image width={500} height={500} src="/img/youtube.svg" alt="partner" className="w-full h-full object-cover" />
                        </a>
                        <a href="https://x.com/susanchar10735" className="md:w-[15vw] sm:w-[30vw] shadow-lg rounded-2xl overflow-hidden cursor-pointer">
                            <Image width={500} height={500} src="/img/twitter.svg" alt="partner" className="w-full h-full object-cover" />
                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}