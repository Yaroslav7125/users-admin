import { useAppSelector } from '@/hooks';
import { FC } from 'react';
import DataTable from '@/components/Table/Table';
import { columns } from '@/components/Table/columns';
import { CardList } from '@/components/CardList';

interface UsersDisplay {}

export const UsersDisplay: FC = () => {
  const tabs = useAppSelector((state) => state.displayTab);
  const users = useAppSelector((state) => state.users.entities);

  return (
    <div className="grow pb-2">
      {tabs === 'TABLE' ? <DataTable columns={columns} data={users || []}></DataTable> : <CardList />}
    </div>
  );
};
