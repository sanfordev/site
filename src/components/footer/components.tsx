'use client';

import { cn } from '@/lib/utils';
import { Link } from '@ui/link';
import { companySocialLinks, quickLinks } from '@/data';

import { Icon, IconName } from '../ui/icon';
import { CldImage } from 'next-cloudinary';

export function QuickLinks({ showHeading = false }) {
  return (
    <div className={cn('w-full', showHeading ? 'mb-6' : 'mb-0')}>
      {showHeading && (
        <h3 className="text-slate-800 dark:text-frost text-xl font-semibold mb-6 text-center md:text-left">
          Quick Links
        </h3>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {quickLinks.map(({ href, label, icon }) => (
          <li
            key={href}
            className="w-full flex justify-center md:justify-start"
          >
            <Link
              href={href}
              variant="standaloneLink"
              className={cn(
                'group flex items-center gap-1 xl:gap-3',
                'py-2 px-2 lg:px-3 rounded-md',
                'hover:bg-sky/5 dark:hover:bg-indigo/5',
                'transition-colors duration-200',
                'text-slate-600 dark:text-slate-300',
                'hover:text-sky dark:hover:text-indigo',
                'text-base',
                'w-full max-w-[250px] md:max-w-none',
                'justify-center md:justify-start'
              )}
            >
              <Icon
                name={icon}
                className="w-4 h-4 flex-shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-sky dark:group-hover:text-indigo transition-colors"
              />
              <span className="font-medium">{label}</span>
              <Icon
                name="ChevronRight"
                className={cn(
                  'w-3.5 h-3.5 flex-shrink-0',
                  'text-slate-300 dark:text-slate-600',
                  'group-hover:text-sky dark:group-hover:text-indigo',
                  'opacity-0 group-hover:opacity-100 transition-all',
                  'lg:ml-auto'
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ContactItemProps {
  icon: IconName;
  href: string;
  children: React.ReactNode;
  variant?: 'nav' | 'primary';
  showExternalIcon?: boolean;
}

function ContactItem({
  icon,
  href,
  children,
  variant = 'nav',
  showExternalIcon = true,
}: ContactItemProps) {
  return (
    <div className="flex md:flex-col lg:flex-row items-center justify-center sm:justify-start gap-3 md:gap-4 lg:gap-5 max-w-[300px] mx-auto sm:mx-0 w-fit">
      <div className="p-2 rounded-full bg-sky-100 dark:bg-indigo/10 shrink-0">
        <Icon name={icon} className="w-5 h-5 text-sky dark:text-indigo" />
      </div>
      <Link
        href={href}
        variant={variant}
        className={cn(
          'text-slate-600 dark:text-frost/80',
          'hover:text-sky dark:hover:text-indigo',
          'group flex items-center gap-1',
          'break-words whitespace-pre',
          'w-full'
        )}
      >
        {children}
        {showExternalIcon && (
          <span className="inline-flex">
            <Icon name="ExternalLink" className="w-3 h-3" />
          </span>
        )}
      </Link>
    </div>
  );
}

// Update Contact component

export function Contact() {
  return (
    <section className="widget contact text-center md:text-left">
      <h3 className="text-slate-800 dark:text-frost text-xl font-semibold mb-6">
        Contact Us
      </h3>
      <div className="space-y-5 flex flex-col items-center md:items-start">
        <ContactItem icon="Mail" href="mailto:hey@sanfor.dev">
          hey@sanfor.dev
        </ContactItem>
        <ContactItem icon="Phone" href="tel:+16623126815">
          +1 (662) 312-6815
        </ContactItem>
        <ContactItem
          icon="MapPin"
          href="https://www.google.com/maps/place/110+Lake+Forest+Ln,+Clinton,+MS+39056"
          showExternalIcon={false}
        >
          <address className="text-slate-600 dark:text-frost/80 not-italic">
            110 Lake Forest Ln
            <br />
            Clinton, MS 39056
          </address>
        </ContactItem>
      </div>
    </section>
  );
}

// Update CompanyInfo component

export function CompanyInfo() {
  return (
    <div className="text-center lg:text-left ">
      <div className="flex items-center justify-center lg:justify-start gap-3">
        <CldImage
          src="atom"
          alt="SANFORDEV Logo"
          width={52}
          height={52}
          className="rounded-full"
        />
        <h3 className="text-slate-800 dark:text-frost text-xl font-semibold mb-6">
          About SANFORDEV
        </h3>
      </div>
      <p className="text-slate-600 dark:text-frost/80 mb-5">
        We build modern web applications with a focus on React, Next.js, and the
        broader JavaScript ecosystem. Our mission is to make the web more
        accessible, performant, and delightful.
      </p>
      <SocialLinks />
    </div>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
      {companySocialLinks.map(({ href, icon, label, color }) => (
        <div key={href}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center justify-center',
              'w-10 h-10 rounded-full',
              'transition-all duration-300',
              color,
              'dark:text-frost/90'
            )}
            aria-label={label}
          >
            <Icon name={icon} className="w-5 h-5" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export function Copyright({ currentYear }: { currentYear: number }) {
  return (
    <div
      className={cn(
        'border-t border-slate-200 dark:border-slate-800',
        'mt-12 pt-8 pb-8'
      )}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-2">
          <p className="text-sm text-slate-600 dark:text-frost/80 flex items-center">
            &copy; {currentYear} SANFORDEV Consulting. All rights reserved.
          </p>
          <Link
            href="/privacy"
            variant="inlineLink"
            className="text-sm text-slate-600 dark:text-frost/80"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            variant="inlineLink"
            className="text-sm text-slate-600 dark:text-frost/80"
          >
            Terms of Service
          </Link>
        </div>

        <MadeWithLove />
      </div>
    </div>
  );
}

function MadeWithLove() {
  return (
    <div className="text-sm text-slate-500 dark:text-frost/70 flex items-center gap-1">
      Made with
      <span className="inline-flex items-center mx-1">
        <Icon name="Heart" className="w-4 h-4 text-red-500 fill-current" />
      </span>
      in Mississippi
    </div>
  );
}
