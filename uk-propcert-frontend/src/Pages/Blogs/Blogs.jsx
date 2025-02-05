import React from 'react';
import FeaturedBlog from '../../Component/FeaturedBlog';

const Blogs = () => {
    return (
        <div>
            <div className="relative w-full h-full top-14">
                {/* Background Image */}
                <img
                    src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/2024/01/Blog-scaled.jpg"
                    alt="Overlay Image"

                    className=' '

                // className="w-full h-[600px]  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-20"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-center  text-white  px-4 text-center leading-relaxed">
                    <h1 className="text-5xl md:text-[70px] font-bold mb-4" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
                    >News, insights <br /> and analysis</h1>


                </div>
            </div>
            <div>
                <FeaturedBlog></FeaturedBlog>
            </div>
            <div className='text-center'>
            <button className="mt-4 bg-lime-600 hover:bg-lime-700 text-white font-semibold py-5 mb-10 px-4 rounded-full transition w-1/3 md:w-1/5">
            Show more blogs
          </button>
            </div>
        </div>
    );
};

export default Blogs;