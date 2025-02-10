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
import { useEffect, useState } from 'react';

export function Navbar() {
  const { auth } = usePage<PageProps>().props;
  const languages = [
    { name: 'English', code: 'en', icon: <FlagEnglish className="size-6" /> },
    { name: 'Bahasa', code: 'id', icon: <FlagIndo className="size-6" /> },
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
    <nav className="border-b bg-background py-4 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <AppLogo className="size-12" />
              <span className="sr-only">go to home page</span>
              <h1 className="ml-2 font-sans text-xl font-semibold text-foreground">
                {__('Garbaméd Hospital')}
              </h1>
            </div>
          </Link>

          <div className="flex items-center space-x-6 font-sans font-semibold">
            <Navlink href={route('home')}>{__('Home')}</Navlink>
            <Navlink href={route('about')}>{__('About us')}</Navlink>
            <Navlink href="#">{__('Our services')}</Navlink>
            <Navlink href="#">{__('Doctor')}</Navlink>
            <DropdownMenu>
              <DropdownMenuTrigger>{selectedLanguage.icon}</DropdownMenuTrigger>
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
        'rounded-md px-2 py-1.5 text-sm transition duration-150 ease-in-out hover:bg-secondary hover:text-secondary-foreground focus:outline-none',
        current ? 'font-semibold text-foreground' : 'text-muted-foreground',
        classname,
      )}
      {...props}
    />
  );
}
