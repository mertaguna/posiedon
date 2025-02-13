import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: React.ReactNode;
}
export function Container({ className, children }: Props) {
  return <div className={cn('mx-auto px-16 py-2', className)}>{children}</div>;
}
