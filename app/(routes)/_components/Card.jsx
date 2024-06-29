import Image from "next/image";
import { space_grotesk, questrial } from "../../fonts";



export const Card = ({ img, title, description, refernce, className, product,features }) => {
    return (
        <div ref={refernce} className={`flex justify-center px-10 rounded-3xl md:flex-row flex-col bg-white ${className}`} style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
            <div className="relative w-[0.5px] mx-auto">
                <div className="h-4/5 bg-[#c2c2c2] absolute left-0 top-0 w-[0.5px] mx-auto"></div>
                <div className="h-1/5 bg-black w-[0.5px] absolute left-0 top-0"></div>
            </div>
            <div className="flex flex-col justify-center gap-8 md:w-1/2 pl-6 sm:pl-16 w-full py-12 md:py-0">
                <p className="text-xl" style={space_grotesk.style}>{title}</p>
                <div className="flex flex-col gap-4" style={questrial.style}>
                    <div className="flex gap-6 items-center">
                        <h3 className="sm:text-3xl text-2xl">{features[0]}</h3><span className="text-lg text-gray-500"></span>
                    </div>
                    <hr className="w-10/12 " />
                    <div className="flex gap-6 items-center">
                        <h3 className="sm:text-3xl text-2xl">{features[1]}</h3><span className="text-lg text-gray-500"></span>
                    </div>
                </div>
                <p className="w-full pr-6 text-sm font-semibold mt-4 md:text-left text-justify" style={questrial.style}>{description}</p>
                <div className="border-b-[1px] w-full sm:w-1/2 py-2 px-0 sm:px-1 flex justify-between border-black ">
                    <button style={space_grotesk.style} className="text-gray-400 text-sm ">READ MORE</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></div>
            </div>
            <div className="md:h-[90vh] h-[60vh] w-full md:w-1/2 flex justify-center items-center">
                <Image width={500} height={500} src={product} alt="product-1" className="w-full object-cover" />
            </div>
        </div>
    )
}