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
    { name: 'Lengan', position: 'bottom-96 left-44' },
    { name: 'Hati', position: 'top-24 left-32' },
    { name: 'Perut', position: 'top-32 left-32' },
    { name: 'Panggul', position: 'top-48 left-32' },
    { name: 'Paha', position: 'top-60 left-32' },
    { name: 'Lutut', position: 'top-72 right-16' },
    { name: 'Pergelangan Kaki', position: 'bottom-8 right-16' },
    { name: 'Kaki', position: 'bottom-8 left-32' },
  ];

  return (
    <div className="to9 flex flex-col items-center">
      <h1 className="text-center text-2xl font-semibold">
        What center of exellence are you looking for?
      </h1>
      <div className="w-auto">
        <div className="relative flex h-screen w-full items-center justify-center bg-background">
          <WomanBody className="size-[700px]" />
          {bodyParts.map((part) => (
            <button
              key={part.name}
              className={`absolute text-primary hover:underline ${part.position}`}
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
