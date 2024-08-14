import {
  Pagination,
  PaginationContent,
  //   PaginationEllipsis,
  PaginationItem,
  //   PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { FC } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LimitType, PAGINATION_LIMIT_OPTION, setLimit } from '@/store/features/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

interface CustomPaginationProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const CustomPagination: FC<CustomPaginationProps> = ({ onNext, onPrevious }) => {
  const limitValue = useAppSelector((state) => state.pagination.limit);
  const dispatch = useAppDispatch();

  return (
    // TODO переделать на изменение по адресной строке useLocation || useParams

    <Pagination className="sticky bottom-0 flex h-14 flex-shrink-0 justify-between rounded-lg bg-gray-300/30 px-3 backdrop-blur-md">
      <div className="flex items-center gap-6">
        <span className="whitespace-nowrap text-sm">Показывать 🚀 по:</span>
        <Select onValueChange={(val) => dispatch(setLimit(val as LimitType))} value={limitValue}>
          <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {PAGINATION_LIMIT_OPTION.map((elm) => {
              return (
                <SelectItem key={elm} value={`${elm}`}>
                  {elm}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={onPrevious} href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={onNext} href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
