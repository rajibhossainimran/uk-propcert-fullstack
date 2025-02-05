import React from 'react';

const About = () => {
    return (
        <div>
            <div className="relative w-full h-full top-14">
                {/* Background Image */}
                <img
                    src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/2024/01/About_v3-scaled.jpg"
                    alt="Overlay Image"

                    className=' '

                // className="w-full h-[600px]  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-20"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-center  text-white  px-4 text-center leading-relaxed">
                    <h1 className="text-5xl md:text-[70px] font-bold mb-4" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
                    >About PropCert</h1>


                </div>
            </div>

            {/* section 11111111111 */}
            <div className='p-10'>
                <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center ">
                    {/* Text Section */}
                    <div>
                        <h2 className="text-4xl  text-lime-700 mb-4">Our history</h2>
                        <p className="text-gray-700 mb-4">
                            We are a nationwide provider of property services. With a head office in
                            Beckenham, south London and a northern office in Preston, we manage a UK
                            wide network of energy assessors, electricians, gas engineers and
                            property professionals.
                        </p>
                        <p className="text-gray-700 mb-4">
                            PropCert was established in 2010 to meet the demand for EPCs in the private
                            and public sector. We have evolved into providing other services as we have
                            grown. Our services include Energy Performance Certificates, Electrical
                            Installation Condition Reports, Asbestos Surveys, Fire Risk Assessments and
                            more.
                        </p>
                        <p className="text-gray-700">
                            For a full list of services <a href="#" className="text-lime-600 font-semibold hover:underline">click here</a>.
                        </p>
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/elementor/thumbs/About_1-qj0s9n53gc8qjgk47kbysyxei5xsxqde6u99bit8xc.jpg" // Change this to the correct image path
                            alt="PropCert worker"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* section 222222222222222 */}
            <div className=''>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row  bg-white  overflow-hidden mb-10">
                {/* Left Image Section */}
                <div className="md:w-2/5">
                    <img
                        src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/elementor/thumbs/About-Us-2-qd9ulbkdy4ncn524n6qs0ux9d21fa8bq1w5hzib5v4.jpg"
                        alt="Blog"
                       className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Content Section */}
                <div className="md:w-3/5 p-6 flex flex-col justify-start">
                <h2 className="text-4xl  text-lime-700 mb-4">Our customers</h2>
                    
                    <p className="text-gray-600 mt-3 text-lg">
                        In this comprehensive guide, we will delve into the intricacies of
                        the agreed limitations on EICR, providing valuable insights and
                        information to help you navigate this important aspect of property
                        management effectively.
                    </p>
                   
                </div>
            </div>
            </div>

            {/* section 3333333333333  */}
            <div className='p-10'>
                <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
                    {/* Text Section */}
                    <div>
                    <h2 className="text-4xl  text-lime-700 mb-4">Our services</h2>
                        <p className="text-gray-700 mb-4">
                            We are a nationwide provider of property services. With a head office in
                            Beckenham, south London and a northern office in Preston, we manage a UK
                            wide network of energy assessors, electricians, gas engineers and
                            property professionals.
                        </p>
                        <p className="text-gray-700 mb-4">
                            PropCert was established in 2010 to meet the demand for EPCs in the private
                            and public sector. We have evolved into providing other services as we have
                            grown. Our services include Energy Performance Certificates, Electrical
                            Installation Condition Reports, Asbestos Surveys, Fire Risk Assessments and
                            more.
                        </p>
                        
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/elementor/thumbs/About_2-qj0s9o2xn6a0v2ir22qldgov3jt65fh4iywqssrur4.jpg" // Change this to the correct image path
                            alt="PropCert worker"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* section 4444444  */}
            <div className=''>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row  bg-white  overflow-hidden mb-10 p-10">
                {/* Left Image Section */}
                <div className="md:w-2/5">
                    <img
                        src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/elementor/thumbs/Meet-the-team-qd9uc00069vziclk2noysplpahzdyabjrr95nq4pkg.jpg"
                        alt="Blog"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Content Section */}
                <div className="md:w-3/5 p-6 flex flex-col justify-start">
                <h2 className="text-4xl  text-lime-700 mb-4">Our team</h2>
                    
                    <p className="text-gray-600 mt-3 text-lg">
                    PropCert was established in 2010 by founder Tom. It started out offering EPCs to local estate agents. Since then the company has gone from strength to strength. Adding more services along the way and covering the UK, the team has grown to to over 70..
                    </p>
                   
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;