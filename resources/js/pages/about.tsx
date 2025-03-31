import AppLayout from '@/Layouts/app-layout';
import { __ } from '@/lib/lang';
import { Head } from '@inertiajs/react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: false, margin: '-50px' });

  return (
    <>
      <Head title={__('About us')} />
      <section className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="py-4 text-6xl font-semibold text-gray-900">
              {__('Garbaméd Hospital')}
            </h2>
            <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
              {__('Description of the hospital')}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative h-screen overflow-hidden">
        <motion.div
          ref={ref}
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale, opacity }}
        >
          <img
            className="h-[50vh] w-full rounded-xl object-cover lg:h-full"
            src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
            alt="about Us image"
          />
        </motion.div>
      </section>
    </>
  );
}

About.layout = (page: any) => <AppLayout children={page} />;
