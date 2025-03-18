import { Bot } from 'lucide-react';
import Markdown from './markdown';

interface ChatMessageProps {
  chat: {
    role: string;
    text: string;
    hideInChat?: boolean;
  };
}

export default function ChatMessage({ chat }: ChatMessageProps) {
  return (
    !chat.hideInChat && (
      <>
        {chat.role === 'user' ? (
          <div className="flex flex-col items-end">
            <div className="my-1 max-w-sm self-end rounded-bl-xl rounded-tl-xl rounded-tr-xl bg-primary p-4 text-white md:text-xs">
              {chat.text}
            </div>
          </div>
        ) : chat.role === 'model' ? (
          <div className="flex max-w-xs items-end gap-2 md:max-w-xs">
            <div className="rounded-full bg-primary p-2 text-white">
              <Bot className="size-5" />
            </div>
            <div className="self-start rounded-br-xl rounded-tl-xl rounded-tr-xl bg-primary/5 p-4">
              <Markdown className="md:max-w-xs md:text-sm">
                {chat.text}
              </Markdown>
            </div>
          </div>
        ) : null}
      </>
    )
  );
}
