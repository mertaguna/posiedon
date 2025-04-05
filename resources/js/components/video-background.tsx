import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
import { Container } from './container';
import { ButtonCustom } from './ui/button-custom';

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
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-70"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-sm text-sm font-semibold sm:text-lg md:text-xl">
            Our dedicated team of professionals is here to provide you with the
            best care possible.
          </p>

          <ButtonCustom
            className="mt-2 text-primary"
            variant={'outline'}
            effect={'expandIcon'}
            icon={ArrowRight}
            iconPlacement="right"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Our Service
            </motion.div>
          </ButtonCustom>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default VideoBackgroundSection;
