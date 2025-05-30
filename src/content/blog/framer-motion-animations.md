---
title: 'Creating Fluid Animations with Framer Motion'
publishedAt: '2025-04-01'
summary: 'Learn how to create smooth, engaging animations in React applications using Framer Motion with practical examples and best practices.'
image: '/blog/framer-motion-animations.webp'
author:
  {
    name: 'Eliot Sanford',
    image: '/authors/eliot.webp',
    social:
      {
        twitter: 'techieeliot',
        github: 'techieeliot',
        linkedin: 'techieeliot',
        website: 'https://techieeliot.com/',
      },
  }
tags: ['animations', 'react.js', 'framer-motion']
featured: true
---

Animations can turn a static screen into a vibrant experience—much like the gentle sway of a flourishing garden.
Framer Motion is your go-to tool for crafting dynamic, engaging animations in React that feel natural and refined.

## Getting Started

First, install Framer Motion:

```bash
npm install framer-motion
# or
yarn add framer-motion
# or
pnpm add framer-motion
```

The magic begins with the `motion` component, which brings an element to life:

```jsx
import { motion } from 'framer-motion';

export default function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}
```

## Animation Fundamentals

### The Animate Prop

The `animate` prop tells your component its final state. For example:

```jsx
<motion.div
  animate={{
    x: 100,
    backgroundColor: '#ff0000',
    boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
    rotate: 180,
    scale: 1.2,
  }}
/>
```

### Transitions

Customize your animations with the `transition` prop. Framer Motion supports several types:

```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 0.2,
  }}
/>
```

### Hover and Tap Interactions

Add interactivity using `whileHover` and `whileTap`:

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-4 py-2 bg-purple-600 text-white rounded-md"
>
  Hover & Click Me
</motion.button>
```

## Advanced Animation Techniques

### Variants for Coordinated Animations

Variants let you manage complex animations by defining states outside your JSX:

```jsx
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

function Card() {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <motion.h2 variants={itemVariants} className="text-xl mb-4">
        Card Title
      </motion.h2>
      <motion.p variants={itemVariants} className="mb-4">
        Content that feels as gentle as a breeze over ripe blueberries.
      </motion.p>
      <motion.button
        variants={itemVariants}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}
```

> 🫐 (Optional playful nod) While some liken animation to the rhythm of nature, here we celebrate the art of cultivating movement.

### Gestures, Drag, and Scroll-Based Animations

Framer Motion easily adds gestures and drag functionality. For example:

```jsx
<motion.div
  drag
  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
  dragElastic={0.2}
  whileDrag={{ scale: 1.1 }}
  className="w-32 h-32 bg-green-500 rounded-lg cursor-grab"
/>
```

Use `useScroll` to connect animations to scroll position:

```jsx
import { motion, useScroll } from 'framer-motion';

function ScrollAnimatedSection() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        opacity: scrollYProgress,
        scale: scrollYProgress.interpolate([0, 1], [0.8, 1]),
      }}
      className="h-screen flex items-center justify-center"
    >
      <h1 className="text-4xl">Scroll to feel the motion!</h1>
    </motion.div>
  );
}
```

## Conclusion

Framer Motion gives you the tools to animate your React applications with the subtlety of nature—adding movement that feels organic and engaging. Whether you're drawing users' attention or injecting life into a static screen, let your animations give your reader's a more engaging experience.

Happy animating!
