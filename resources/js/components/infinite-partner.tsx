import { InfiniteSlider } from './ui/infinite-slider';

const itemsIcon = [
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

interface Partner {
  name: string;
  icon: string;
}

interface InfinitePartnerProps {
  items: Partner[];
}

export function InfinitePartner({ items }: InfinitePartnerProps) {
  return (
    <InfiniteSlider durationOnHover={100} gap={24}>
      {items.map((item, index) => (
        <img
          className="flex h-[350px] max-h-11 space-x-4 md:max-h-16"
          src={item.icon}
          alt={item.name}
          key={index}
        />
      ))}
    </InfiniteSlider>
  );
}

// Usage of InfinitePartner component
export default function InfinitePartnerIcon() {
  return <InfinitePartner items={itemsIcon} />;
}
