import { Send } from 'lucide-react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface ChatBotFormProps {
  chatHistory: any[];
  setChatHistory: React.Dispatch<React.SetStateAction<any[]>>;
  generateBotResponse: any;
}
export function ChatBotForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}: ChatBotFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!inputRef.current) return;
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';

    //update user chat history
    setChatHistory((history) => [
      ...history,
      { role: 'user', text: userMessage },
    ]);

    //update bot chat history
    setTimeout(() => {
      //add loading
      setChatHistory((history) => [
        ...history,
        { role: 'model', text: 'typing...' },
      ]),
        //bot response
        generateBotResponse([
          ...chatHistory,
          {
            role: 'user',
            text: `Using the details provided above, please address this query: ${userMessage}`,
            // text: userMessage,
          },
        ]);
    }, 600);
  };
  return (
    <form id="" onSubmit={handleFormSubmit}>
      <div className="flex items-center">
        <Input
          autoFocus
          ref={inputRef}
          className="flex-grow rounded-xl border-[0.1px] border-primary py-6 focus:outline-none focus:ring-0"
          placeholder="Type a message..."
        />

        <Button className="ml-2 rounded-lg border-none py-6 text-white focus:outline-none focus:ring-0">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}
