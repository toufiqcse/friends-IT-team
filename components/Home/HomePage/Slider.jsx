import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='main border border-all'>
                        <Image
                            src={'/web-dev.webp'}
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                width: "auto",
                                height: "auto"
                            }}
                            width={700}
                            height={780}
                            priority={true}

                            key={`image`}
                            alt='web-dev-slider'

                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='main border border-all'>
                        <Image
                            src={'/wordpress-slide.png'}
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                width: "auto",
                                height: "auto"
                            }}
                            width={700}
                            height={780}
                            priority={true}

                            key={`image`}
                            alt='web-dev-slider'

                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='main border border-all'>
                        <Image
                            src={'/dm.webp'}
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                width: "auto",
                                height: "auto"
                            }}
                            width={700}
                            height={780}
                            priority={true}

                            key={`image`}
                            alt='web-dev-slider'

                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='main border border-all'>
                        <Image
                            src={'/seo.png'}
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                width: "auto",
                                height: "auto"
                            }}
                            width={700}
                            height={780}
                            priority={true}

                            key={`image`}
                            alt='web-dev-slider'

                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='main border border-all'>
                        <Image
                            src={'/web-analyst.png'}
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                width: "auto",
                                height: "auto"
                            }}
                            width={700}
                            height={780}
                            priority={true}

                            key={`image`}
                            alt='web-dev-slider'

                        />
                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
