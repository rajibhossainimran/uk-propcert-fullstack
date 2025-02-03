
import { Pagination } from 'swiper/modules';
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
                    <p className='py-1  m-auto rounded-full w-[140px] bg-[#ffeeeb] text-[#ff6d52] mb-3 font-medium text-base'>Popular Place</p>
                    <h2 className='font-bold text-4xl mb-5'>Find Places To Stay Nearby</h2>
                    <p className='text-[#808080] font-medium mb-10'>Highlight the best of your properties by using the List Category shortcode. You <br /> can list specific properties categories, types, cities, areas.</p>
                </div>
                <div className='px-40 mb-10'>
                    <div className='h-20 w-full'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
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
                        modules={[Pagination]}
                        className="mySwiper">
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-01.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-02.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-03.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-03 (1).png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-04.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-05 (1).png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-06 (1).png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-05.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../assets/popular-place-02.png" alt="" />
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