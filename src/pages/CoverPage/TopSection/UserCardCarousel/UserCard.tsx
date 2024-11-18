import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { UserData } from '@/types/UserDataType';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DollarIcon } from '@/icons';

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  console.log(user);
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Card key={user?.id} className="max-h-min w-full max-w-72">
              <CardHeader className="items-center">
                <div className="relative">
                  <div className="relative h-20 w-20">
                    <Image
                      src={user?.profileImage}
                      alt={`${user?.name}'s profile`}
                      fill
                      className="object-cover h-20 w-20 rounded-full"
                    />
                  </div>
                  <div className="absolute bottom-0 right-2 h-3 w-4">
                    <Image
                      src={user?.countryImage}
                      alt={`${user?.name}'s country`}
                      fill
                      className="object-cover h-3 w-4"
                    />
                  </div>
                </div>
                <CardTitle className="text-lg">{user?.name}</CardTitle>
                <CardDescription className="font-semibold text-[#4A77FF]">{user?.title}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-1 flex-wrap justify-center text-[#5E626F]">
                {user?.skills.map((skill, index) => (
                  <div key={index} className="p-1 px-2 border rounded-md">
                    {skill}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-2">
            <DollarIcon />
            <p className="text-[#00C696]">월 100만원</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default UserCard;
