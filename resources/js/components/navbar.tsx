import { AppLogo } from '@/components/app-logo';
import { Container } from '@/components/container';
import { FlagEnglish, FlagIndo } from '@/components/flag';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { __ } from '@/lib/lang';
import { cn } from '@/lib/utils';
import { PageProps } from '@/types';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react';
import { Calendar, Headset, Siren } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ButtonCustom } from './ui/button-custom';

export function Navbar() {
  const { auth } = usePage<PageProps>().props;
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

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      const language = languages.find((lang) => lang.code === storedLanguage);
      if (language) {
        setSelectedLanguage(language);
      } else {
        setSelectedLanguage(languages[0]);
      }
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 hidden bg-background/90 backdrop-blur-lg lg:block">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <AppLogo className="size-16" />
              <span className="sr-only">go to home page</span>
              <div className="flex flex-col">
                <div className="ml-2 font-sans text-xl font-semibold leading-snug text-primary [text-shadow:_3px_2px_4px_rgb(99_102_241_/_0.3)] md:text-2xl">
                  {__('Garbaméd Hospital')}
                </div>
                <div className="ml-2">Safety and Integrity</div>
              </div>
            </div>
          </Link>
          <div className="flex flex-col space-y-2 p-0">
            <div className="flex flex-row-reverse pb-2">
              <div className="flex flex-row gap-3 font-bold">
                <div className="flex cursor-pointer items-center rounded-full underline-offset-8 hover:underline hover:decoration-red-500">
                  <Siren className="size-4 fill-amber-200 stroke-rose-600" />
                  <h3 className="ml-2 text-xs text-rose-800">
                    +62 812 5286 6162
                  </h3>
                </div>
                <div className="flex cursor-pointer items-center rounded-full underline-offset-8 hover:underline hover:decoration-primary">
                  <Headset className="size-4 stroke-primary" />
                  <div className="ml-2 text-xs text-primary">
                    (0361) 909 3584
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 font-sans font-semibold">
              <Navlink current={route().current('home')} href={route('home')}>
                {__('Home')}
              </Navlink>
              <Navlink
                current={route().current('specialist.index')}
                href={route('specialist.index')}
              >
                {__('Our Specialist')}
              </Navlink>
              <Navlink href="#">{__('Our services')}</Navlink>

              <ButtonCustom
                effect="shine"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 font-bold"
              >
                <Calendar className="mr-2 size-4 stroke-[3px]" />
                <Link href={route('home')}>{__('Appointment')}</Link>
              </ButtonCustom>
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
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

interface NavlinkProps extends InertiaLinkProps {
  current?: boolean;
  classname?: string;
}

export function Navlink({ current, classname, ...props }: NavlinkProps) {
  return (
    <Link
      className={cn(
        'rounded-xl px-4 py-2.5 text-sm underline-offset-8 transition duration-300 ease-in-out hover:underline focus:outline-none',
        current
          ? 'font-semibold text-primary underline underline-offset-8'
          : 'text-slate-800 hover:text-primary',
        classname,
      )}
      {...props}
    />
  );
}
