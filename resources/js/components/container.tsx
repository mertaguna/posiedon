import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: React.ReactNode;
}
export function Container({ className, children }: Props) {
  return (
    <div className={cn('mx-auto px-4 py-2 md:px-10', className)}>
      {children}
    </div>
  );
}
