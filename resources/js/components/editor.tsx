import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import { marked } from 'marked';
import { Fragment, TextareaHTMLAttributes } from 'react';

interface EditorProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
}

export default function Editor({ value, ...props }: EditorProps) {
  return (
    <TabGroup>
      <TabList className="mb-2 flex items-center gap-x-4 pl-2">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={clsx(
                'rounded-lg text-sm focus:outline-none',
                selected ? 'text-semibold font-semibold' : 'text-gray-500',
              )}
            >
              Input
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={clsx(
                'rounded-lg text-sm focus:outline-none',
                selected ? 'text-semibold font-semibold' : 'text-gray-500',
              )}
            >
              Preview
            </button>
          )}
        </Tab>
      </TabList>
      <TabPanels className="overflow-y-auto rounded-lg border">
        <TabPanel>
          <textarea
            value={value}
            className="h-[240px] w-full border-0 p-4 focus:border-0 focus:ring-0"
            {...props}
          ></textarea>
        </TabPanel>
        <TabPanel>
          <div
            className="prose prose-blue prose-img:rounded-lg max-w-none p-4"
            dangerouslySetInnerHTML={{ __html: marked(value) }}
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
