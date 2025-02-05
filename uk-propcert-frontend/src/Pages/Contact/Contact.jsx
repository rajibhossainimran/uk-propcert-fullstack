import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="relative w-full h-full top-14">
                {/* Background Image */}
                <img
                    src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/2024/01/109-ai-PROCERT-1ST-SHOOT-low-REZ-2.jpg"
                    alt="Overlay Image" className="w-full h-[500px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-20"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-center  text-white  px-4 text-center leading-relaxed">
                </div>
            </div>
            


        </div>
    );
};

export default Contact;