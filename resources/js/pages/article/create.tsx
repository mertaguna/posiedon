import ArticleForm from '@/components/article-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Authenticated from '@/Layouts/auth-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { marked } from 'marked';

interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

interface CreateProps {
  tags: Tag[];
  categories: Category[];
  errors: {
    title?: string;
    teaser?: string;
    body?: string;
    picture?: string;
    category_id?: string;
    tags?: string;
  };
}

export default function Create({ categories }: CreateProps) {
  const { data, setData } = useForm({
    title: '',
    teaser: '',
    category_id: categories.length > 0 ? categories[0].id : 0,
    body: '',
    picture: '',
    tags: [],
  });

  const onsubmit = (e: any) => {
    e.preventDefault();
    router.post(route('article.store'), {
      ...data,
      tags: data.tags.map((t: any) => t.id),
    });
  };

  return (
    <>
      <Head title="Create Article" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Card className="border-none shadow-none">
                    <CardHeader>
                      <CardTitle>Create Article</CardTitle>
                      <CardDescription>Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={onsubmit}>
                        <ArticleForm {...{ data, setData }} />
                        <Button>Create</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2">
                  <div className="flex p-4">
                    <div className="w-1/2">{data.title || 'the title..'}</div>
                    <div className="">picture</div>
                  </div>
                  <div className="p-4">
                    <div>{data.teaser || 'the teaser..'}</div>
                  </div>
                  <div
                    className="prose prose-blue max-w-none p-4 prose-img:rounded-lg"
                    dangerouslySetInnerHTML={{
                      __html: marked(data.body) || 'the body..',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Create.layout = (page: any) => <Authenticated children={page} />;
