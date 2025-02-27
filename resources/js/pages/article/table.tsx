import { Pagination } from '@/components/pagination';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Authenticated from '@/Layouts/auth-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import {
  BadgeCheckIcon,
  Ellipsis,
  Eraser,
  PencilLine,
  Plus,
  Trash,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface ArticleTableProps {
  articles: {
    data: Array<{
      id: number;
      title: string;
      slug: string;
      category: {
        name: string;
        url: string;
      };
      tags: Array<{
        name: string;
        url: string;
      }>;
      url: string;
    }>;
    meta: any;
    links: any;
  };
}

export default function ArticleTable(props: ArticleTableProps) {
  const { data: articles, meta, links } = props.articles;
  const [deleteArticleSlug, setDeleteArticleSlug] = useState<string | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { delete: destroy } = useForm();

  const handleDelete = () => {
    if (deleteArticleSlug !== null) {
      // Panggil route delete
      destroy(route('article.destroy', deleteArticleSlug), {
        onSuccess: () => {
          setDeleteArticleSlug(null);
          setIsDialogOpen(false);
          toast('Success!!', {
            description: 'the article has been deleted',
            icon: <BadgeCheckIcon />,
            duration: 5000,
          });
        },
      });
    }
  };

  const openDialog = (articleSlug: string) => {
    setDeleteArticleSlug(articleSlug);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Head title="Article" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="flex justify-end">
                <Button asChild className="mb-6">
                  <Link href={route('article.create')}>
                    <Plus size={20} /> <span>Article</span>
                  </Link>
                </Button>
              </div>
              <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead className="text-right">Act</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.length ? (
                    articles.map((article, i) => (
                      <TableRow key={article.id}>
                        <TableCell>{meta.from + i}</TableCell>
                        <TableCell className="w-[450px]">
                          <Link href={article.url}>{article.title}</Link>
                        </TableCell>
                        <TableCell>
                          <Link href={article.category.url}>
                            {article.category.name}
                          </Link>
                        </TableCell>
                        <TableCell>
                          {article.tags.map((tag, i) => (
                            <Link href={tag.url} key={i}>
                              <Badge variant={'secondary'} className="mx-1">
                                {tag.name}
                              </Badge>
                            </Link>
                          ))}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Ellipsis />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <Link href={route('article.edit', article.slug)}>
                                <DropdownMenuItem>
                                  <PencilLine /> Edit
                                </DropdownMenuItem>
                              </Link>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => openDialog(article.slug)}
                                className="focus:bg-rose-50 focus:text-rose-600"
                              >
                                <Eraser /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell>
                        <p>no article</p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <Pagination {...{ meta, links }} />
            </div>
          </div>
        </div>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              article and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="border-none shadow-none"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="hover:bg-rose-600"
              onClick={handleDelete}
            >
              <Trash />
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

ArticleTable.layout = (page: any) => <Authenticated children={page} />;
