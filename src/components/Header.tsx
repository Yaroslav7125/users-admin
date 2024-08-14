import { FC } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAppDispatch } from '@/hooks';
import { revertTab } from '@/store/features/displayTabsSlice';

const Header: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-medium leading-10">Список пользователей</h1>
      <Tabs defaultValue="account" onValueChange={() => dispatch(revertTab())}>
        <TabsList>
          <TabsTrigger value="account">Таблица</TabsTrigger>
          <TabsTrigger value="password">Карточка</TabsTrigger>
        </TabsList>
      </Tabs>
    </header>
  );
};

export default Header;
