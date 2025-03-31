import SplitLayout from './split-layout';

export default function AuthLayout({
  children,
  title,
  description,
  ...props
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <SplitLayout title={title} description={description} {...props}>
      {children}
    </SplitLayout>
  );
}
