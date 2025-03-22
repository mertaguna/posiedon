import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import ResponsiveNavbar from '@/components/responsive-navbar';
import Chatbot from '@/pages/chatbot';
import { PropsWithChildren, ReactNode } from 'react';

export default function AppLayout({
  children,
}: PropsWithChildren<{ breadcrumb?: ReactNode }>) {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
}
