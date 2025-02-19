import AppLayout from '@/Layouts/app-layout';
import { Container } from '@/components/container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { __ } from '@/lib/lang';
import { Link } from '@inertiajs/react';
import { ArrowUpRightFromSquare, Calendar, Share2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Article() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://picsum.photos/1200/700';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      <Container className="px-4 md:px-8 lg:px-36">
        <Breadcrumb className="hidden py-6 lg:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{__('Home')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/article">Article</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Bronkokonstriksi, Ketahui ..</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col-reverse lg:flex-row-reverse lg:gap-10">
          <div className="w-full rounded-2xl lg:w-1/2">
            <div className="h-full">
              {!imageLoaded && (
                <Skeleton className="h-[210px] w-full rounded-2xl lg:h-[375px]" />
              )}
              <img
                className={`w-full rounded-2xl object-cover ${imageLoaded ? 'block' : 'hidden'}`}
                src="https://picsum.photos/1200/700"
                alt="Article Image"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex h-full flex-col justify-between">
              <div className="">
                <h1 className="mb-2 mt-4 text-2xl font-bold leading-tight text-gray-900 md:text-4xl lg:mt-0 lg:text-5xl">
                  Bronkokonstriksi, Ketahui Penyebab dan Bahayanya Sebelum
                  Terlambat!
                </h1>
                <div className="pt-3">06 Februari 2025</div>
                <div className="mt-3 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="font-bold">Author</div>
                    <div className="">Tim Medis GarbaMed</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mt-3">#Asma, #Gangguan, #Pernapasan</div>
                <div className="flex gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        size={'sm'}
                        className="mb-3 mt-3 rounded-lg border-primary text-xs text-slate-950 lg:mb-0"
                        variant="bordered"
                      >
                        Share <Share2 />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="left" className="w-auto">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <FaInstagram />
                          <span>Instagram</span>
                          <DropdownMenuShortcut>
                            <ArrowUpRightFromSquare size={10} />
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FaFacebook />
                          <span>Facebook</span>
                          <DropdownMenuShortcut>
                            <ArrowUpRightFromSquare size={10} />
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FaWhatsapp />
                          <span>Whatsapp</span>
                          <DropdownMenuShortcut>
                            <ArrowUpRightFromSquare size={10} />
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-6 lg:flex-row">
          <div className="lg:basis-4/6">
            <div className="relative mx-auto max-w-screen-xl">
              <div className="mx-auto">
                <div className="flex flex-col justify-between rounded-b leading-normal lg:rounded-b-none lg:rounded-r">
                  <div className="">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">
                      Revenge of the Never Trumpers
                    </h1>
                    <p className="mt-2 text-xs text-gray-700">
                      Written By:
                      <a
                        href="#"
                        className="font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                      >
                        Ahmad Sultani
                      </a>{' '}
                      In
                      <a
                        href="#"
                        className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                      >
                        Election
                      </a>
                      ,
                      <a
                        href="#"
                        className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                      >
                        Politics
                      </a>
                    </p>
                    <p className="my-5 text-base leading-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <h3 className="my-5 text-2xl font-bold">
                      #1. What is Lorem Ipsum?
                    </h3>
                    <p className="my-5 text-base leading-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <blockquote className="my-5 border-l-4 p-5 text-base italic leading-8 text-indigo-600">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </blockquote>
                    <p className="my-5 text-base leading-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <a
                      href="#"
                      className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                    >
                      #Election
                    </a>
                    ,
                    <a
                      href="#"
                      className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                    >
                      #people
                    </a>
                    ,
                    <a
                      href="#"
                      className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                    >
                      #Election2020
                    </a>
                    ,
                    <a
                      href="#"
                      className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                    >
                      #trump
                    </a>
                    ,
                    <a
                      href="#"
                      className="text-xs font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900"
                    >
                      #Joe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-2/6">
            <div className="sticky top-28 flex w-full flex-col items-stretch justify-center">
              <div className="mb-4 text-start text-2xl font-semibold">
                Artikel Terkait
              </div>
              <div className="flex flex-col gap-6 border-b-2 border-gray-100 pb-6">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-52 rounded-xl object-cover"
                      src="https://picsum.photos/1200/700"
                      alt="Article Image"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="flex gap-2 text-sm font-semibold text-gray-700 md:gap-4">
                      <span className="flex items-center gap-1">
                        Kesehatan Tubuh
                      </span>
                    </div>

                    <h3 className="chelsea-market-regular line-clamp-2 text-xl font-semibold capitalize text-teal-900">
                      Bronkokonstriksi, Ketahui Penyebab dan Bahayanya Sebelum
                      Terlambat!
                    </h3>

                    <p className="text-md text-gray-500">16 januari 2025</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-52 rounded-xl object-cover"
                      src="https://picsum.photos/1200/700"
                      alt="Article Image"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="flex gap-2 text-sm font-semibold text-gray-700 md:gap-4">
                      <span className="flex items-center gap-1">
                        Kesehatan Tubuh
                      </span>
                    </div>

                    <h3 className="chelsea-market-regular line-clamp-2 text-xl font-semibold capitalize text-teal-900">
                      Bronkokonstriksi, Ketahui Penyebab dan Bahayanya Sebelum
                      Terlambat!
                    </h3>

                    <p className="text-md text-gray-500">16 januari 2025</p>
                  </div>
                </div>
              </div>

              <div className="mb-4 pt-4 text-start text-2xl font-semibold">
                Dokter Kami
              </div>
              <div className="flex flex-col gap-6 border-b-2 border-gray-100">
                <div className="flex gap-3">
                  <div className="flex w-full flex-col justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/ambarayasa.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <div className="font-bold">Spesialis Kulit Kelamin</div>
                        <div className="">dr. Albertus Daniel, SpPD</div>
                      </div>
                    </div>
                    <Button variant={'bordered'} className="mt-5 w-48">
                      <Link href="#" className="flex items-center gap-3">
                        Booking
                        <Calendar />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex w-full flex-col justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/ambarayasa.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <div className="font-bold">Spesialis Kulit Kelamin</div>
                        <div className="">dr. Albertus Daniel, SpPD</div>
                      </div>
                    </div>
                    <Button variant={'bordered'} className="mt-5 w-48">
                      <Link href="#" className="flex items-center gap-3">
                        Booking
                        <Calendar />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

Article.layout = (page: any) => <AppLayout children={page} />;
