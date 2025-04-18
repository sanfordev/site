'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { benefits, features } from '@/data';
import { Icon } from '@ui/icon';
import { Link } from '@ui/link';
import { defaultImageSizes, generateBlurPlaceholder } from '@/lib/image';
import { Shimmer } from '@ui/shimmer';
import { CldImage } from 'next-cloudinary';

export const HeroSection = () => (
  <section data-testid="hero-section">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="order-2 lg:order-1">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10  font-medium rounded-full mb-4">
          <Icon name="Code" className="w-4 h-4" />
          <span className="text-sm">React & Next.js Specialists</span>
        </span>

        <h1 className="text-display font-display text-foreground max-w-lg mb-6">
          Digital Solutions You Can Grow With
        </h1>

        <p className="text-lg max-w-lg mb-8">
          At SANFORDEV, we view tech solutions as if we're carefully and
          methodically nurturing a well-tended garden. We combine modern React
          expertise with a grounded, relationship-focused approach—helping your
          digital ideas grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            variant="cta"
            size="lg"
            aria-label="Get Started with SANFORDEV"
          >
            Get Started
            <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/portfolio"
            variant="outline"
            size="lg"
            aria-label="View SANFORDEV's Work"
          >
            View Our Work
          </Link>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/20" />
          <Suspense fallback={<Shimmer height="full" />}>
            <CldImage
              src="https://res.cloudinary.com/dsj2nt26p/image/upload/v1744268233/emblem.png"
              alt="Emblem"
              className="object-cover"
              placeholder="blur"
              blurDataURL={generateBlurPlaceholder(400, 300)}
              loading="eager"
              priority
              fill
              gradientFade
              sizes={defaultImageSizes}
            />
          </Suspense>
        </div>
      </div>
    </div>
  </section>
);

export const FeaturesSection = () => (
  <section data-testid="features-section">
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-title text-foreground mb-4">
          Cultivated Digital Solutions
        </h2>
        <p className="text-lg  max-w-3xl mx-auto">
          We nurture each project with the dedicated care of a well-tended
          orchard—melding React expertise with creativity and a genuine
          commitment to our partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl p-6 shadow-lg backdrop-blur-md bg-card text-card-foreground w-full"
          >
            <div className="rounded-full w-12 h-12 bg-sky-100 dark:bg-indigo/10 flex items-center justify-center mb-4">
              <Icon
                name={feature.icon}
                className="w-6 h-6 text-sky dark:text-indigo"
              />
            </div>
            <h3 className="text-subtitle font-subtitle text-navy dark:text-body mb-2">
              {feature.title}
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ShowcaseSection = () => (
  <section data-testid="showcase-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
      <div className="lg:col-span-7 w-full">
        <ValueProposition />
      </div>
      <div className="lg:col-span-5 w-full">
        <div className="rounded-xl bg-card text-card-foreground border border-border sticky top-24 w-full">
          <ProjectShowcase />
        </div>
      </div>
    </div>
  </section>
);

export const CallToActionSection = () => (
  <section data-testid="cta-section">
    <div className="rounded-xl p-12 text-foreground relative flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl font-title mb-4">
        Ready to transform your digital presence?
      </h2>
      <p className="text-lg max-w-2xl">
        Whether you're looking to launch a new product or enhance an existing
        one, we have the expertise to help you succeed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact"
          size="lg"
          variant="primary"
          aria-label='"Get Started with SANFORDEV">'
        >
          Get in Touch
        </Link>
        <Link
          href="/portfolio"
          variant="outline"
          size="lg"
          aria-label="View SANFORDEV's Work"
        >
          View Our Work
        </Link>
      </div>
    </div>
  </section>
);

export function ProjectShowcase() {
  return (
    <div className="rounded-xl p-8 shadow-lg backdrop-blur-md bg-card text-card-foreground">
      <div className="mb-4">
        <h3 className="text-subtitle font-subtitle text-foreground mb-2">
          Our Crafted Stories
        </h3>
        <p className="mb-4">
          Discover projects where care meets code—a fusion of React expertise
          and a down-to-earth approach.
        </p>
      </div>

      <div className="space-y-6">
        <ProjectCard
          title="Fourth Party"
          description="An innovative platform designed to simplify mediation with clarity and purpose."
          image="/images/pic13.webp"
          tags={['React', 'Modern UI', 'CRM']}
          link="/portfolio/fourth-party"
        />

        <ProjectCard
          title="Room in the Inn Memphis"
          description="A complete redesign crafted to uplift community impact through empathy and user-first design."
          image="/images/pic10.webp"
          tags={['CMS', 'JavaScript']}
          link="/portfolio/room-in-the-inn-memphis"
        />
      </div>
    </div>
  );
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}) => {
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-card">
      <div className="relative h-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          placeholder="blur"
          blurDataURL={generateBlurPlaceholder(400, 225)}
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h4 className="text-subtitle font-subtitle text-night dark:text-white mb-1">
          {title}
        </h4>

        <p className="mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-night dark:text-white px-2 py-1 bg-muted rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={link}
          variant="standaloneLink"
          size="xl"
          className="flex justify-center"
          aria-label={`View ${title} Project`}
        >
          See More
          <Icon name="ChevronRight" size={16} />
        </Link>
      </div>
    </div>
  );
};

