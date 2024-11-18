import { HyperHireColorIcon } from '@/icons';
import React from 'react';
import InfoCards from './InfoCards';

const BottomSection = () => {
  return (
    <div className="lg:px-48 px-8 space-y-6">
      <div className="flex max-xl:items-center max-xl:flex-col max-xl:gap-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <HyperHireColorIcon />
            <p className="font-semibold text-xl">hyperhire</p>
          </div>
          <p className="font-semibold">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
          <p className="text-sm text-[#5E626F] font-bold">010-0000-0000</p>
          <p className="text-sm text-[#5E626F] font-bold">aaaaa@naver.com</p>
        </div>
        <InfoCards />
      </div>
      <div className="flex max-2xl:justify-between max-xl:flex-col space-y-6">
        <div className="space-y-2 text-sm">
          <h4 className="text-[#343741] font-bold">상호명</h4>
          <p className="text-[#5E626F] font-semibold">하이퍼하이어</p>
          <p className="font-bold text-[#5E626F]">Hyperhire India Private Limited</p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="text-[#343741] font-bold">대표 CEO</h4>
          <p className="text-[#5E626F] font-semibold">김주현</p>
          <p className="font-bold text-[#5E626F]">Juhyun Kim</p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="text-[#343741] font-bold">사업자등록번호 CIN</h4>
          <p className="font-bold text-[#5E626F]">427-86-01187</p>
          <p className="font-bold text-[#5E626F]">U74110DL2016PTC290812 </p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="text-[#343741] font-bold">주소 ADDRESS</h4>
          <p className="text-[#5E626F] font-semibold">서울특별시 강남대로 479, 지하 1층 238호 </p>
          <p className="font-bold text-[#5E626F]">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
          </p>
        </div>
      </div>
      <p className="text-sm font-bold text-[#5E626F]">ⓒ 2023 Hyperhire</p>
    </div>
  );
};

export default BottomSection;
