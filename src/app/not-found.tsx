'use client';

import { Icon } from '@ui/icon';
import { Link } from '@ui/link';
import { useEffect, useState } from 'react';
import PageWrapper from '@/components/PageWrapper';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    // Capture referring page for better UX
    setPreviousPage(document.referrer);

    // Log 404s to analytics
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      console.log(`404 error: ${path}`); // Replace with your analytics tracking
    }
  }, []);

  if (!mounted) {
    return null; // Prevents hydration mismatch
  }

  return (
    <PageWrapper>
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="text-center max-w-xl">
          <div className="mb-8 flex justify-center text-9xl">🌻</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            404 - Page Not Found
          </h1>
          <p className="text-base leading-relaxed mb-8">
            Whoops! It seems you've wandered off the beaten path. Not all who
            wander are lost—sometimes you make a happy little accident and
            stumble upon unexpected beauty. Let's get you back home.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" variant="cta" aria-label="Back to Home page">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            {previousPage && (
              <Link
                href={previousPage}
                variant="secondary"
                aria-label="Go back to previous page"
              >
                <Icon name="Undo2" className="w-4 h-4 mr-2" />
                Go Back
              </Link>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
