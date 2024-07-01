"use client"

import { useRef, useState } from "react";
import { oswald, space_grotesk, questrial, jura } from "../../fonts";



export default function Page() {
    const toastRef = useRef(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        organization: "",
        inquiryType: "",
        message: "",
    })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.textContent = "Submitting...";
        try {
            const response = await fetch('/api/contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                alert('Form submitted successfully.');
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    organization: "",
                    inquiryType: "",
                    message: "",
                });
            } else {
                alert('Error submitting form');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form');
        } finally {
            e.target.textContent = "SEND";
        }
    }

    const alert = () => {
        const toast = toastRef.current;
        toast.classList.toggle('invisible');
        toast.classList.toggle('opacity-0');
        setTimeout(() => {
            const invisible = toast.classList.contains('invisible');
            if (!invisible) {
                toast.classList.add('invisible');
                toast.classList.add('opacity-0');
            }
        }, 2500);

    };


    return (
        <>
            <main className="my-40 px-8 sm:px-20">
                <div ref={toastRef} id="toast-success" className="fixed bottom-[2.5vh] opacity-0 invisible left-[2.5vw] flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow transition-all" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">Form Submitted Successfully.</div>
                    <button onClick={alert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#toast-success" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <h1 style={questrial.style} className="text-4xl sm:text-8xl pb-8">Get in Touch</h1>
                <p className="text-sm w-full text-justify sm:w-2/5 px-2" style={space_grotesk.style}>REACH OUT, SHARE A QUESTION OR PROVIDE FEEDBACK ON OUR PRODUCTS. FILL OUT THE FORM AND WE’LL RESPOND AS SOON AS POSSIBLE. </p>
                <div className="mt-20 ml-auto w-full md:w-3/5" style={questrial.style}>
                    <div className="flex gap-4">
                        <div className="w-1/2 flex flex-col gap-2">
                            <label className="text-xs text-[#636363]">First name  *</label>
                            <input onChange={handleChange} name="firstName" value={formData.firstName} type="text" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]" />
                        </div>
                        <div className="w-1/2 flex flex-col gap-2">
                            <label className="text-xs text-[#636363]">Last name  *</label>
                            <input onChange={handleChange} name="lastName" value={formData.lastName} type="text" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]" />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xs text-[#636363]">Phone  *</label>
                            <input onChange={handleChange} name="phone" value={formData.phone} type="number" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]" />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xs text-[#636363]">Email  *</label>
                            <input onChange={handleChange} name="email" value={formData.email} type="email" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]" />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xs text-[#636363]">Organization</label>
                            <input onChange={handleChange} name="organization" value={formData.organization} type="text" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]" />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xs text-[#636363]">Type of inquiry  *</label>
                            <input onChange={handleChange} name="inquiryType" value={formData.inquiryType} type="text" className="w-full border-[1px] border-black py-1 px-2 rounded-lg outline-none text-[#636363]" />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-xs text-[#636363]">Message</label>
                            <textarea onChange={handleChange} name="message" value={formData.message} placeholder="Write your message here" type="text" rows={5} className="w-full border-[1px] text-xs border-black py-1 px-2 rounded-lg outline-none text-[#636363]"></textarea>
                        </div>
                    </div>
                    <button onClick={handleSubmit} style={space_grotesk.style} className="bg-black mt-8 text-white py-2 text-sm px-4 rounded-full w-2/5 transition-all border-black border-[1px] hover:text-black hover:bg-white">SEND</button>

                </div>
            </main>
        </>
    )
};