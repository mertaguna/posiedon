import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { GlowEffect } from './glow-effect';

interface ButtonBotProps {
  onClick: () => void;
  colors?: string[];
  icon?: ReactNode;
  duration?: number;
  scaleEffect?: number[];
}

export default function ButtonBot({
  onClick,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  icon = <IoChatbubbleEllipses className="h-8 w-8 fill-amber-300" />,
  duration = 5,
  scaleEffect = [1, 1.1, 1.2, 1.1, 1],
}: ButtonBotProps) {
  return (
    <>
      <GlowEffect
        className="rounded-2xl"
        colors={colors}
        mode="colorShift"
        blur="medium"
        duration={3}
        scale={1.1}
      />

      <motion.div
        whileTap={{ scale: 1 }}
        onClick={onClick}
        initial={{
          rotate: 0,
          scale: 1,
          borderRadius: '20%',
        }}
        animate={{
          scale: scaleEffect,
          rotate: [0, 120, 240, 360],
          borderRadius: ['20%', '40%', '50%', '40%', '20%'],
          transition: {
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="cursor-pointer rounded-2xl bg-gradient-to-tr from-primary to-blue-700 p-4"
      >
        <motion.div
          animate={{
            rotate: [360, 240, 120, 0],
            scale: scaleEffect,
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </>
  );
}
