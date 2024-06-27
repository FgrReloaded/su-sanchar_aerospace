import { oswald, space_grotesk, questrial, jura } from "../../fonts";


export const metadata = {
    title: "Contact | Su-Sanchar",
    description: "We are aerospace company specializing in Defense",
};



export default function Page() {
    return (
    <>
        <main className="my-40 px-8 sm:px-20">
            <h1 style={questrial.style} className="text-4xl sm:text-8xl pb-8">Get in Touch</h1>
            <p className="text-sm w-full text-justify sm:w-2/5 px-2" style={space_grotesk.style}>REACH OUT, SHARE A QUESTION OR PROVIDE FEEDBACK ON OUR PRODUCTS. FILL OUT THE FORM AND WE’LL RESPOND AS SOON AS POSSIBLE. </p>
            <div className="mt-20 ml-auto w-full md:w-3/5" style={questrial.style}>
                <div className="flex gap-4">
                    <div className="w-1/2 flex flex-col gap-2">
                        <label className="text-xs text-[#636363]">First name  *</label>
                        <input type="text" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]"/>
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                        <label className="text-xs text-[#636363]">Last name  *</label>
                        <input type="text" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]"/>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-xs text-[#636363]">Email  *</label>
                        <input type="email" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]"/>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-xs text-[#636363]">Organization</label>
                        <input type="text" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]"/>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-xs text-[#636363]">Type of inquiry  *</label>
                        <input type="text" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]"/>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-xs text-[#636363]">Message</label>
                        <textarea placeholder="Write your message here" type="text" rows={5} className="w-full border-[1px] text-xs border-black py-1 px-2 rounded-lg outline-none text-[#636363]"></textarea>
                    </div>
                </div>
                <button style={space_grotesk.style} className="bg-black mt-8 text-white py-2 text-sm px-4 rounded-full w-2/5 transition-all border-black border-[1px] hover:text-black hover:bg-white">SEND</button>

            </div>
        </main>
    </>
)};