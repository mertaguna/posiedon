import { cn } from '@/lib/utils';

import { ReactNode } from 'react';

export function Grid({
  cols = 3,
  children,
  className,
}: {
  cols?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        cols == 3 && 'lg:grid-cols-3',
        cols == 2 && 'lg:grid-cols-2',
        cols == 4 && 'lg:grid-cols-4',
        'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-8',
        className,
      )}
    >
      {children}
    </div>
  );
}
