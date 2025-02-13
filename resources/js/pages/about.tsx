import BodyDiagram from '@/components/body-diagram';
import { Timeline } from '@/components/ui/timeline';
import AppLayout from '@/Layouts/app-layout';
import { __ } from '@/lib/lang';
import { Head } from '@inertiajs/react';

export default function About() {
  const data = [
    {
      title: '2025',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Early 2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: '2014',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <AppLayout>
      <Head title={__('About us')} />
      <section className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-12 lg:grid-cols-2">
            <div className="order-last grid w-full grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 lg:order-first">
              <div className="flex items-start justify-start gap-2.5 pt-24 sm:justify-end lg:justify-center">
                <img
                  className="rounded-xl object-cover"
                  src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
                  alt="about Us image"
                />
              </div>
              <img
                className="ml-auto rounded-xl object-cover sm:ml-0"
                src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
                alt="about Us image"
              />
            </div>
            <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
              <div className="flex w-full flex-col items-start justify-center gap-8">
                <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                  <h2 className="text-center font-sans text-5xl font-medium leading-snug tracking-normal text-primary [text-shadow:_3px_2px_4px_rgb(99_102_241_/_0.3)] lg:text-start">
                    {__('Garbaméd Hospital')}
                  </h2>

                  <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
                    {__('Description of the hospital')}
                  </p>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-5 sm:gap-10 lg:justify-start">
                  <div className="inline-flex flex-col items-start justify-start">
                    <h3 className="text-4xl font-bold leading-normal text-foreground">
                      100+
                    </h3>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Beds
                    </h6>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start">
                    <h4 className="text-4xl font-bold leading-normal text-foreground">
                      30+
                    </h4>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Doctors
                    </h6>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start">
                    <h4 className="text-4xl font-bold leading-normal text-foreground">
                      2520+
                    </h4>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Happy Patiens
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Our Vision
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Mission</h3>
                <p className="mt-2 text-base text-gray-500">
                  We aim to make the world a better place through innovation and
                  collaboration.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Values</h3>
                <p className="mt-2 text-base text-gray-500">
                  We believe in honesty, integrity, and respect for all
                  individuals.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Vision</h3>
                <p className="mt-2 text-base text-gray-500">
                  We envision a world where technology is used to solve the most
                  pressing issues facing humanity and improve people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <Timeline data={data} />
      </div>

      <BodyDiagram />
    </AppLayout>
  );
}
