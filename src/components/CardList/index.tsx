import { useAppSelector } from '@/hooks';
import { FC } from 'react';
import { UserCard } from '../UserCard';

export const CardList: FC = () => {
  const users = useAppSelector((state) => state.users.entities);
  // @NOTE media-queries responsibility variant is sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
  return (
    <div className="grid grow grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
      {users.map((userItem) => (
        <UserCard key={userItem.login.md5} user={userItem} />
      ))}
    </div>
  );
};
