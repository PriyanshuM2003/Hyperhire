import React from 'react';
import ChipCard from './ChipCard';
import { ComputerWatchIcon, CubeIcon, GalleryIcon, PhoneCallIcon, TargetStarIcon } from '@/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
interface ChipData {
  id: number;
  icon: JSX.Element;
  name: string;
}

const chips: ChipData[] = [
  { id: 1, icon: <ComputerWatchIcon />, name: '해외 마케팅' },
  { id: 2, icon: <GalleryIcon />, name: '퍼블리셔' },
  { id: 3, icon: <CubeIcon />, name: '캐드원(제도사)' },
  { id: 4, icon: <TargetStarIcon />, name: '해외 세일즈' },
  { id: 5, icon: <PhoneCallIcon />, name: '해외 CS' },
];

const ChipCardCarousel = () => {
  return (
    <div className="pl-48">
      <Swiper
        spaceBetween={4}
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}>
        {chips.map((chip) => (
          <SwiperSlide key={chip.id}>
            <ChipCard chip={chip} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChipCardCarousel;
