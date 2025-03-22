import { Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { TextLoop } from './ui/text-loop';

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

  const [isTyping, setIsTyping] = useState(false);

  return (
    <form id="" onSubmit={handleFormSubmit}>
      <div className="relative flex items-center">
        <Input
          ref={inputRef}
          className="flex-grow rounded-xl border-[0.1px] border-primary py-6 focus:outline-none focus:ring-0"
          placeholder={isTyping ? 'type a message...' : 'type a message...'}
          onFocus={() => setIsTyping(true)}
          onBlur={(e) => setIsTyping(e.target.value ? true : false)}
        />
        {isTyping && (
          <span className="absolute bottom-14 left-1 select-none text-xs text-gray-400">
            <TextLoop interval={4}>
              <span>Dokter anak praktek hari ini?</span>
              <span>Kapan dok Indri praktek ya?</span>
              <span>Gimana cara booking dokter ya?</span>
              <span>Saya sakit kepala, kedokter siapa ya?</span>
            </TextLoop>
          </span>
        )}
        <Button className="ml-2 rounded-lg border-none py-6 text-white focus:outline-none focus:ring-0">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}
