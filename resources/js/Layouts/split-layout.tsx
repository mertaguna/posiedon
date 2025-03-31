import { AppLogo } from '@/components/app-logo';
import { __ } from '@/lib/lang';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import garbaFoto from '../../../public/assets/image/garba-foto.webp';

interface SplitLayoutProps {
  title?: string;
  description?: string;
}

export default function SplitLayout({
  children,
  title,
  description,
}: PropsWithChildren<SplitLayoutProps>) {
  return (
    <div className="relative flex h-dvh items-center justify-center px-4 lg:max-w-none">
      <div className="relative hidden h-full w-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <img
          src={garbaFoto}
          alt="Garba"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <Link
          href={route('home')}
          className="relative z-20 flex items-center text-lg font-medium"
        >
          <div className="flex items-center">
            <AppLogo className="size-16" />
            <span className="sr-only">go to home page</span>
            <div className="flex flex-col">
              <div className="ml-2 font-sans text-xl font-semibold leading-snug [text-shadow:_3px_2px_4px_rgb(99_102_241_/_0.3)] md:text-2xl">
                {__('Garbaméd Hospital')}
              </div>
              <div className="ml-2">Safety and Integrity</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Link
            href={route('home')}
            className="relative z-20 flex items-center justify-center lg:hidden"
          >
            <AppLogo className="h-10 fill-current text-black sm:h-12" />
          </Link>
          <div className="flex flex-col items-center gap-2 text-left sm:items-center sm:text-center">
            <h1 className="text-xl font-medium">{title}</h1>
            <p className="text-balance text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
