
import { Autoplay, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Popularplace = () => {
    return (
        <div>
            <div className='mt-14'>
                <div className='text-center'>
                    <h2 className="py-12 text-5xl font-semibold text-lime-700 mb-8 text-center" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
                        Our accreditations
                    </h2>
                </div>
                <div className='px-40 mb-10'>
                    <div className=' w-full flex justify-center align-middle items-center'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2000,

                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className='w-[150px] h-[150px]'>
                                    <img src="https://www.propcert.co.uk/wp-content/uploads/2023/10/hies-cc-logo-2.png" alt="" className='w-full h-full' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[150px] h-[150px]'>
                                    <img src="https://www.propcert.co.uk/wp-content/uploads/2023/10/NAPIT-Logo-18.jpg" alt="" className='w-full h-full' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[150px] h-[150px]'>
                                    <img src="https://www.propcert.co.uk/wp-content/uploads/2023/09/Screenshot-2023-09-19-at-10.11.04.png" alt="" className='w-full h-full' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[150px] h-[150px]'>
                                    <img src="https://www.propcert.co.uk/wp-content/uploads/2023/10/channels4_profile.jpg" alt="" className='w-full h-full' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[150px] h-[150px]'>
                                    <img src="https://www.propcert.co.uk/wp-content/uploads/2023/09/NIC-EIC-Logo.svg" alt="" className='w-full h-full' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[150px] h-[150px]'>
                                    <img src="https://www.propcert.co.uk/wp-content/uploads/2023/09/Gas-Safe-Logo.svg" alt="" className='w-full h-full' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[150px] h-[150px]'>
                                    <img src="https://www.propcert.co.uk/wp-content/uploads/2023/10/Qualitymark-Protection-Accredited-Installer-Logo.png" alt="" className='w-full h-full' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popularplace;