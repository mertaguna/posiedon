import { __ } from '@/lib/lang';
import { TextEffect } from './text-effect';

export function HomeText() {
  return (
    <div className="flex flex-col space-y-0">
      <TextEffect
        className="font-sans text-4xl font-extrabold leading-snug tracking-normal text-foreground [text-shadow:_3px_2px_4px_rgb(99_102_241_/_0.3)] lg:text-5xl"
        per="char"
        delay={0.5}
        variants={{
          container: {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              rotateX: 90,
              y: 10,
            },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          },
        }}
      >
        {__('Your Health')}
      </TextEffect>
      <TextEffect per="char" delay={1.5}>
        with motion-primitives
      </TextEffect>
      <TextEffect
        per="char"
        delay={2.5}
        className="pt-12 text-xs"
        preset="blur"
      >
        (and delay!)
      </TextEffect>
    </div>
  );
}
