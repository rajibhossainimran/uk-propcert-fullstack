import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Contact = () => {
    return (
        <div>
            <div className="relative w-full top-14 mb-10">

                <img
                    src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/2024/01/109-ai-PROCERT-1ST-SHOOT-low-REZ-2.jpg"
                    alt="Overlay Image" className="w-full h-[500px] object-cover"
                />


                <div className="absolute inset-0 bg-black opacity-20"></div>


                <div className="absolute inset-0 flex flex-col items-start justify-center  text-white  px-4 text-center leading-relaxed">
                </div>
            </div>
            <div className='flex justify-center items-center gap-16 p-16 flex-col md:flex-row '>
                <div className='flex flex-col justify-center align-middle items-center'>
                    <MdEmail className='text-[80px] text-lime-700' />
                    <h1 className='text-3xl text-lime-700 font-bold py-5'>rajibhossainimran@gmail.com</h1>
                    <p className='text-xl'>Email us or use the contact form below</p>
                </div>
                <div className='flex flex-col justify-center align-middle items-center'>
                    <IoCall className='text-[80px] text-lime-700' />
                    <h1 className='text-3xl text-lime-700 font-bold py-5'>01752477208</h1>
                    <p className='text-xl'>Lines are open 8am - 6pm Monday - Thursday
                        8am - 5:30pm Fridays</p>
                </div>
            </div>
            {/* contact form part start  */}
            <div className='flex md:flex-row flex-col items-center align-middle w-[90%] mx-auto'>
            <div class="p-4 mx-auto w-full bg-white font-[sans-serif] mt-10 mb-14">
                <h1 class="text-4xl text-lime-800 font-bold text-center">Contact us</h1>
                <form class="mt-8 space-y-4 flex flex-col">
                    <input type='text' placeholder='Name'
                        class="w-full  px-4 text-gray-800 bg-gray-100 border border-lime-500 py-4 text-xl focus:border-black focus:bg-transparent  outline-none transition-all" />
                    <input type='email' placeholder='Email'
                        class="w-full border-lime-500 py-4 text-xl  px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent outline-none transition-all" />
                    <input type='text' placeholder='Subject'
                        class="w-full  px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent  outline-none transition-all border-lime-500 py-4 text-xl" />
                    <textarea placeholder='Message' rows="4"
                        class="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent  pt-3 outline-none transition-all border-lime-500 py-4 text-xl"></textarea>
                    <button type='button'
                        class="text-white bg-lime-700 hover:bg-lime-500 tracking-wide text-xl px-4 w-1/4 outline-none text-center py-3 mx-auto">Send</button>
                </form>
            </div>
            <div className='w-full'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.770425877172!2d90.3748344!3d23.802855199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1738994051199!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>



        </div>
    );
};

export default Contact;