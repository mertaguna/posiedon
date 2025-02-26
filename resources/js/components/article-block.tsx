import { Link } from '@inertiajs/react';

interface Article {
  picture: string;
  tags: { slug: string; name: string }[];
  title: string;
  teaser: string;
  created_at: string;
  author: string;
}

export function ArticleBlock({ article }: { article: Article }) {
  return (
    <div className="overflow-hidden rounded-lg border shadow-md">
      <div className="relative">
        <img
          src={article.picture}
          alt="Article Thumbnail"
          className="h-48 w-full object-cover"
        />
        <div className="absolute left-2 top-2 flex space-x-1">
          {article.tags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/tags/${tag.slug}`}
              className="rounded-md bg-gray-800 bg-opacity-75 px-2 py-1 text-xs font-medium text-white transition duration-200 hover:bg-opacity-90"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4">
        <Link href="#">
          <h1 className="text-lg font-semibold tracking-tight text-gray-800 transition duration-200 hover:text-indigo-600">
            {article.title}
          </h1>
          <p className="mt-2 line-clamp-2 text-sm tracking-tighter text-gray-500">
            {article.teaser}
          </p>
        </Link>
        <div className="mt-4 flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">
              {article.author}
            </p>
            <small className="text-xs text-gray-500">
              {article.created_at}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
