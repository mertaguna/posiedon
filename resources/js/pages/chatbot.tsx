import { ChatBotForm } from '@/components/chat-bot-form';
import ChatMessage from '@/components/chat-bot-message';

import { AppLogo } from '@/components/app-logo';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { GearIcon } from '@radix-ui/react-icons';
import { Bot, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
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

  if (isDesktop)
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Garbot</DialogTitle>
              <DialogDescription>Garbamed Hospital Bot</DialogDescription>
            </DialogHeader>
            <div className="max-h-[80vh] min-h-[50vh]">
              {/* bot body */}
              <div ref={chatBodyRef} className="h-[50vh] overflow-y-auto p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex max-w-xs items-end gap-2 md:max-w-md">
                    <div className="rounded-full bg-primary p-2 text-white">
                      <Bot />
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
              <div className="w-full pt-4">
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
          <motion.div
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
            onClick={toggleChat}
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
              rotate: open ? 45 : 0,
              scale: open ? 1.25 : 1,
              boxShadow: open
                ? '0px 10px 30px rgba(0, 0, 0, 0.2)'
                : '0px 0px 0px rgba(0, 0, 0, 0)',
              background: open
                ? 'linear-gradient(135deg, #ff9a9e, #fad0c4)'
                : 'linear-gradient(135deg, #FACC15, #F59E0B)',
              borderRadius: open ? '50%' : '20%',
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="p-4"
          >
            {open ? (
              <GearIcon className="h-8 w-8 animate-spin text-white" />
            ) : (
              <BsChatDots className="h-8 w-8 text-white" />
            )}
          </motion.div>
        </div>
      </>
    );

  return (
    <>
      <div className="fixed bottom-8 right-8">
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={toggleChat}
          initial={{
            rotate: 0,
            scale: 1,
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
            background: 'linear-gradient(135deg, #FACC15, #F59E0B)',
            borderRadius: '0.1rem',
          }}
          animate={{
            rotate: open ? 45 : 0,
            scale: open ? 1.25 : 1,
            boxShadow: open
              ? '0px 10px 30px rgba(0, 0, 0, 0.2)'
              : '0px 0px 0px rgba(0, 0, 0, 0)',
            background: open
              ? 'linear-gradient(135deg, #ff9a9e, #fad0c4)'
              : 'linear-gradient(135deg, #FACC15, #F59E0B)',
            borderRadius: open ? '50%' : '20%',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="p-4"
        >
          <BsChatDots className="h-8 w-8 text-white" />
        </motion.div>
      </div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="max-h-[95vh] min-h-[95vh]">
          <DrawerHeader className="p-0 px-4">
            <DrawerTitle className="">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                  <AppLogo className="size-8" />
                  <h1 className="text-xl font-bold">Garbot</h1>
                </div>
                <DrawerClose>
                  <X className="h-6 w-6 cursor-pointer" />
                </DrawerClose>
              </div>
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="">
            {/* bot body */}
            <div
              ref={chatBodyRef}
              className="h-[79vh] overflow-y-auto p-4 pb-10"
            >
              <div className="flex flex-col gap-2">
                <div className="flex max-w-xs items-end gap-2 text-xs md:text-sm">
                  <div className="rounded-full p-0 text-primary">
                    <RiRobot2Fill className="size-7" />
                  </div>
                  <div className="self-start rounded-br-xl rounded-tl-xl rounded-tr-xl bg-primary/5 p-4">
                    Hello I'm Garbot, your friendly Garba Hospital Bot
                  </div>
                </div>
                {chatHistory.map((chat: any, index: number) => (
                  <ChatMessage key={index} chat={chat} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full bg-background p-4">
            <ChatBotForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
