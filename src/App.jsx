import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import Jpsd from './component/Jpsd';
import About from './component/About';
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';

function App() {
  useEffect(() => {
    // Change page title
    document.title = "JPSD";

    // Change favicon
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.href = '/path/to/icon.png';
    }
  }, []);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      let caption;
      index==0? caption='Introduction':'';
      index==1? caption='About':'';
      index==2? caption='Resume':'';
      index==3? caption='Portfolio':'';
      return '<span class="' + className +  ' rounded pl-2 pr-2"><b>' + caption + '</b></span>';
    },
  };
  return (
    <div className="container-fluid mt-1 text-black">
      <Swiper pagination={pagination} navigation={true} grabCursor={true} modules={[ Navigation, Pagination]} className="mySwiper pr-0">
        <SwiperSlide className='bg-light swiper1'>
            <Jpsd />
        </SwiperSlide>
        <SwiperSlide className='bg-black pr-0 mr-0 pb-5'>
           <About className="pb-5" />
        </SwiperSlide>
        <SwiperSlide className='bg-black pr-0 mr-0 pb-5'>
          <Resume className="mb-2"/>
        </SwiperSlide>
        <SwiperSlide className='bg-black pr-0 mr-0 pb-5'>
          <Portfolio />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide> */}
      </Swiper>
      <div className="credits">
        Framework <a href="https://vitejs.dev/" target='_blank'>Vite+ReactJS</a> & <a href="https://bootstrapmade.com/" target='_blank'>Bootstrap</a> <span className='poppin'> [ JPSD ]</span>
      </div>
    </div>
  );
}

export default App
