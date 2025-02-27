import { Container } from '@/components/container';
import { Grid } from '@/components/grid';
import { Pagination } from '@/components/pagination';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/Layouts/app-layout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

interface TagProps {
  tag: {
    name: string;
  };
  articles: {
    data: any[];
    meta: any;
    links: any;
  };
}

export default function Show({ tag, ...props }: TagProps) {
  const { data: articles, meta, links } = props.articles;

  return (
    <div>
      <div className="mb-8 grid grid-cols-12 py-11 bg-pattern-white lg:py-32">
        <div className="col-span-12">
          <div className="text-center text-2xl font-bold lg:text-6xl">
            {tag.name}
          </div>
        </div>
      </div>
      <Container>
        {articles.length ? (
          <>
            <Grid>
              {articles.map((article: any) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </Grid>
            <Pagination {...{ meta, links }} />
          </>
        ) : (
          <div className="text-center text-gray-500">No articles found.</div>
        )}
      </Container>
    </div>
  );
}

Show.layout = (page: any) => <AppLayout children={page} />;

function ArticleCard({ article }: { article: any }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="overflow-hidden rounded-xl border-none shadow-lg">
      <CardHeader className="relative p-0">
        {!imageLoaded && <Skeleton className="h-60 w-full" />}
        <Link href={route('article.show', article.slug)}>
          <img
            className={`h-60 w-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'hidden'
            }`}
            src={article.picture}
            alt={article.title}
            onLoad={() => setImageLoaded(true)}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold tracking-tight text-gray-800 transition duration-200 hover:text-indigo-600">
          <Link href={route('article.show', article.slug)}>
            {article.title}
          </Link>
        </CardTitle>
        <p className="my-2 line-clamp-2 text-sm tracking-tighter text-gray-500">
          {article.teaser}
        </p>
        {article.tags.length ? (
          <div className="flex items-center gap-x-2">
            {article.tags.map((tag: any) => (
              <Link
                className="rounded-lg border border-slate-300 px-2 py-1 text-xs font-medium text-blue-900 duration-300 hover:bg-slate-200"
                key={tag.slug}
                href={route('tags.show', tag.slug)}
              >
                {tag.name}
              </Link>
            ))}
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="flex items-center p-4">
        <img
          src="https://github.com/shadcn.png"
          alt={article.author.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700">
            {article.author.name}
          </p>
          <small className="text-xs text-gray-500">{article.created_at}</small>
        </div>
      </CardFooter>
    </Card>
  );
}
