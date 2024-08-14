// import './App.css'
// import { Button } from '@/components/ui/button'

import Header from '@/components/Header';
('@/components/Table');

import { useEffect } from 'react';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import { fetchUsers } from './store/features/usersSlice';
import { useAppDispatch } from './hooks';
import { withPagination } from './components/WithPagination';
import { UsersDisplay } from './components/UsersDisplay';

const WrappedComponent = withPagination(UsersDisplay);

function App() {
  const pagination = useSelector((state: RootState) => state.pagination);
  const userMetaData = useSelector((state: RootState) => state.users.metaInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page: pagination.page, pageSize: pagination.limit, seed: userMetaData?.seed }));
  }, [pagination]);

  return (
    <div className="flex h-full flex-col gap-4 bg-gray-200 p-8">
      <Header />
      <WrappedComponent />
    </div>
  );
}

export default App;
