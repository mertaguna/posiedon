import AppLayout from '@/Layouts/app-layout';
import { __ } from '@/lib/lang';
import { Head } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Efek paralaks untuk gambar dan teks
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const textTranslateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <Head title={__('About us')} />

      {/* Hero Section dengan Parallax Text */}
      <section
        ref={ref}
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: textTranslateY, opacity: textOpacity }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <h2 className="py-4 text-6xl font-semibold text-gray-900">
            {__('Garbaméd Hospital')}
          </h2>
          <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
            {__('Description of the hospital')}
          </p>
        </motion.div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
          <img
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
            alt="about Us image"
          />
        </motion.div>
      </section>
    </>
  );
}

About.layout = (page: any) => <AppLayout children={page} />;
