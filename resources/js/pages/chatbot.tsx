import { ChatBotForm } from '@/components/chat-bot-form';
import ChatMessage from '@/components/chat-bot-message';
import { IoChatbubbleEllipses } from 'react-icons/io5';

import { AppLogo } from '@/components/app-logo';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { GlowEffect } from '@/components/ui/glow-effect';
import { useMediaQuery } from '@/hooks/use-media-query';
import { X } from 'lucide-react';

import { AnimatePresence, motion } from 'framer-motion';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { RiRobot2Fill } from 'react-icons/ri';
import { GarbaBotInfo } from '../lib/garbabot';

export default function Chatbot() {
  const [chatHistory, setChatHistory] = useState<any>([
    {
      hideInChat: true,
      role: 'model',
      text: GarbaBotInfo,
    },
  ]);

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

  const [open, setOpen] = useState(false);
  const toggleChat = () => {
    setOpen(!open);
  };
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [chatHeight, setChatHeight] = useState('75vh'); // Default tinggi

  // Menyesuaikan tinggi chatbox saat keyboard muncul
  useLayoutEffect(() => {
    const updateHeight = () => {
      requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight;
        setChatHeight(`${viewportHeight * 0.7}px`); // Sesuaikan tinggi dengan layar
      });
    };

    // Perbaiki bug pertama kali akses
    setTimeout(updateHeight, 50);

    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  if (isDesktop)
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>
                <div className="flex items-center gap-2">
                  <AppLogo className="size-8" />
                  <div className="text-xl font-bold">Garbot</div>
                </div>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="max-h-[80vh] min-h-[50vh]">
              {/* bot body */}
              <div ref={chatBodyRef} className="h-[50vh] overflow-y-auto p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex max-w-xs items-end gap-2 md:max-w-md">
                    <div className="rounded-full p-0 text-primary">
                      <RiRobot2Fill className="size-7" />
                    </div>
                    <div className="self-start rounded-br-xl rounded-tl-xl rounded-tr-xl bg-primary/5 p-4 text-xs md:text-sm">
                      Hello I'm Garbot, your friendly Garba Hospital Bot
                    </div>
                  </div>
                  {chatHistory.map((chat: any, index: number) => (
                    <ChatMessage key={index} chat={chat} />
                  ))}
                </div>
              </div>
              <div className="w-full pt-8">
                <ChatBotForm
                  chatHistory={chatHistory}
                  setChatHistory={setChatHistory}
                  generateBotResponse={generateBotResponse}
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="fixed bottom-8 right-8">
          <div className="relative">
            <GlowEffect
              className="rounded-2xl"
              colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
              mode="colorShift"
              blur="soft"
              duration={3}
              scale={1.1}
            />

            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={toggleChat}
              className="relative rounded-2xl bg-gradient-to-tr from-primary to-blue-700 p-4"
            >
              <IoChatbubbleEllipses className="h-8 w-8 fill-amber-200" />
            </motion.div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="fixed bottom-8 right-8">
        <div className="relative">
          <GlowEffect
            className="rounded-2xl"
            colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
            mode="colorShift"
            blur="soft"
            duration={3}
            scale={1.1}
          />

          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={toggleChat}
            className="relative rounded-2xl bg-gradient-to-tr from-primary to-blue-700 p-4"
          >
            <IoChatbubbleEllipses className="h-8 w-8 fill-amber-200" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
              scale: { type: 'spring', stiffness: 200, damping: 20 },
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-0 z-50 h-full w-full overflow-y-auto bg-background"
          >
            <div className="sticky top-0 z-40 flex w-full translate-y-0 items-center justify-between p-4">
              <div className="flex items-center justify-center gap-2">
                <AppLogo className="size-8" />
                <h1 className="text-xl font-bold text-primary">Garbot</h1>
              </div>
              <X className="h-6 w-6 cursor-pointer" onClick={toggleChat} />
            </div>

            {/* bot body */}
            <div
              ref={chatBodyRef}
              className="max-h-[80vh] overflow-auto p-4 pb-16"
            >
              <div className="flex flex-col gap-2">
                <div className="flex max-w-xs items-end gap-2">
                  <div className="rounded-full p-0 text-primary">
                    <RiRobot2Fill className="size-7" />
                  </div>
                  <div className="self-start rounded-br-xl rounded-tl-xl rounded-tr-xl bg-primary/5 p-4 text-sm">
                    Hello I'm Garbot, your friendly Garba Hospital Bot
                  </div>
                </div>
                {chatHistory.map((chat: any, index: number) => (
                  <ChatMessage key={index} chat={chat} />
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="absolute inset-x-0 bottom-0 w-full bg-background px-4 pb-4 pt-8">
              <ChatBotForm
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                generateBotResponse={generateBotResponse}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
