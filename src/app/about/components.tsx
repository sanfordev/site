'use client';

import Image from 'next/image';
import { Link } from '@ui/link';
import { cn } from '@/lib/utils';
import { Icon } from '@ui/icon';
import { facts, socialLinks } from '@/data';
import LogoEmblem from '@/components/logo-emblem';

export const AboutSection = () => {
  return (
    <article
      className={cn(
        'lg:col-span-8 space-y-12',
        'bg-white dark:bg-slate-800 rounded-xl',
        'p-6 sm:p-8 lg:p-10'
      )}
    >
      {/* Hero section with image and icons */}
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden">
        <Image
          src={'/images/pic03.webp'}
          alt="Modern development workspace"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          <div>
            <Icon
              name="Code2"
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
          <div>
            <Icon
              name="Brain"
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
          <div>
            <Icon
              name="Rocket"
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      <div className="mb-10 lg:mb-14">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">📖 Our Story</h3>
        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
          Since 2018, SANFORDEV has been on a journey of transforming big ideas
          into breakthrough digital solutions. We started out partnering with
          passionate startups and today we collaborate with enterprise
          leaders—all while keeping our innovative spirit alive.
        </p>
      </div>

      <div className="mb-12 lg:mb-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>

        {/* Quote Card with Artistic Iconography */}
        <div className="relative bg-gradient-to-r from-sky/5 to-indigo/5 dark:from-sky/10 dark:to-indigo/10 rounded-lg p-8 mb-8 overflow-hidden">
          {/* Decorative Quote Marks */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10">
            <Icon
              name="Quote"
              className="w-32 h-32 text-sky dark:text-indigo"
              strokeWidth={1}
            />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
            <Icon
              name="Quote"
              className="w-32 h-32 text-sky dark:text-indigo rotate-180"
              strokeWidth={1}
            />
          </div>

          {/* Subtle Decorative Icons */}
          <div className="absolute top-1/2 left-2 -translate-y-1/2 opacity-10">
            <Icon
              name="Rocket"
              className="w-16 h-16 text-indigo dark:text-sky"
              strokeWidth={1}
            />
          </div>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 opacity-10">
            <Icon
              name="Code2"
              className="w-16 h-16 text-indigo dark:text-sky"
              strokeWidth={1}
            />
          </div>

          {/* Main Quote Content */}
          <div className="relative z-10 text-center">
            <div className="flex justify-center items-start relative mb-6">
              <Icon
                name="Quote"
                className="w-6 h-6 text-sky dark:text-indigo absolute -left-2 -top-3 rotate-180 opacity-90"
                strokeWidth={2}
              />
              <div className="text-2xl md:text-3xl font-semibold text-primary dark:text-white leading-tight px-8">
                <span>
                  Building remarkable applications that empower people through
                  functional, delightful, and accessible experiences.
                </span>
                <Icon
                  name="Quote"
                  className="w-6 h-6 text-sky dark:text-indigo inline-block ml-6 transform translate-y-1 opacity-90"
                  strokeWidth={2}
                />
              </div>
            </div>

            <cite className="block text-sm text-slate-600 dark:text-slate-300 mt-2">
              — Eliot Sanford, Founder & Lead Engineer
            </cite>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-slate-800/50 p-5 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Icon
                name="Hammer"
                className="w-6 h-6 text-sky dark:text-indigo flex-shrink-0"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-primary dark:text-white">
                Build
              </h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              We build high-performance, accessible applications that don't just
              work—they inspire and connect.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/50 p-5 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Icon
                name="Users"
                className="w-6 h-6 text-sky dark:text-indigo flex-shrink-0"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-primary dark:text-white">
                Empower
              </h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              We simplify technology to empower you—making every interaction
              intuitive and impactful.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/50 p-5 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Icon
                name="Goal"
                className="w-6 h-6 text-sky dark:text-indigo flex-shrink-0"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-primary dark:text-white">
                Innovate
              </h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              We lead with creativity and adaptability—constantly exploring new
              horizons in tech innovation.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/50 p-5 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Icon
                name="Heart"
                className="w-6 h-6 text-sky dark:text-indigo flex-shrink-0"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-primary dark:text-white">
                Support
              </h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              We stand together—nurturing a community that values diversity,
              collaboration, and heart.
            </p>
          </div>
        </div>
      </div>

      {/* Combined Community and Leadership Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🤝 Community Involvement
          </h3>

          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
            Beyond client work, we invest in tech education and empower
            communities to rise together:
          </p>

          <ul className="space-y-2 mb-4 text-base leading-relaxed">
            {[
              'Founding freeCodeCamp Jackson, MS',
              'Mentoring at Base Camp Coding Academy',
              'Teaching web development to underrepresented youth',
              'Contributing to open source education',
              'Supporting nonprofits through GiveCamp',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-sky dark:text-indigo">•</span>
                <span className="text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">💻 Leadership</h3>

          <div className="bg-white/50 dark:bg-slate-800/30 rounded-xl p-6 ">
            <div className="flex flex-col sm:flex-row gap-6 mb-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/authors/eliot.webp"
                  alt="Eliot Sanford"
                  fill
                  sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw,
                  33vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-1 text-center sm:text-left">
                  Eliot Sanford
                </h4>
                <p className="text-indigo dark:text-sky font-medium mb-2 text-center sm:text-left">
                  Lead Engineer
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  With over 6 years steering the React ecosystem, I've helped
                  guide both startups and enterprise teams focusing on
                  performance, accessibility, and scalable solutions. Follow me
                  on Twitter at{' '}
                  <Link
                    href="https://twitter.com/techieEliot"
                    variant="inlineLink"
                  >
                    @techieEliot
                  </Link>
                  .
                </p>
                {/* Social Links */}
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-4">
                  <Link
                    href="https://www.techieeliot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky-100 dark:bg-indigo/10 text-indigo dark:text-sky hover:bg-sky/20 dark:hover:bg-indigo/20 transition-colors"
                    aria-label="Go to Eliot's Website"
                  >
                    <Icon name="Globe" className="w-4 h-4" />
                    <span>Website</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/techieeliot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky-100 dark:bg-indigo/10 text-indigo dark:text-sky hover:bg-sky/20 dark:hover:bg-indigo/20 transition-colors"
                    aria-label="Go to Eliot's LinkedIn profile"
                  >
                    <Icon name="Linkedin" className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/techieeliot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky-100 dark:bg-indigo/10 text-indigo dark:text-sky hover:bg-sky/20 dark:hover:bg-indigo/20 transition-colors"
                    aria-label="Go to Eliot's GitHub profile techie eliot"
                  >
                    <Icon name="Github" className="w-4 h-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="mailto:techieEliot@gmail.com"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky-100 dark:bg-indigo/10 text-indigo dark:text-sky hover:bg-sky/20 dark:hover:bg-indigo/20 transition-colors"
                    aria-label="Get in touch with Eliot at techieEliot@gmail.com"
                  >
                    <Icon name="Mail" className="w-4 h-4" />
                    <span>Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blueberry Story Section */}
        <div className="col-span-1 md:col-span-2 mt-8">
          <BlueberryStory />
        </div>
      </section>
    </article>
  );
};

