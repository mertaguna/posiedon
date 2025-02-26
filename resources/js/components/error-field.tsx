import { ReactNode } from 'react';

interface ErrorProps {
  value?: string;
  children?: ReactNode;
}

export default function ErrorField({ value, children }: ErrorProps) {
  return (
    <div className="mt-2 text-xs font-medium text-rose-500">
      {value ? value : children}
    </div>
  );
}
