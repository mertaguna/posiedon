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
import { Head, Link } from '@inertiajs/react';
import { ArrowUpRightFromSquare, Share2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Show(props: any) {
  const { data: article, related: articles } = props.article;
  //   console.log(articles);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [relatedImageLoaded, setRelatedImageLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    const img = new Image();
    img.src = article.picture;
    img.onload = () => setImageLoaded(true);
  }, [article.picture]);

  const handleRelatedImageLoad = (index: number) => {
    setRelatedImageLoaded((prev) => {
      const newImageLoaded = [...prev];
      newImageLoaded[index] = true;
      return newImageLoaded;
    });
  };

  return (
    <>
      <Head title="Article" />
      <ArticleHeader title={article.title} />
      <Container className="px-4 md:px-8 lg:px-36">
        <div className="flex flex-col-reverse lg:flex-row-reverse lg:gap-10">
          <div className="w-full rounded-2xl lg:w-1/2">
            <div className="h-full">
              {!imageLoaded && (
                <Skeleton className="h-72 w-full rounded-2xl lg:h-[450px]" />
              )}
              <img
                className={`h-72 w-full rounded-2xl object-cover lg:h-[450px] ${imageLoaded ? 'block' : 'hidden'}`}
                src={article.picture}
                alt={article.title}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="mt-2 lg:mt-0 lg:pb-4">
                  <Link
                    href={route('categories.show', article.category.slug)}
                    className="text-md font-medium underline-offset-8 hover:underline"
                  >
                    {article.category.name}
                  </Link>
                </h3>
                <div className="mb-2 mt-2 text-2xl font-black md:text-4xl lg:mt-0 lg:text-5xl">
                  {article.title}
                </div>
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
                          #{tag.name}
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
              <div className="mb-4 border-b-2 pb-2 text-start text-2xl font-medium">
                Related Article
              </div>
              <div className="flex flex-col gap-6 border-b-2 border-gray-100 pb-6">
                {articles.length ? (
                  <ul className="space-y-4">
                    {articles.map((relatedArticle: any, index: number) => (
                      <Link
                        key={index}
                        href={route('article.show', relatedArticle.slug)}
                      >
                        <li
                          key={relatedArticle.slug}
                          className="flex gap-4 py-4"
                        >
                          <div className="w-32 flex-none">
                            {!relatedImageLoaded[index] && (
                              <Skeleton className="h-24 w-full rounded-xl object-cover" />
                            )}
                            <img
                              className={`h-24 w-full rounded-xl object-cover ${relatedImageLoaded[index] ? 'block' : 'hidden'}`}
                              src={relatedArticle.picture}
                              alt={relatedArticle.title}
                              onLoad={() => handleRelatedImageLoad(index)}
                            />
                          </div>
                          <div className="underline-offset-2 hover:underline">
                            {relatedArticle.title}
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No related articles found.</p>
                )}
              </div>

              <div className="w-full flex-col items-stretch justify-center">
                <div className="mb-4 border-b-2 pb-2 text-start text-2xl font-medium">
                  Our Doctor
                </div>
                <div className="flex flex-col gap-6 border-b-2 border-gray-100 pb-6">
                  <ul className="space-y-4">
                    <Link href="#">
                      <li
                        key=""
                        className="flex-col gap-4 rounded-xl bg-white p-6"
                      >
                        <div className="flex gap-4">
                          <div className="w-20 flex-none">
                            <Avatar className="h-20 w-20">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="">
                            <div className="font-semibold underline-offset-2 hover:underline">
                              dr. Ni Luh Indri Astari, M.Biomed., SpTHT-KL
                            </div>
                            <div className="font-normal">Spesialis THT</div>
                            <div className="font-light">Praktek Hari ini</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button className="w-full py-4" variant="bordered">
                            Book Now
                          </Button>
                        </div>
                      </li>
                    </Link>
                  </ul>
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
