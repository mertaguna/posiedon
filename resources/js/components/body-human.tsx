import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { __ } from '@/lib/lang';

import { BodyComponent } from '@darshanpatel2608/human-body-react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const BodyPart = {};

export function BodyHuman() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPart, setSelectedPart] = useState<string | undefined>();
  const [menu, setMenu] = useState<
    { label: string; action: string; description: string }[]
  >([]);
  const [description, setDescription] = useState<string>('');

  const handleClick = (part: string) => {
    setSelectedPart(part);
    setIsOpen(true);
    setMenu(getMenu(part));
    setDescription(getDescription(part));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const getDescription = (part: string) => {
    switch (part) {
      case 'head':
        return __('Deskripsi tentang kepala.');
      case 'left_shoulder':
        return __('Deskripsi tentang orthopedi.');
      case 'shoulder':
        return __('Deskripsi tentang bahu.');
      // Add descriptions for other body parts
      default:
        return __('Deskripsi tidak tersedia.');
    }
  };

  const getMenu = (part: string) => {
    switch (part) {
      case 'head':
        return [
          {
            label: 'Neurologi',
            action: '/',
            description: 'Otak',
          },
          {
            label: 'Cari dokter spesialis kepala',
            action: '/cari-dokter-kepala',
            description: 'Otak',
          },
        ];
      case 'left_shoulder':
        return [
          {
            label: 'Informasi tentang orthopedi',
            action: '/informasi-leher',
            description: 'Otak',
          },
          {
            label: 'Cari dokter spesialis leher',
            action: '/cari-dokter-leher',
            description: 'Otak',
          },
        ];
      case 'shoulder':
        return [
          {
            label: 'Informasi tentang bahu',
            action: '/informasi-bahu',
            description: 'Otak',
          },
          {
            label: 'Cari dokter spesialis bahu',
            action: '/cari-dokter-bahu',
            description: 'Otak',
          },
        ];
      // Add cases for other body parts
      default:
        return [];
    }
  };

  return (
    <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-950 via-blue-900 to-slate-900 py-44">
      <BodyComponent
        onClick={(part: string) => handleClick(part)}
        partsInput={BodyPart}
      />
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedPart}?</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 flex flex-col">
              {menu.map((item, index, description) => (
                <Link
                  key={index}
                  href={item.action}
                  className="rounded-l bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300"
                >
                  {item.label}
                  <h3>{item.description}</h3>
                </Link>
              ))}
              <button
                className="rounded-l bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300"
                onClick={handleClose}
              >
                Back
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
