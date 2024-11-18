import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ChipCardProps {
  chip: {
    id: number;
    icon: JSX.Element;
    name: string;
  };
}

const ChipCard: React.FC<ChipCardProps> = ({ chip }) => {
  return (
    <Card className="bg-white/20 border-none max-h-min w-72">
      <CardContent className="pt-4 p-4 flex items-center gap-4 text-white">
        {chip.icon}
        <p>{chip.name}</p>
      </CardContent>
    </Card>
  );
};

export default ChipCard;
