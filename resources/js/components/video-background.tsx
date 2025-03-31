import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { Container } from './container';

const VideoBackgroundSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-50% 0px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <Container className="">
      <motion.div
        ref={sectionRef}
        className="relative h-[60vh] w-full overflow-hidden rounded-2xl lg:h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {/* Video Background */}
        <motion.video
          ref={videoRef}
          className="absolute left-0 top-0 h-full w-full object-cover sm:object-fill"
          loop
          muted
          playsInline
          style={{ scale }}
        >
          <source src="/videos/garba.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Overlay */}
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-60"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold sm:text-3xl md:text-6xl">
            Our Service
          </div>
          <p className="mt-2 text-sm sm:text-lg md:text-xl">
            Experience the best visuals with our background video section.
          </p>
          <motion.button
            className="mt-4 w-full max-w-xs rounded-lg bg-gradient-to-tr from-primary to-blue-700 px-2 py-3 text-base font-semibold text-white hover:bg-blue-700 sm:w-auto sm:px-6 sm:py-3 sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View
          </motion.button>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default VideoBackgroundSection;
