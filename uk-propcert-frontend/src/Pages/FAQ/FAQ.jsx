import React from 'react';
import FAQTabs from '../../Component/FAQtabs';

const FAQ = () => {
    return (
        <div>
            <div className="relative w-full h-full top-14">
                <img
                    src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/2024/01/FAQ_2-scaled.jpg"
                    alt="Overlay Image"

                    className=' '
                />

                <div className="absolute inset-0 bg-black opacity-20"></div>

           
                <div className="absolute inset-0 flex flex-col items-start justify-center  text-white  px-4 text-center leading-relaxed">
                    <h1 className="text-5xl md:text-[70px] font-bold mb-4" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
                    >Frequently <br /> asked questions</h1>


                </div>
            </div>
            <div className='mt-20'>
            <FAQTabs></FAQTabs>
            </div>
        </div>
    );
};

export default FAQ;