import { __ } from '@/lib/lang';
import { Container } from './container';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

export function ArticleHeader({ title }: { title: string }) {
  return (
    <Container className="px-4 md:px-8 lg:px-36">
      <Breadcrumb className="lg:block lg:py-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{__('Home')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/article">{__('Article')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Container>
  );
}
