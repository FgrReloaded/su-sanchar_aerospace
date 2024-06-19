import { oswald, space_grotesk, jura, questrial } from "../fonts";




export default function Home() {
    return (
        <>
            <main className="bg-hero-pattern bg-cover w-full h-screen bg-center relative hero-section flex items-center">

                <div className="relative z-10 px-32 flex flex-col gap-8">
                    <h1 style={oswald.style} className="text-[#FEFBDE] text-[80px] text-left leading-none">
                        SU-SANCHAR
                        <br />
                        AEROSPACE
                    </h1>
                    <p className="text-xl text-white w-4/5">We are aerospace company specializing in Defense</p>
                </div>
            </main>
            <section>
                <div className="bg-black py-40 px-20 flex flex-col gap-12">
                    <div className="relative">
                        <div className="h-[0.5px] bg-[#6e6e6e] w-full mx-auto"></div>
                        <div className="h-[0.5px] bg-white w-1/5 absolute left-0 top-0"></div>
                    </div>
                    <div style={space_grotesk.style} className="text-white text-xl">VISION</div>
                    <div style={questrial.style} className="text-white text-[75px] leading-none">We’re Here to Revolutionize the World of Drone Communication</div>
                    <div style={jura.style} className="text-white w-[30%] mt-16 text-[17px]">To provide unmatched aerial communication support, ensuring seamless and secure connectivity in the most challenging environments.</div>
                </div>
            </section>
        </>

    );
}