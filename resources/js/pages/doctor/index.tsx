import AppLayout from '@/Layouts/app-layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Cardiology',
    picture: 'path/to/image1.jpg',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Neurology',
    picture: 'path/to/image2.jpg',
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialization: 'Pediatrics',
    picture: 'path/to/image3.jpg',
  },
  // Add more doctors as needed
];

const specializations = ['All', 'Cardiology', 'Neurology', 'Pediatrics'];

export default function Doctor() {
  const [doctors, setDoctors] = useState(doctorsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (specialization: string) => {
    setSelectedSpecialization(specialization);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearchQuery = doctor.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSpecialization =
      selectedSpecialization === 'All' ||
      doctor.specialization === selectedSpecialization;
    return matchesSearchQuery && matchesSpecialization;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 text-2xl font-bold">Doctors</div>
      <div className="mb-4 flex gap-4">
        <Input
          type="text"
          placeholder="Search doctor..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full"
        />
        <select
          value={selectedSpecialization}
          onChange={(e) => handleFilter(e.target.value)}
          className="w-full rounded border p-2"
        >
          {specializations.map((specialization) => (
            <option key={specialization} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="border-none shadow-none">
            <CardHeader>
              <img
                src={doctor.picture}
                alt={doctor.name}
                className="h-48 w-full rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-bold">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.specialization}</p>
            </CardContent>
            <CardFooter>
              <Button>View Profile</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

Doctor.layout = (page: any) => <AppLayout children={page} />;
