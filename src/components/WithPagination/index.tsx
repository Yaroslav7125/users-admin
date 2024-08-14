import { useAppDispatch } from '@/hooks';
import { RootState } from '@/store';
import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CustomPagination } from './Pagination';
import { decrementPage, incrementPage } from '@/store/features/paginationSlice';

export const withPagination = <T extends object>(Component1: (props: T) => ReactNode) => {
  const WrappedComponent = (props: T) => {
    const dispatch = useAppDispatch();

    return (
      <section className="relative flex h-full flex-col overflow-y-auto overflow-x-hidden">
        <Component1 {...props}></Component1>
        <CustomPagination onNext={() => dispatch(incrementPage())} onPrevious={() => dispatch(decrementPage())} />
      </section>
    );
  };
  return WrappedComponent;
};
