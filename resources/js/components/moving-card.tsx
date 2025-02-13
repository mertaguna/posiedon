'use client';

import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { InfiniteMovingPartner } from './ui/infinite-moving-partner';

export function MovingCardsTestimoni() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

export function MovingCardsPartner() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased">
      <InfiniteMovingPartner
        items={iconPartner}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingPartner
        items={iconPartner}
        direction="left"
        speed="fast"
      />
      <InfiniteMovingPartner
        items={iconPartnerReserved}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
  },
];

const iconPartner = [
  {
    name: 'Charles Dickens',
    icon: '/medpart/1.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/2.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/3.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/4.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/5.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/6.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/7.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/8.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/9.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/10.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/11.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/12.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/13.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/14.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/15.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/16.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/17.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/18.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/19.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/20.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/21.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/22.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/23.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/24.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/25.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/26.png',
  },
];

const iconPartnerReserved = [
  {
    name: 'Charles Dickens',
    icon: '/medpart/26.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/25.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/24.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/23.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/22.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/21.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/20.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/19.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/18.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/17.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/16.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/15.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/14.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/13.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/12.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/11.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/10.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/9.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/8.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/7.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/6.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/5.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/4.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/3.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/2.png',
  },
  {
    name: 'Charles Dickens',
    icon: '/medpart/1.png',
  },
];
