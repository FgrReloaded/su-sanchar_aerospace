import Image from "next/image";
import { space_grotesk, questrial, montserrat } from "../fonts";

export const Footer = () => {
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
                    <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-6">
                        <div>
                            <div>
                                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <span style={montserrat.style} className="self-center text-xl  whitespace-nowrap text-black">SU-SANCHAR</span>
                                    <Image width={100} height={100} src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                                </a>
                            </div>

                            <ul className="mt-8 flex gap-6">
                                <li>
                                    <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75" >
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">Instagram</span>

                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
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

                        <div className="flex gap-8 sm:gap-20 w-full sm:w-3/5 justify-center sm:justify-end text-center flex-wrap">
                            <div className="w-[30vw] sm:w-1/4">
                                <p className="font-medium text-gray-900" style={space_grotesk.style}>COMPANY</p>

                                <ul className="mt-6 space-y-4 text-xs sm:text-sm" style={questrial.style}>
                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75">HOME</a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75"> ABOUT </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75"> SERVICES </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75"> CONTACT </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-[30vw] sm:w-1/4">
                                <p className="font-medium text-gray-900" style={space_grotesk.style}>CONTACT</p>

                                <ul className="mt-6 space-y-4 text-xs sm:text-sm" style={questrial.style}>
                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75"> info@su-sanchar.com </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75"> Tel:  +91 1234567890 </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-500 transition hover:opacity-75"> Mathura, Uttar Pradesh, India 281406 </a>
                                    </li>
                                </ul>
                            </div>

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
                        </div>
                    </div>

                    <p style={questrial.style} className="text-sm text-gray-500">&copy;  2024 by SU-SANCHAR AEROSPACE.</p>
                </div>

            </div>
        </footer>
    );
}