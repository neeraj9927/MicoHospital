import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Testamonils = () => {
  return (
    <>
<div className="container py-5">
    <h1 className='text-center' style={{color:'#00C6A9'}}>TESTIMONIAL</h1>
    <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={true}
          modules={[Autoplay,Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="row py-2">
                <h3 className='text-center' style={{color:'#00C6A9'}}>Rochak</h3>
                <p className='text-center' style={{color:'#666b6a'}}>Default model text</p>
                <p className='text-center' style={{padding:'0 60px'}}>Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row py-2">
                <h3 className='text-center' style={{color:'#00C6A9'}}>Brad Johns</h3>
                <p className='text-center' style={{color:'#666b6a'}}>Default model text</p>
                <p className='text-center' style={{padding:'0 60px'}}>Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row py-2">
                <h3 className='text-center' style={{color:'#00C6A9'}}>Morijorch</h3>
                <p className='text-center' style={{color:'#666b6a'}}>Default model text</p>
                <p className='text-center' style={{padding:'0 60px'}}>editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various</p>
            </div>
          </SwiperSlide>
        </Swiper>
</div>
    </>
  )
}

export default Testamonils
