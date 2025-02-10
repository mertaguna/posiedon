import { cn } from '@/lib/utils';

interface Props {
  classname?: string;
  children: React.ReactNode;
}
export function Container({ classname, children }: Props) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6', classname)}>
      {children}
    </div>
  );
}
