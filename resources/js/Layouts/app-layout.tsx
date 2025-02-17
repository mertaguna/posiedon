import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import ResponsiveNavbar from '@/components/responsive-navbar';
import React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <ResponsiveNavbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
