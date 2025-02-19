import { MovingCardsPartner } from '@/components/moving-card';
import News from '@/components/news';
import { OurDoctor } from '@/components/our-doctor';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AppLayout from '@/Layouts/app-layout';
import { __ } from '@/lib/lang';
import { Head } from '@inertiajs/react';
import { ArrowRightIcon, Calendar, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head title={__('Home')} />
      <div className="relative flex flex-col-reverse lg:flex-col lg:py-16 lg:pb-0 lg:pt-0">
        <div className="inset-y-0 right-0 top-0 z-0 mx-auto w-full max-w-xl px-2 py-6 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:py-0 lg:pr-0 xl:px-0">
          <div className="absolute right-10 top-96 z-50 hidden duration-1000 lg:block">
            <Card className="w-[220px] rounded-3xl border-none shadow-2xl shadow-destructive/20">
              <CardHeader className="text-center">
                <CardTitle>{__('Medical Check-up ')}🔥</CardTitle>
                <CardDescription>
                  Medical check-up for all ages get a 20% discount for every
                  check-up'
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button
                  variant={'destructive'}
                  className="rounded-lg px-3 py-5 font-extrabold shadow-lg"
                >
                  {__('Get Promo')}
                  <Rocket />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <svg
            className="absolute left-0 hidden h-full -translate-x-1/2 transform text-background lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="h-56 w-full rounded-xl object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
            src="https://res.cloudinary.com/dv1uabtoz/image/upload/v1739253540/GARBA/FASILITAS/garba%20foto.jpg"
            alt=""
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-xl flex-col items-center lg:max-w-screen-2xl lg:items-start">
          <div className="my-10 text-center lg:my-40 lg:ml-10 lg:max-w-lg lg:pr-5 lg:text-start">
            <div className="mb-5 hidden lg:block">
              <OurDoctor />
            </div>

            <h1 className="font-sans text-4xl font-extrabold leading-snug tracking-normal text-foreground [text-shadow:_3px_2px_4px_rgb(99_102_241_/_0.3)] lg:text-5xl">
              {__('Your Health')}
            </h1>

            <h1 className="mb-4 font-sans text-2xl tracking-normal text-foreground lg:text-4xl">
              {__('is Our Top Priority')}
            </h1>

            <p className="mb-8 px-5 md:text-lg lg:px-0 lg:pr-5">
              {__(
                'We are committed to providing the best possible care for our patients',
              )}
            </p>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start">
              <Button className="rounded-2xl px-9 py-7 font-extrabold text-amber-200 shadow-lg">
                <Calendar className="stroke-[3px]" />
                <div>{__('Appointment')}</div>
              </Button>
              <Button variant={'link'} className="rounded-2xl px-9 py-6">
                {__('Our services')}
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <News />
      <h1 className="pt-5 text-center text-xl tracking-tight sm:text-2xl">
        Partnership
      </h1>
      <MovingCardsPartner />
    </>
  );
}

Home.layout = (page: any) => <AppLayout children={page} />;
