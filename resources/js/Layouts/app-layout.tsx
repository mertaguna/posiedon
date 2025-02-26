import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import ResponsiveNavbar from '@/components/responsive-navbar';
import { PropsWithChildren, ReactNode } from 'react';

export default function AppLayout({
  children,
}: PropsWithChildren<{ breadcrumb?: ReactNode }>) {
  return (
    <div className="min-h-svh bg-background">
      <ResponsiveNavbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
