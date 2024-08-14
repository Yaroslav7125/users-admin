import { User } from '@/store/features/usersSlice/types';
import React, { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { formatAddress } from '@/lib/utils';
import { Loader } from '../Loader';

interface UserCardProps {
  user: User;
}

const userInfoItemClassName = 'flex flex-col gap-1';

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div onClick={() => console.log(user)} className="rounded-lg border-2 border-gray-100 bg-white p-4">
      <div className="mb-2 flex items-center gap-2 rounded-lg bg-gray-100 p-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user.picture.medium} alt="@shadcn" />
          <AvatarFallback>
            <Loader></Loader>
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-medium text-blue-600">
            {user.name.first} {user.name.last}
          </h1>
          <span className="text-sm text-gray-500">{user.login.username}</span>
        </div>
      </div>
      <div className={userInfoItemClassName}>
        <span className="text-sm font-medium text-gray-500">Адрес</span>
        <address className="text-wrap text-base">{formatAddress(user.location)}</address>
      </div>
      <Separator className="my-2" />
      <div className={userInfoItemClassName}>
        <span className="text-sm font-medium text-gray-500">Телефон</span>
        <a href={`tel:8${user.phone}`} className="text-base">
          8 {user.phone}
        </a>
      </div>
      <Separator className="my-2" />
      <div className={userInfoItemClassName}>
        <span className="text-sm font-medium text-gray-500">E-mail</span>
        <a className="text-base" href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </div>
    </div>
  );
};
