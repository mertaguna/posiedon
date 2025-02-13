import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { WomanBody } from './flag';

const BodyDiagram = () => {
  const [selectedPart, setSelectedPart] = useState('');

  const bodyParts = [
    { name: 'Otak', position: 'top-24 right-72' },
    { name: 'Jantung', position: 'top-60 right-44' },
    { name: 'Paru-Paru', position: 'top-72 right-36' },
    { name: 'Ginjal', position: 'top-96 right-44' },
    { name: 'Siku', position: 'top-96 left-44' },
    { name: 'Lengan', position: 'bottom-90 left-36' },
    { name: 'Hati', position: 'top-80 left-48' },
    { name: 'Perut', position: 'top-[420px] right-44' },
    { name: 'Panggul', position: 'top-[480px] right-36' },
    { name: 'Paha', position: 'bottom-96 right-52' },
    { name: 'Lutut', position: 'bottom-72 left-52' },
    { name: 'Pergelangan Kaki', position: 'bottom-44 right-32' },
    { name: 'Kaki', position: 'bottom-32 left-52' },
  ];

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-center text-2xl font-semibold">
        What center of exellence are you looking for?
      </h1>
      <div className="w-auto">
        <div className="relative flex h-screen w-full items-center justify-center bg-background">
          <WomanBody className="size-[700px]" />
          {bodyParts.map((part) => (
            <button
              key={part.name}
              className={`absolute rounded-lg bg-primary px-3 py-1 font-bold text-amber-200 hover:underline ${part.position}`}
              onClick={() => setSelectedPart(part.name)}
            >
              {part.name}
            </button>
          ))}

          {selectedPart && (
            <div className="absolute bottom-4 rounded-md bg-white p-4 shadow-lg">
              <h2 className="text-xl font-bold">{selectedPart}</h2>
              <Link
                href={route(selectedPart.toLowerCase())}
                className="text-blue-600 hover:underline"
              >
                Lihat Detail
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyDiagram;
