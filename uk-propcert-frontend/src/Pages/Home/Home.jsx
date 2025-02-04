import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Popularplace from '../../Component/Popularplace';
import Features from '../../Component/Features';
import MostPopular from '../../Component/MostPopular';
import ServiceTabs from '../../Component/ServiceTabs';
import StatsSection from '../../Component/StatsSection';
import HowItWorks from '../../Component/HowItWorks';
import FeaturedBlog from '../../Component/FeaturedBlog';

const Home = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                effect="fade"
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative w-full h-full top-14">
                        {/* Background Image */}
                        <img
                            src="https://www.propcert.co.uk/wp-content/uploads/2024/01/hero-bg.jpg"
                            alt="Overlay Image"
                            style={{ height: "700px", maxHeight: "700px", minHeight: "600px" }}

                            // className="w-full h-[600px]  "
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-60"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-start justify-start  text-white  px-4 text-start mt-20">
                            <h1 className="text-5xl md:text-[70px] font-bold mb-4"     style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
                            >Your one-stop shop for <br />
                            property certification</h1>
                            <p className="text-2xl md:text-4xl mb-6 mt-4" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}>
                            Fast, friendly and fully accredited services
                            </p>
                            <button className="bg-lime-700 hover:bg-lime-600 text-white font-semibold px-6 py-3 shadow-md transition rounded-3xl mt-8">
                                Get an instant quote
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative w-full h-full top-14">
                        {/* Background Image */}
                        <img
                            src="https://www.propcert.co.uk/wp-content/uploads/2024/01/272-ai-PROCERT-1ST-SHOOT-low-REZ-1.jpg"
                            alt="Overlay Image"
                            style={{ height: "700px", maxHeight: "700px", minHeight: "600px" }}

                            // className="w-full h-[600px]  "
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-60"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-start justify-start  text-white  px-4 text-start mt-20">
                            <h1 className="text-5xl md:text-[70px] font-bold mb-4"     style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
                            >Affordable pricine <br /> exceptional quality</h1>
                            <p className="text-2xl md:text-4xl mb-6 mt-4" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}>
                            Achieving compliance made simple
                            </p>
                            <button className="bg-lime-700 hover:bg-lime-600 text-white font-semibold px-6 py-3 shadow-md transition rounded-3xl mt-8">
                                Get an instant quote
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative w-full h-full top-14">
                        {/* Background Image */}
                        <img
                            src="https://cdn-gomlann.nitrocdn.com/wpmcSMBdIEhoNpEMKfsZwxDMFqniqTMp/assets/images/optimized/rev-119317a/www.propcert.co.uk/wp-content/uploads/elementor/thumbs/261-ai-PROCERT-1ST-SHOOT-low-REZ-1-qis9wx4n5yr3sse67c72712t1t3wyd3vvqckw37jao.jpg"
                            style={{ height: "700px", maxHeight: "700px", minHeight: "600px" }}

                            // className="w-full h-[600px]  "
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-60"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-start justify-start  text-white  px-4 text-start mt-20">
                            <h1 className="text-5xl md:text-[70px] font-bold mb-4"     style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
                            >Reliable service , <br /> You can trust</h1>
                            <p className="text-2xl md:text-4xl mb-6 mt-4" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}>
                            Accurate cartification at your fingertips.
                            </p>
                            <button className="bg-lime-700 hover:bg-lime-600 text-white font-semibold px-6 py-3 shadow-md transition rounded-3xl mt-8">
                                Get an instant quote
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div>
                <Features></Features>
            </div>
            <div>
                <MostPopular></MostPopular>
            </div>
            <div>
                <ServiceTabs></ServiceTabs>
            </div>
            <div>
                <HowItWorks></HowItWorks>
            </div>
            <div>
                <StatsSection></StatsSection>
            </div>
            <div>
                <Popularplace></Popularplace>
            </div>
            <div>
                <FeaturedBlog></FeaturedBlog>
            </div>
        </div>
    );
};

export default Home;
