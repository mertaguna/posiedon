'use client';

import { InfiniteMovingPartner } from './ui/infinite-moving-partner';

export function MovingCardsPartner() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased">
      <InfiniteMovingPartner
        items={iconPartner1}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingPartner
        items={iconPartner2}
        direction="left"
        speed="fast"
      />
      <InfiniteMovingPartner
        items={iconPartner3}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const iconPartner1 = [
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
];
const iconPartner2 = [
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
];
const iconPartner3 = [
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
