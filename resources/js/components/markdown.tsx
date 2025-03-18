import { cn } from '@/lib/utils';
import { marked } from 'marked';

export default function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div
      className={cn('prose max-w-none prose-img:rounded-xl', className)}
      dangerouslySetInnerHTML={{ __html: marked(children) }}
    />
  );
}
