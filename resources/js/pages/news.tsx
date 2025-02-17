import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    date: 'September 18, 2024',
    title: 'Benefits and Side Effects of Ice for the Face',
    image: 'https://picsum.photos/300/200?random=1',
  },
  {
    date: 'September 12, 2024',
    title: 'Here Are Various Benefits of Aloe Vera for Hair',
    image: 'https://picsum.photos/300/200?random=2',
  },
  {
    date: 'August 16, 2024',
    title: 'Here Are the Effects of Staying Up Late on the Face',
    image: 'https://picsum.photos/300/200?random=3',
  },
  {
    date: 'September 18, 2024',
    title: 'Benefits and Side Effects of Ice for the Face',
    image: 'https://picsum.photos/300/200?random=4',
  },
  {
    date: 'September 12, 2024',
    title: 'Here Are Various Benefits of Aloe Vera for Hair',
    image: 'https://picsum.photos/300/200?random=5',
  },
  {
    date: 'August 16, 2024',
    title: 'Here Are the Effects of Staying Up Late on the Face',
    image: 'https://picsum.photos/300/200?random=6',
  },
];
export default function News() {
  return (
    <Container>
      <section className="px-6 py-12">
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
            <div className="mb-4 hidden space-x-4 lg:block">
              <Button variant={'bordered'} size={'xl'}>
                All News
              </Button>
              <Button variant={'bordered'} size={'xl'}>
                Healthy Lifestyle
              </Button>
              <Button variant={'bordered'} size={'xl'}>
                Mental Health
              </Button>
              <Button variant={'bordered'} size={'xl'}>
                General Health
              </Button>
              <Button variant={'bordered'} size={'xl'}>
                Beauty
              </Button>
              <Button variant={'bordered'} size={'xl'}>
                Mother and Child
              </Button>
            </div>
            <Carousel
              opts={{
                align: 'start',
              }}
            >
              <CarouselContent>
                {articles.map((article, index) => (
                  <CarouselItem key={index} className="lg:basis-1/4">
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                      <img
                        src={article.image}
                        alt=""
                        className="h-56 w-full object-cover"
                      />
                      <div className="p-4">
                        <p className="text-sm text-gray-500">{article.date}</p>
                        <div className="mt-1 text-lg font-semibold">
                          <Link
                            href="#"
                            className="flex flex-col text-primary hover:text-primary/80"
                          >
                            {article.title}
                            <div className="mt-2 flex flex-row items-center text-amber-500 underline-offset-8 hover:underline">
                              <h4 className="font-normal">more</h4>
                              <ArrowRight className="size-4" />
                            </div>
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
      </section>
    </Container>
  );
}
