import React from 'react';
import { UserData } from '@/types/UserDataType';
import UserCard from './UserCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface UserCardCarouselProps {
  users: UserData[];
}

const UserCardCarousel: React.FC<UserCardCarouselProps> = ({ users }) => {
  return (
    <div className="relative w-full">
      <div className="max-w-xl relative mx-auto w-full">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="relative">
          {users?.map((user) => (
            <SwiperSlide key={user.id}>
              <UserCard user={user} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ChevronLeft className="swiper-button-prev absolute text-white rounded-full -left-6 top-1/2 z-10 -translate-y-1/2" />
      <ChevronRight className="swiper-button-next absolute text-white rounded-full -right-16 top-1/2 z-10 -translate-y-1/2" />
    </div>
  );
};

export default UserCardCarousel;
