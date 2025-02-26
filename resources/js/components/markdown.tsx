import { marked } from 'marked';

export default function Markdown({ children }: any) {
  return (
    <div
      className="prose prose-img:rounded-xl max-w-none"
      dangerouslySetInnerHTML={{ __html: marked(children) }}
    />
  );
}
