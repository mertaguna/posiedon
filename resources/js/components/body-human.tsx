import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { BodyComponent } from '@darshanpatel2608/human-body-react';
import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const BodyPart = {};

export function BodyHuman() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPart, setSelectedPart] = useState<string | undefined>();
  const [menu, setMenu] = useState<
    { label: string; action: string; description: string }[]
  >([]);
  const [description, setDescription] = useState<{ name: string }[]>([]);

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
        return [
          {
            name: 'Kepala',
          },
        ];
      case 'chest':
        return [
          {
            name: 'Dada',
          },
        ];
      case 'stomach':
        return [
          {
            name: 'Perut',
          },
        ];
      case 'left_shoulder':
        return [
          {
            name: 'Bahu Kiri',
          },
        ];
      case 'shoulder':
        return [
          {
            name: 'Bahu',
          },
        ];
      // Add descriptions for other body parts
      default:
        return [
          {
            name: 'blm ada',
          },
        ];
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
        ];
      case 'chest':
        return [
          {
            label: 'Kardiologi',
            action: '/',
            description: 'Jantung',
          },
          {
            label: 'Klinik Paru Terpadu',
            action: '/',
            description: 'Paru-paru',
          },
        ];
      case 'stomach':
        return [
          {
            label: 'Digestif',
            action: '/',
            description: 'Hati',
          },
          {
            label: 'Andrologi',
            action: '/',
            description: 'Perut',
          },
          {
            label: 'Fertilitas',
            action: '/',
            description: 'Perut',
          },
          {
            label: 'Endourologi',
            action: '/',
            description: 'Ginjal',
          },
          {
            label: 'Pediatri',
            action: '/',
            description: 'Ginjal',
          },
          {
            label: 'Urologi Onkologi',
            action: '/',
            description: 'Ginjal',
          },
        ];
      case 'left_shoulder':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Bahu Kanan',
          },
        ];
      case 'left_arm':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Lengan Kiri',
          },
        ];
      case 'left_hand':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Tangan Kiri',
          },
        ];
      case 'right_shoulder':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Bahu Kanan',
          },
        ];
      case 'right_arm':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Lengan Kanan',
          },
        ];
      case 'right_hand':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Tangan Kanan',
          },
        ];
      case 'left_leg_upper':
        return [
          {
            label: 'Fertilitas',
            action: '/',
            description: 'Panggul',
          },
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Paha',
          },
        ];
      case 'left_leg_lower':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Lutut',
          },
        ];
      case 'left_foot':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Kaki',
          },
        ];
      case 'right_leg_upper':
        return [
          {
            label: 'Fertilitas',
            action: '/',
            description: 'Panggul',
          },
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Paha',
          },
        ];
      case 'right_leg_lower':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Lutut',
          },
        ];
      case 'right_foot':
        return [
          {
            label: 'Orthopedi',
            action: '/',
            description: 'Kaki',
          },
        ];

      // Add cases for other body parts
      default:
        return [];
    }
  };

  return (
    <div className="bg-gradient-to-tr from-primary to-blue-700 py-3">
      <BodyComponent
        onClick={(part: string) => handleClick(part)}
        partsInput={BodyPart}
      />
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="">
            <DialogHeader className="">
              {description.map((items) => (
                <DialogTitle className="hidden text-center text-xl underline underline-offset-8">
                  {items.name}
                </DialogTitle>
              ))}
              <DialogDescription className="hidden text-center">
                {selectedPart}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col space-y-4 text-center">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.action}
                  className="rounded-xl border border-primary bg-gray-100 px-4 py-2 font-bold text-gray-800 transition duration-300 hover:bg-primary hover:text-amber-300"
                >
                  {item.label}
                  <h3 className="text-sm font-normal">{item.description}</h3>
                </Link>
              ))}
            </div>
            <DialogFooter className="sm:justify-start">
              <button
                className="flex items-center rounded-xl px-4 py-2 font-bold text-gray-800 hover:bg-gray-200"
                onClick={handleClose}
              >
                <ArrowLeft className="size-5" />
                Back
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
