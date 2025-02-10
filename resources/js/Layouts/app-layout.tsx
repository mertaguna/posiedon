import { Container } from '@/components/container';
import { Navbar } from '@/components/navbar';
import React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-muted/40">
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}
