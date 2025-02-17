import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { __ } from '@/lib/lang';
import { Link } from '@inertiajs/react';
import { Headset, Menu, Siren } from 'lucide-react';
import { useState } from 'react';
import { AppLogo } from './app-logo';
import { FlagEnglish, FlagIndo } from './flag';
import { Button } from './ui/button';

export default function ResponsiveNavbar() {
  const languages = [
    {
      name: 'English',
      code: 'en',
      icon: <FlagEnglish className="size-6" />,
    },
    {
      name: 'Bahasa',
      code: 'id',
      icon: <FlagIndo className="size-6" />,
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <>
      <div className="flex flex-row justify-between px-4 pt-2 font-bold lg:hidden">
        <div className="flex cursor-pointer items-center rounded-full underline-offset-8 hover:underline hover:decoration-primary">
          <Headset className="size-4 stroke-primary" />
          <div className="ml-2 text-xs text-primary">(0361) 909 3584</div>
        </div>
        <div className="flex cursor-pointer items-center rounded-full underline-offset-8 hover:underline hover:decoration-red-500">
          <Siren className="size-4 fill-amber-200 stroke-rose-600" />
          <h3 className="ml-2 text-xs text-rose-600">+62 812 5286 6162</h3>
        </div>
      </div>
      <nav className="sticky top-0 block bg-background/95 px-4 py-4 backdrop-blur-2xl lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <AppLogo className="size-12" />
              <span className="sr-only">go to home page</span>
              <div className="flex flex-col">
                <div className="font-manrope text-md ml-2 font-sans font-medium leading-snug text-primary [text-shadow:_3px_2px_4px_rgb(99_102_241_/_0.3)] md:text-2xl">
                  {__('Garbaméd Hospital')}
                </div>
                <div className="ml-2 text-xs md:text-xl">
                  Safety and Integrity
                </div>
              </div>
            </div>
          </Link>
          <div className="flex gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 uppercase">
                {selectedLanguage.icon} {selectedLanguage.code}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((language) => (
                  <DropdownMenuItem key={language.code}>
                    {language.icon}
                    <Link
                      href="/language"
                      data={{ name: language.code }}
                      method="post"
                      as="button"
                      onClick={() => {
                        setSelectedLanguage(language);
                        localStorage.setItem('language', language.code);
                      }}
                    >
                      {language.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side={'top'}>
                <SheetHeader>
                  <SheetTitle>Emergency</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col items-center"></div>
                  </SheetDescription>
                  <div className="flex flex-col items-center">
                    {/* <link href={route('home')}>{__('Home')}</link>
                  <link href="#">{__('Doctor')}</link>
                  <link href={route('excellence')}>{__('Excellence')}</link>
                  <link href="#">{__('Our services')}</link> */}
                    <Button>
                      <Link href={route('home')}>{__('Appointment')}</Link>
                    </Button>
                    <Button>
                      <Link href={route('excellence')}>{__('Excellence')}</Link>
                    </Button>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
