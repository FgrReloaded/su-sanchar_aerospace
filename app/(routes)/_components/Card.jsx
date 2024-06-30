import Image from "next/image";
import { space_grotesk, questrial } from "../../fonts";



export const Card = ({ title, description, refernce, className, product }) => {


    const showTooltip = (e) =>{
        const tooltip = e.target.nextElementSibling;
        // tooltip.classList.toggle("hidden");
    }

    return (
        <div ref={refernce} className={`flex justify-center px-10 rounded-3xl md:flex-row flex-col bg-white ${className}`} style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
            <div className="relative w-[0.5px] mx-auto">
                <div className="h-4/5 bg-[#c2c2c2] absolute left-0 top-0 w-[0.5px] mx-auto"></div>
                <div className="h-1/5 bg-black w-[0.5px] absolute left-0 top-0"></div>
            </div>
            <div className="flex flex-col justify-center gap-8 md:w-1/2 pl-6 sm:pl-16 w-full py-12 md:py-0">
                <p className="text-xl" style={space_grotesk.style}>{title}</p>
                <div className="flex flex-col gap-4" style={questrial.style}>
                    <div className="w-3/5 text-gray-500 flex gap-10 items-center">
                        <div className="w-2/5 relative">
                            <svg onClick={showTooltip} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M11.0001 14V11H13.0001V14H18.0001C18.5524 14 19.0001 14.4477 19.0001 15V21C19.0001 21.5523 18.5524 22 18.0001 22H6.00015C5.44786 22 5.00015 21.5523 5.00015 21V15C5.00015 14.4477 5.44786 14 6.00015 14H11.0001ZM2.51074 8.83686C3.83432 4.86424 7.58275 2 12.0001 2C16.4176 2 20.166 4.86424 21.4896 8.83686L19.5917 9.46949C18.5328 6.29139 15.5341 4 12.0001 4C8.46623 4 5.46749 6.29139 4.40862 9.46949L2.51074 8.83686ZM6.3065 10.1021C7.10065 7.71854 9.34971 6 12.0001 6C14.6506 6 16.8996 7.71854 17.6938 10.1021L15.7959 10.7347C15.2665 9.1457 13.7671 8 12.0001 8C10.2332 8 8.73382 9.1457 8.20439 10.7347L6.3065 10.1021ZM7.00015 16V20H17.0001V16H7.00015Z"></path></svg>
                            <span className="hidden absolute left-1/2 -translate-x-1/2 text-sm whitespace-nowrap bg-black py-2 px-4 rounded-lg text-white">Thermal Imaging</span>
                        </div>
                        <div className="w-2/5 relative">
                            <svg onClick={showTooltip} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 9.46243 8.96243 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 15.5376 15.0376 18 12 18ZM12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z"></path></svg>
                            <span className="hidden absolute -top-[40%] left-1/2 -translate-x-1/2 text-sm whitespace-nowrap bg-black py-2 px-4 rounded-lg text-white">High Resolution Camera</span>
                        </div>
                        <div className="w-2/5 relative">
                            <svg onClick={showTooltip} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                            <span className="hidden absolute left-1/2 -translate-x-1/2 text-sm whitespace-nowrap bg-black py-2 px-4 rounded-lg text-white">Night Vision</span>
                        </div>
                    </div>
                </div>
                <hr className="w-10/12 " />
                <p className="w-full pr-6 text-lg font-semibold mt-2 md:text-left text-justify" style={questrial.style}>
                    {
                        description.map((desc) => {
                            return <span key={desc}>- {desc}<br /></span>
                        })
                    }
                </p>
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