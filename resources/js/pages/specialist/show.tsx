import { Container } from '@/components/container';
import { Grid } from '@/components/grid';
import { Pagination } from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/Layouts/app-layout';
import { useState } from 'react';

interface SpecialistProps {
  specialist: {
    name: string;
  };
  doctors: {
    data: any[];
    meta: any;
    links: any;
  };
}

export default function Show({ specialist, ...props }: SpecialistProps) {
  const { data: doctors, meta, links } = props.doctors;
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="mb-8 grid grid-cols-12 bg-blue-50 py-11 bg-pattern-blue-50 lg:py-32">
        <div className="col-span-12">
          <div className="text-center text-2xl font-bold lg:text-6xl">
            {specialist.name}
          </div>
        </div>
      </div>
      <Container className="px-3">
        {doctors.length ? (
          <>
            <Grid className="grid-cols-2" cols={4}>
              {doctors.map((doctor: any, index: number) => (
                <DoctorCard
                  key={index}
                  doctor={doctor}
                  onClick={() => handleCardClick(doctor)}
                />
              ))}
            </Grid>
            <Pagination {...{ meta, links }} />
          </>
        ) : (
          <div className="text-center text-gray-500">No doctors found.</div>
        )}
      </Container>

      {selectedDoctor && (
        <DoctorDetailDialog
          doctor={selectedDoctor}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </>
  );
}

Show.layout = (page: any) => <AppLayout children={page} />;

function DoctorCard({ doctor, onClick }: { doctor: any; onClick: () => void }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      className="cursor-pointer overflow-hidden rounded-xl border-none shadow-lg"
      onClick={onClick}
    >
      <CardHeader className="relative p-0">
        {!imageLoaded && <Skeleton className="h-48 w-full lg:h-80" />}

        <img
          className={`h-48 w-full object-cover transition-opacity duration-500 lg:h-80 ${
            imageLoaded ? 'block' : 'hidden'
          }`}
          src={doctor.picture}
          alt={doctor.name}
          onLoad={() => setImageLoaded(true)}
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-1 text-sm font-semibold tracking-tight text-gray-800 transition duration-200 hover:text-indigo-600 md:text-lg">
          {doctor.name}
        </CardTitle>
      </CardContent>
    </Card>
  );
}

function DoctorDetailDialog({
  doctor,
  isOpen,
  onClose,
}: {
  doctor: any;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center md:text-2xl md:font-normal">
            {doctor.name}
          </DialogTitle>
          <div className="text-center font-black capitalize">
            {doctor.specialist.name}
          </div>
          <div className="flex flex-col items-center gap-4 pt-5 md:flex-row md:items-start">
            <div className="w-64 flex-none">
              {!imageLoaded && <Skeleton className="h-80 w-full rounded-2xl" />}
              <img
                className={`h-80 w-full rounded-2xl object-cover shadow-xl transition-opacity duration-500 ${
                  imageLoaded ? 'block' : 'hidden'
                }`}
                src={doctor.picture}
                alt={doctor.name}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="w-full flex-auto">
              {doctor.schedules.length ? (
                <div className="md:ml-3">
                  <h3 className="mb-3 border-b font-semibold">Schedules</h3>
                  <div className="flex flex-col">
                    {doctor.schedules.map((schedule: any, index: number) => (
                      <div className="flex" key={index}>
                        <div className="text-md w-32 flex-none text-start font-light">
                          {schedule.day}
                        </div>
                        <div className="mb-3 flex-1 text-end font-mono font-bold">
                          {schedule.start_time} - {schedule.end_time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button className="py-6 font-bold text-yellow-200">
            Book Appointment
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
