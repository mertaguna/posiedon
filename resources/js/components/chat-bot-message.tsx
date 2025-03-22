import { RiRobot2Fill } from 'react-icons/ri';
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
            <div className="my-1 max-w-xs self-end rounded-bl-xl rounded-tl-xl rounded-tr-xl bg-primary p-4 text-sm text-white md:max-w-md">
              {chat.text}
            </div>
          </div>
        ) : chat.role === 'model' ? (
          <div className="flex max-w-xs items-end gap-2 md:max-w-md">
            <div className="rounded-full p-0 text-primary">
              <RiRobot2Fill className="size-7" />
            </div>
            <div className="self-start rounded-br-xl rounded-tl-xl rounded-tr-xl bg-primary/5 p-4">
              <Markdown className="text-sm md:text-sm">{chat.text}</Markdown>
            </div>
          </div>
        ) : null}
      </>
    )
  );
}
