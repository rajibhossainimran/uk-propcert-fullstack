import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Popularplace from '../../Component/Popularplace';

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
                    <div className="relative">
                        <img src="https://i.ibb.co/TBtdYr4T/slide-00.jpg" alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/WNS6T9Zv/slide-02.jpg" alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co.com/gLdHjf0p/Veedo-Slider-1-1.jpg" alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div>
                <Popularplace></Popularplace>
            </div>
        </div>
    );
};

export default Home;
