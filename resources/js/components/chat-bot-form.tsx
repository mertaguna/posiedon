import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
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
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!inputRef.current) return;
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';
    setUserInput('');

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
      ]);

      //bot response
      generateBotResponse([
        ...chatHistory,
        {
          role: 'user',
          text: `Using the details provided above, please address this query: ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <form id="idbot" onSubmit={handleFormSubmit}>
      <div className="relative flex items-center gap-2">
        <motion.div
          initial={{ width: '100%', borderRadius: '20px' }}
          animate={{
            width: userInput.trim() ? '85%' : '100%',
            borderRadius: '12px',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex-grow shadow-xl"
        >
          <Input
            ref={inputRef}
            className="rounded-xl border-[0.1px] border-primary py-6 transition-all duration-500 ease-in-out focus:outline-none focus:ring-0"
            placeholder={isTyping ? 'type a message...' : 'type a message...'}
            onFocus={() => setIsTyping(true)}
            onBlur={(e) => setIsTyping(e.target.value ? true : false)}
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
        </motion.div>
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
        <AnimatePresence>
          {userInput.trim() && (
            <motion.div
              initial={{ rotate: 180, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -180, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button className="rounded-xl border-none py-6 text-white focus:outline-none focus:ring-0">
                <RiSendPlaneFill className="h-5 w-5 fill-amber-300" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
