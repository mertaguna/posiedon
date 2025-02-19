import AppLayout from '@/Layouts/app-layout';

interface CategoryProps {
  category: {
    name: string;
  };
}

export default function Category({ category }: CategoryProps) {
  return (
    <div>
      <h3>{category.name}</h3>
    </div>
  );
}

Category.layout = (page: any) => <AppLayout children={page} />;
