import { Container } from '@/components/container';
import { MovingCardsPartner } from '@/components/moving-card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/Layouts/app-layout';
import { __ } from '@/lib/lang';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowRightIcon, Calendar } from 'lucide-react';
import { useState } from 'react';
import garbaFoto from '../../../public/assets/image/garba-foto.jpg';

export default function Home({ articles }: PageProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);
  const artikel = Object.values(articles);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newImageLoaded = [...prev];
      newImageLoaded[index] = true;
      return newImageLoaded;
    });
  };

  return (
    <>
      <Head title={__('Home')} />
      <div className="relative flex flex-col-reverse lg:flex-col lg:py-16 lg:pb-0 lg:pt-0">
        <div className="inset-y-0 right-0 top-0 z-0 mx-auto w-full max-w-xl px-2 py-6 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:py-0 lg:pr-0 xl:px-0">
          <svg
            className="absolute left-0 z-10 hidden h-full -translate-x-1/2 transform text-background lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          {!imageLoaded[0] && (
            <Skeleton className="h-56 w-full rounded-xl md:h-96 lg:h-full lg:rounded-none" />
          )}
          <img
            className={`h-56 w-full rounded-xl object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none ${imageLoaded[0] ? 'block' : 'hidden'}`}
            src={garbaFoto}
            alt="garba"
            onLoad={() => handleImageLoad(0)}
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-xl flex-col items-center lg:max-w-screen-2xl lg:items-start">
          <div className="my-10 text-center lg:my-40 lg:ml-10 lg:max-w-lg lg:pr-5 lg:text-start">
            {/* <div className="mb-5 hidden lg:block"> <OurDoctor /></div> */}

            <div className="font-sans text-4xl font-extrabold leading-snug tracking-normal text-foreground [text-shadow:_3px_2px_4px_rgb(99_102_241_/_0.3)] lg:text-5xl">
              {__('Your Health')}
            </div>

            <div className="mb-4 font-sans text-2xl tracking-normal text-foreground lg:text-4xl">
              {__('is Our Top Priority')}
            </div>

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
              <Link href={route('specialist.index')}>
                <Button variant={'link'} className="rounded-2xl px-9 py-6">
                  {__('Our specialist')}
                  <ArrowRightIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Container className="mx-4 py-12">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-4 text-center lg:w-1/3 lg:text-start">
            <h2 className="text-3xl">News & Healthpedia</h2>
            <p className="mb-6 mt-2 text-lg text-gray-400 lg:mr-10">
              Find useful health information for your healthier life through our
              blog articles.
            </p>
            <a
              href="#"
              className="font-semibold text-primary underline-offset-8 hover:underline"
            >
              View All Article →
            </a>
          </div>
          <div className="flex flex-col lg:w-5/6">
            <Carousel
              opts={{
                align: 'start',
              }}
            >
              <CarouselContent>
                {artikel.map((item, index) => (
                  <CarouselItem className="lg:basis-1/4" key={item.slug}>
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                      <Link href={route('article.show', item.slug)}>
                        {!imageLoaded[index + 1] && (
                          <Skeleton className="h-56 w-full object-cover" />
                        )}
                        <img
                          src={item.picture}
                          alt={item.picture}
                          className={`h-56 w-full object-cover ${imageLoaded[index + 1] ? 'block' : 'hidden'}`}
                          onLoad={() => handleImageLoad(index + 1)}
                        />
                      </Link>
                      <div className="p-4">
                        <p className="text-sm text-gray-500">
                          {item.created_at}
                        </p>
                        <div className="mt-1 text-lg font-semibold">
                          <Link
                            href={route('article.show', item.slug)}
                            className="flex flex-col text-primary hover:text-primary/80"
                          >
                            <p className="line-clamp-2">{item.title}</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-primary text-amber-200 hover:bg-primary/70 hover:text-amber-200" />
              <CarouselNext className="bg-primary text-amber-200 hover:bg-primary/70 hover:text-amber-200" />
            </Carousel>
          </div>
        </div>
      </Container>

      <div className="pt-5 text-center text-xl tracking-tight sm:text-2xl">
        Partnership
      </div>
      <MovingCardsPartner />
    </>
  );
}

Home.layout = (page: any) => <AppLayout children={page} />;
