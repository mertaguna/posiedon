import { cn } from '@/lib/utils';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { Check, X } from 'lucide-react';
import { Fragment, useState } from 'react';
import { Badge } from './ui/badge';

interface Tag {
  id: number;
  name: string;
}

interface MultiSelectProps {
  data: Tag[];
  selectedItems: Tag[];
  onChange: (selectedItems: Tag[]) => void;
  buttonClassName?: string;
}

export default function MultiSelect({
  data,
  selectedItems,
  onChange,
  buttonClassName,
}: MultiSelectProps) {
  const [selected, setSelected] = useState<Tag[]>(selectedItems);
  const [query, setQuery] = useState('');

  const handleChange = (items: Tag[]) => {
    setSelected(items);
    onChange(items);
  };

  const removeTag = (tag: Tag) => {
    const newSelected = selected.filter((item) => item.id !== tag.id);
    setSelected(newSelected);
    onChange(newSelected);
  };

  const filteredData =
    query === ''
      ? data
      : data.filter((tag) =>
          tag.name.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <div className="relative mt-1">
      <Listbox value={selected} onChange={handleChange} multiple>
        <ListboxButton
          className={cn(
            'relative w-full cursor-default rounded-lg border bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
            buttonClassName,
          )}
        >
          <div className="flex flex-wrap gap-1">
            {selected.length > 0 ? (
              selected.map((item) => (
                <span
                  key={item.id}
                  className="flex items-center gap-1 rounded-md bg-slate-200 px-2 py-1 text-xs font-medium text-slate-950"
                >
                  {item.name}
                  <Badge
                    variant={'outline'}
                    className="border-none px-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTag(item);
                    }}
                  >
                    <X className="size-3" />
                  </Badge>
                </span>
              ))
            ) : (
              <span className="text-gray-400">Select tags</span>
            )}
          </div>
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
            <div className="sticky top-0 z-10 bg-white px-3 py-1">
              <input
                type="text"
                className="w-full rounded-md border-none bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-slate-900 sm:text-sm"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            {filteredData.map((item) => (
              <ListboxOption
                key={item.id}
                className={({ focus }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    focus ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <Check className="h-5 w-5" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
}
