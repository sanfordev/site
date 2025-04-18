'use client';

import { cn } from '@/lib/utils';
import { CompanyInfo, Contact, QuickLinks, Copyright } from './components';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={cn(
        'w-full relative overflow-hidden',
        'bg-card dark:bg-card',
        'text-slate-700 dark:text-frost',
        'border-t border-border'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-12 py-12">
          <div className="md:col-span-1 lg:col-span-4">
            <CompanyInfo />
          </div>
          <div className="md:col-span-1 lg:col-span-3">
            <QuickLinks showHeading={true} />
          </div>
          <div className="md:col-span-1 lg:col-span-5">
            <Contact />
          </div>
        </div>

        <Copyright currentYear={currentYear} />
      </div>
    </div>
  );
}
