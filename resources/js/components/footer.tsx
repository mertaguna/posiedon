import { __ } from '@/lib/lang';
import { Link } from '@inertiajs/react';
import { Mail, MapPin } from 'lucide-react';
import { AppLogo } from './app-logo';
import { Container } from './container';
import { IconWhatsapp } from './flag';

export function Footer() {
  return (
    <Container className="bg-gradient-to-br from-primary to-blue-700 pt-10">
      <div className="row-gap-6 mb-8 grid gap-10 text-white md:grid-cols-5">
        <div className="sm:col-span-2">
          <Link href="/">
            <div className="flex items-center">
              <AppLogo className="size-8 lg:size-16" />
              <span className="sr-only">go to home page</span>
              <div className="flex flex-col">
                <div className="ml-2 font-sans text-sm font-medium leading-snug md:text-2xl lg:text-xl">
                  {__('Garbaméd Hospital')}
                </div>
                <div className="ml-2">Safety and Integrity</div>
              </div>
            </div>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm">{__('Description footer')}</p>
            <p className="mt-4 text-sm">
              {__(
                'We are committed to providing the best possible care for our patients. ',
              )}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <p className="text-base font-bold tracking-wide">Pages</p>
          <div className="underline-offset-8 hover:underline">
            <Link href="#">{__('Awards and Certifications')}</Link>
          </div>
          <div className="underline-offset-8 hover:underline">
            <Link href="#">{__('Teleconsultation')}</Link>
          </div>
          <div className="underline-offset-8 hover:underline">
            <Link href="#">{__('Our services')}</Link>
          </div>
          <div className="underline-offset-8 hover:underline">
            <Link href={route('about')}>{__('About us')}</Link>
          </div>
          <div className="underline-offset-8 hover:underline">
            <Link href="#">{__('Career')}</Link>
          </div>
          <div className="underline-offset-8 hover:underline">
            <Link href="#">{__('FAQs')}</Link>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <p className="text-base font-bold tracking-wide">Contacts</p>
          <div className="flex items-center">
            <IconWhatsapp className="mr-3 size-5 fill-white" />
            <Link
              href="tel:850-123-5021"
              aria-label="Our whatsapp"
              title="Our whatsapp"
              className="underline-offset-8 transition-colors duration-300 hover:underline"
            >
              +62 812 5286 6162
            </Link>
          </div>
          <div className="flex text-center">
            <Mail className="mr-3 size-5" />
            <Link
              href="mailto:info@garbamedhospital.co.id"
              aria-label="Our email"
              title="Our email"
              className="underline-offset-8 transition duration-300 hover:underline"
            >
              info@garbamedhospital.co.id
            </Link>
          </div>

          <div className="flex items-center">
            <MapPin className="mr-3 size-5" />
            <Link
              href="https://www.google.com/maps/place/RSU+GARBA+MED/data=!4m2!3m1!1s0x0:0xe5fc310e52675a26?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="underline-offset-8 transition-colors duration-300 hover:underline"
            >
              Jl. Raya Kerobokan No.53
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-bold tracking-wide">
            Let's Connect With Us
          </h2>
          <div className="mt-1 flex items-center space-x-3">
            <Link
              aria-label="instagram"
              href="https://www.instagram.com/garbamedhospital_"
              className="transition-colors duration-300"
            >
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
                <div className="text-sm underline-offset-8 hover:underline">
                  @garbamedhospital_
                </div>
              </div>
            </Link>
          </div>
          <p className="mt-4 text-sm">
            Get in touch with us to learn more about our services and how we can
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between border-t pb-10 pt-5 text-white lg:flex-row">
        <p className="text-sm">
          © Copyright 2025 Lorem Inc. All rights reserved.
        </p>
        <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
          <li>
            <Link href="/" className="text-sm transition-colors duration-300">
              F.A.Q
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm">
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
