import { formatAddress } from '@/lib/utils';
import { User } from '@/store/features/usersSlice/types';
import { ColumnDef } from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader } from '../Loader';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Фио',
    cell: ({ row }) => {
      const user = row.original;
      return (
        <a className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.picture.medium} alt="@shadcn" />
            <AvatarFallback>
              <Loader></Loader>
            </AvatarFallback>
          </Avatar>
          <span className="whitespace-nowrap">{`${user.name.first} ${user.name.last} ${user.name.title}`}</span>
        </a>
      );
    },
  },
  {
    accessorKey: 'login.username',
    header: 'login',
  },
  {
    accessorKey: 'location',
    header: 'Address',
    cell: ({ row }) => {
      return formatAddress(row.original.location);
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'email',
    header: 'email',
  },
];
