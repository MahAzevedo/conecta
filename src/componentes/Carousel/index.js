import Swiper from 'swiper';

import './Carousel.css';

import './swiper/css';
import { SwiperSlide } from 'swiper/react';


const Carousel = () => {
    return (
        <Swiper className='carousel-swiper'>
            <SwiperSlide className="slide-item">
                <></>
            </SwiperSlide>


            <div >
                <section className='section-carousel'>
                    <div className='carousel-container'>
                        <p className='container-texto1'>
                            “Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Etiam
                            commodo hendrerit.”
                        </p>
                        <p className='container-texto2'>
                            @danielmaciel
                        </p>
                        <p>
                            paginas do carrossel
                        </p>
                    </div>
                </section>
            </div>
        </Swiper>
    );
}

export default Carousel;
