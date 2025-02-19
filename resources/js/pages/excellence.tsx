import { BodyHuman } from '@/components/body-human';

import AppLayout from '@/Layouts/app-layout';

export default function Excellence() {
  return (
    <>
      <BodyHuman />
    </>
  );
}

Excellence.layout = (page: any) => <AppLayout children={page} />;