export function ValueProposition() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-title text-foreground mb-4">
          Why SANFORDEV?
        </h2>

        <p className="text-lg mb-8">
          Imagine the care and commitment of a meticulously nurtured
          garden—every component grown with patience, passion, and precision. At
          SANFORDEV, we bring that ethos to digital work, crafting solutions in
          a carefully cultivated partnership between innovation and genuine
          collaboration. Let's grow digital greatness together.
        </p>
      </div>

      <ul className="space-y-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-3">
            <Icon name="CheckCircle" className="w-5 h-5  flex-shrink-0" />
            <span className="text-body text-foreground">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="bg-gradient-to-r from-sky/5 to-indigo/5 dark:from-sky/10 dark:to-indigo/10 p-6 rounded-lg ">
        <h3 className="text-subtitle font-subtitle text-foreground mb-3">
          Our Approach
        </h3>

        <p className="text-body  mb-4">
          We focus on truly understanding your business goals. Our process is
          about connecting on a personal level—the same way you'd tend a
          fruitful blueberry orchard. By blending hands-on React expertise with
          meticulous design and back-end precision, we create digital solutions
          that feel naturally right.
        </p>

        <Link
          href="/services"
          variant="inlineLink"
          aria-label="Discover SANFORDEV's Process"
        >
          Discover our process
        </Link>
      </div>

      <div className=" p-6 rounded-lg border border-sky/20 dark:border-indigo/20 border-l-4 border-l-sky">
        <p className="text-slate-700 dark:text-slate-200 italic mb-4">
          "SANFORDEV turned our digital challenges into a harvest of
          opportunities, merging modern tech with sincere, hands-on care."
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2 text-primary">
          <span className="font-medium">Melissa Brogdan</span>
          <span className="hidden sm:block">|</span>
          <span className="text-sm">Co-Owner, Fourth Party</span>
        </div>
      </div>
    </div>
  );
}

export const BlogHighlightSection = () => (
  <section data-testid="blog-highlight-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
      <div className="lg:col-span-5 w-full">
        <div className="sticky top-24">
          <div className="rounded-xl p-8 bg-card text-card-foreground border border-border">
            <div className="relative h-64">
              <Image
                src="/images/pic16.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                placeholder="blur"
                blurDataURL={generateBlurPlaceholder(400, 225)}
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-title text-foreground mb-4">
              Fresh Insights & Stories
            </h2>
            <p className="text-lg mb-6">
              Dive into our carefully cultivated collection of articles—where we
              share practical wisdom, emerging trends, and real experiences from
              our journey in modern web development. Like tending to a garden,
              we nurture each article with careful attention and genuine care.
            </p>
            <Link
              href="/blog"
              size="lg"
              className="inline-flex items-center"
              aria-label="Explore SANFORDEV's Blog"
            >
              Explore Our Blog
              <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ProjectCard
              title="Framer Motion Animations"
              description="Learn how we create smooth, performant animations that enhance user experience without compromising load times."
              image="/blog/framer-motion-animations.webp"
              tags={['Performance', 'Animation', 'React']}
              link="/blog/framer-motion-animations"
            />
          </div>

          <div>
            <ProjectCard
              title="Tailwind Best Practices"
              description="Discover our approach to building maintainable, scalable CSS with Tailwind in modern React applications."
              image="/blog/tailwind-best-practices.webp"
              tags={['CSS', 'Design', 'Tailwind']}
              link="/blog/tailwind-best-practices"
            />
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-sky/5 to-indigo/5 dark:from-sky/10 dark:to-indigo/10 rounded-lg border-l-4 border-l-sky">
          <h3 className="text-subtitle font-subtitle text-foreground mb-3 ">
            Why Read Our Blog?
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Icon
                name="CheckCircle"
                className="w-5 h-5 text-sky dark:text-indigo"
              />
              <span>Practical insights from real-world React projects</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                name="CheckCircle"
                className="w-5 h-5 text-sky dark:text-indigo"
              />
              <span>Performance optimization techniques & best practices</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                name="CheckCircle"
                className="w-5 h-5 text-sky dark:text-indigo"
              />
              <span>Modern development approaches & emerging trends</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