export const CompanyFacts = () => {
  return (
    <section
      className={cn(
        'bg-white dark:bg-slate-800',
        'border border-slate-200 dark:border-slate-700',
        'p-6 sm:p-8 rounded-xl'
      )}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-6">Company Facts</h3>

      <ul className="space-y-5">
        {facts.map(({ label, value, icon }) => (
          <li key={label} className="flex items-start gap-3">
            <Icon
              name={icon || 'Info'} // Fallback to "Info" icon if none specified
              className="w-5 h-5 text-sky dark:text-indigo mt-1 flex-shrink-0"
            />
            <div className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-primary dark:text-white">{label}:</strong>
              <br />
              {value}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const ConnectWithUs = () => {
  return (
    <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 rounded-xl">
      <h3 className="text-2xl md:text-3xl font-bold mb-6">Connect With Us</h3>

      <div className="space-y-5">
        {socialLinks.map(({ href, label, icon }) => (
          <div key={href} tabIndex={-1}>
            <Link
              href={href}
              className="flex justify-start gap-8 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`Go to ${label}`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  name={icon}
                  className="w-5 h-5  text-sky dark:text-indigo"
                />
                <span className="text-left">{label}</span>
              </div>
              <div>
                <Icon name="ExternalLinkIcon" className="w-4 h-4" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export function BlueberryStory() {
  return (
    <section className="bg-gradient-to-r from-sky/5 to-indigo/5 dark:from-sky/10 dark:to-indigo/10 rounded-xl p-6">
      <div className="flex flex-col items-center gap-8">
        <LogoEmblem size="xl" />
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🌱 The Logo 🫐
          </h3>
          <p className="text-base leading-relaxed mb-4">
            Our logo tells a story of our roots and our mission. The ring
            surrounding the atom represents a blueberry, a nod to our
            Mississippi heritage and our commitment to growth. Seeing any plant
            to fruit is a labor of love, and we believe that the same care and
            attention should be given to the technology we create. Just as a
            blueberry grows from a seed to a fruit, we nurture our projects from
            concept to completion, ensuring that they are not only functional
            but also remarkable and delightful. Inside the blueberry, there is a
            React atom, symbolizing our focus on React.js web development. The
            atom represents our core belief in building applications that are
            not only reactive and fast but also accessible and user-friendly.
            The React atom is in the center of the blueberry, also known as the
            calyx, reprsents our core belief in React.js web development. We
            believe in supporting grassroots efforts, and our logo reflects
            that. The blueberry is a symbol of our commitment to nurturing both
            technology and relationships. While we're city folks at heart, our
            family's agrarian roots inspire our grounded approach.
          </p>
          <p className="text-base leading-relaxed italic">
            And fun fact: Eliot's blue compact sedan was affectionately named
            the "Blueberry", too!
          </p>
        </div>
      </div>
    </section>
  );
}
