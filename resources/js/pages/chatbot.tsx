import { AppLogo } from '@/components/app-logo';
import { ChatBotForm } from '@/components/chat-bot-form';
import ChatMessage from '@/components/chat-bot-message';
import { GearIcon } from '@radix-ui/react-icons';
import { Bot, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { GarbaBotInfo } from '../lib/garbabot';

export default function Chatbot() {
  const [chatHistory, setChatHistory] = useState<any>([
    {
      hideInChat: true,
      role: 'model',
      text: GarbaBotInfo,
    },
  ]);
  const [isChatboxVisible, setIsChatboxVisible] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  interface ChatHistoryItem {
    role: string;
    parts: { text: string }[];
  }

  const generateBotResponse = async (history: ChatHistoryItem[]) => {
    const updateHistory = (text: any) => {
      setChatHistory((prev: any) => [
        ...prev.filter((msg: any) => msg.text !== 'typing...'),
        { role: 'model', text },
      ]);
    };
    history = history.map(({ role, text }: any) => ({
      role,
      parts: [{ text }],
    }));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_GEMINI_AI_URL,
        requestOptions,
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || 'Network error');
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //auto scroll
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatHistory]);

  const toggleChatbox = () => {
    setIsChatboxVisible(!isChatboxVisible);
  };

  return (
    <div className="flex w-full items-center justify-center">
      {isChatboxVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.01,
            scale: { type: 'spring', visualDuration: 0.01, bounce: 0.5 },
          }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-0 z-50 h-screen w-full overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 md:bottom-32 md:right-8 md:h-[600px] md:max-w-sm"
        >
          <div className="flex w-full items-center justify-between p-4">
            <div className="flex items-center justify-center gap-2">
              <AppLogo className="size-8" />
              <h1 className="text-xl font-bold">Garbot</h1>
            </div>
            <X className="h-6 w-6 cursor-pointer" onClick={toggleChatbox} />
          </div>

          {/* bot body */}
          <div
            ref={chatBodyRef}
            className="mb-20 h-[83%] overflow-y-auto p-4 md:h-[75%]"
          >
            <div className="flex flex-col gap-2">
              <div className="flex max-w-xs items-end gap-2">
                <div className="rounded-full bg-primary p-2 text-white">
                  <Bot />
                </div>
                <div className="self-start rounded-br-xl rounded-tl-xl rounded-tr-xl bg-primary/5 p-4 md:text-sm">
                  Hello I'm Garbot, your friendly Garba Hospital Bot
                </div>
              </div>
              {chatHistory.map((chat: any, index: number) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 w-full bg-white p-4">
            <ChatBotForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </motion.div>
      )}
      <div className="fixed bottom-8 right-8">
        <motion.div
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          onClick={toggleChatbox}
          whileHover={{
            scale: 1.2,
            borderRadius: '50%',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
            transition: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
          initial={{
            rotate: 0,
            scale: 1,
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
            background: 'linear-gradient(135deg, #FACC15, #F59E0B)',
            borderRadius: '0.1rem',
          }}
          animate={{
            rotate: isChatboxVisible ? 45 : 0,
            scale: isChatboxVisible ? 1.25 : 1,
            boxShadow: isChatboxVisible
              ? '0px 10px 30px rgba(0, 0, 0, 0.2)'
              : '0px 0px 0px rgba(0, 0, 0, 0)',
            background: isChatboxVisible
              ? 'linear-gradient(135deg, #ff9a9e, #fad0c4)'
              : 'linear-gradient(135deg, #FACC15, #F59E0B)',
            borderRadius: isChatboxVisible ? '50%' : '20%',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="p-4"
        >
          {isChatboxVisible ? (
            <GearIcon className="h-8 w-8 animate-spin text-white" />
          ) : (
            <BsChatDots className="h-8 w-8 text-white" />
          )}
        </motion.div>
      </div>
    </div>
  );
}
