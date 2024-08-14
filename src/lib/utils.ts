import { User } from '@/store/features/usersSlice/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAddress(address: User['location']): string {
  const { street, city, state, postcode, country } = address;
  return `${street.number} ${street.name}, ${city}, ${state}, ${postcode}, ${country} `;
}
