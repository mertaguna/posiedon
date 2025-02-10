import AppLayout from '@/Layouts/app-layout';
import { __ } from '@/lib/lang';
import { Head } from '@inertiajs/react';

export default function About() {
  return (
    <AppLayout>
      <Head title="About" />
      {__('About us')}
    </AppLayout>
  );
}
