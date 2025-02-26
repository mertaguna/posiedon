import AppLayout from '@/Layouts/app-layout';
import { Container } from '@/components/container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';

import { ArticleHeader } from '@/components/article-header';
import Markdown from '@/components/markdown';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@inertiajs/react';
import { ArrowUpRightFromSquare, Calendar, Hash, Share2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Show(props: any) {
  const { data: article, related: articles } = props.article;
  //   console.log(article);
  //   const artikel = Object.values(articles);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = article.picture;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      <ArticleHeader title={article.title} />
      <Container className="px-4 md:px-8 lg:px-36">
        <div className="flex flex-col-reverse lg:flex-row-reverse lg:gap-10">
          <div className="w-full rounded-2xl lg:w-1/2">
            <div className="h-full">
              {!imageLoaded && (
                <Skeleton className="h-[210px] w-full rounded-2xl lg:h-[375px]" />
              )}
              <img
                className={`w-full rounded-2xl object-cover ${imageLoaded ? 'block' : 'hidden'}`}
                src={article.picture}
                alt="Article Image"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="pb-4">
                  <Link
                    href={route('categories.show', article.category.slug)}
                    className="text-md font-medium underline-offset-8 hover:underline"
                  >
                    {article.category.name}
                  </Link>
                </h3>
                <h1 className="mb-2 mt-4 text-2xl font-bold leading-tight text-gray-900 md:text-4xl lg:mt-0 lg:text-5xl">
                  {article.title}
                </h1>
                <div className="pt-3">{article.created_at}</div>
                <div className="mt-3 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="font-bold">{article.author.name}</div>
                    <small>Tim Medis GarbaMed</small>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mt-3">
                  {article.tags.length ? (
                    <div className="flex items-center gap-x-2">
                      {article.tags.map((tag: any) => (
                        <Link
                          className="rounded-lg border border-slate-300 px-2 py-1 text-xs font-medium text-blue-900 duration-300 hover:bg-slate-200"
                          key={tag.slug}
                          href={route('tags.show', tag.slug)}
                        >
                          <Hash className="inline-block size-3" />
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
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

        <div className="mt-9 flex flex-col gap-20 lg:flex-row">
          <div className="lg:basis-4/6">
            <div className="relative mx-auto max-w-screen-xl">
              <div className="mx-auto">
                <div className="flex flex-col justify-between rounded-b leading-normal lg:rounded-b-none lg:rounded-r">
                  <div className="my-5 text-base">
                    <Markdown>{article.body}</Markdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-2/6">
            <div className="sticky top-28 flex w-full flex-col items-stretch justify-center">
              <div className="mb-4 border-b-2 pb-2 text-start text-2xl font-semibold">
                Artikel Terkait
              </div>
              <div className="flex flex-col gap-6 border-b-2 border-gray-100 pb-6">
                {articles.length ? (
                  <ul className="space-y-2">
                    {articles.map((article: any) => (
                      <li key={article.slug}>
                        <Link href={route('article.show', article.slug)}>
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="flex gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="max-w-44 rounded-xl object-cover"
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
                        <AvatarImage src="https://github.com/mertaguna.png" />
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

Show.layout = (page: any) => <AppLayout children={page} />;
