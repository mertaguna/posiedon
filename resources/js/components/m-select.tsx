import { cn } from '@/lib/utils';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { Check } from 'lucide-react';
import { Fragment } from 'react';

interface MSelectProps {
  data: { id: number; name: string; slug: string }[];
  value: number;
  onChange: (value: number) => void;
  buttonClassName?: string;
  optionClassName?: string;
  selectedOptionClassName?: string;
}

export default function MSelect({
  data,
  value,
  onChange,
  buttonClassName,
  optionClassName,
  selectedOptionClassName,
}: MSelectProps) {
  const selected = data.find((item) => item.id === value) || data[0];

  const handleChange = (item: { id: number; name: string }) => {
    onChange(item.id);
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      <div className="relative mt-1">
        <ListboxButton
          className={cn(
            'relative w-full cursor-default rounded-lg border bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
            buttonClassName,
          )}
        >
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </ListboxButton>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map((item) => (
              <ListboxOption
                key={item.id}
                className={({ focus }) =>
                  cn(
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                    focus ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    optionClassName,
                  )
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={cn(
                        'block truncate',
                        selected ? 'font-medium' : 'font-normal',
                        selected && selectedOptionClassName,
                      )}
                    >
                      {item.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <Check className="size-5" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}
