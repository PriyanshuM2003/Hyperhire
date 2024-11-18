'use client';
import React, { useState } from 'react';
import { HyperHireWhiteIcon } from '@/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('채용');
  return (
    <div className="xl:flex xl:items-center xl:justify-between p-2 text-white">
      <div className="flex items-center gap-2">
        <HyperHireWhiteIcon />
        <h3>hyperhire</h3>
      </div>
      <div className="flex items-center gap-8 max-xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-4">
            <span>{selectedMenuItem}</span> <ChevronDown size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedMenuItem('채용')}>채용</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedMenuItem('해외 개발자 원격 채용')}>
              해외 개발자 원격 채용
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedMenuItem('외국인 원격 채용 (비개발 직군)')}>
              외국인 원격 채용 (비개발 직군)
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSelectedMenuItem('한국어 가능 외국인 채용')}>
              한국어 가능 외국인 채용
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <h3>해외 개발자 활용 서비스</h3>
      </div>
      <Button className="text-[#4A77FF] max-xl:hidden " size={'sm'} variant={'secondary'}>
        문의하기
      </Button>
    </div>
  );
};

export default Navbar;
