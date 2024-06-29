import Image from "next/image";
import { oswald, space_grotesk, questrial, jura } from "../../fonts";


export const metadata = {
    title: "Services | Su-Sanchar",
    description: "We are aerospace company specializing in Defense",
};


export default function Page() {
    return (
        <div className="relative h-screen overflow-hidden bg-red-900">
            <img src="/img/coming-soon.jpg" className="absolute object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-[0.5]">
            </div>
            <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div className="relative z-10 flex flex-col items-center w-full font-mono mt-28">
                    <h1 className="text-5xl font-extrabold leading-tight text-center text-white underline">
                        !Coming Soon!
                    </h1>
                    <p className="font-extrabold text-white text-8xl  text-center" style={jura.style}>
                        SuSanchar Aerospace
                        <br />
                        <span className="underline">
                            Services
                        </span>
                    </p>
                </div>
            </div>
        </div>


    )
}