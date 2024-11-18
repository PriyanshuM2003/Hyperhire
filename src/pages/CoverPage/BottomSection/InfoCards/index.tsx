import { CodeIcon, KORIcon, RightArrowIcon, SettingsIcon, UserIcon } from '@/icons';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface InfoCardData {
  id: number;
  icon: JSX.Element;
  name: string;
}

const infos: InfoCardData[] = [
  { id: 1, icon: <CodeIcon />, name: '해외 개발자 원격 채용' },
  { id: 2, icon: <UserIcon />, name: '외국인 원격 채용 (비개발)' },
  { id: 3, icon: <KORIcon />, name: '한국어 가능 외국인 채용' },
  { id: 4, icon: <SettingsIcon />, name: '해외 개발자 활용 서비스' },
];
const InfoCards = () => {
  return (
    <div className="flex items-center max-xl:flex-wrap gap-4">
      {infos.map((info) => (
        <Card key={info.id} className="w-48 rounded-xl">
          <CardHeader className="p-4">
            <CardTitle>{info.icon}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm font-semibold text-[#343741]">{info.name}</p>
          </CardContent>
          <CardFooter className="gap-2 p-4 pt-0">
            <p className="text-sm font-semibold text-[#5E626F]">바로가기</p>
            <RightArrowIcon />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default InfoCards;
