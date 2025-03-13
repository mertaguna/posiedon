import { Container } from '@/components/container';
import { Grid } from '@/components/grid';
import { Pagination } from '@/components/pagination';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/Layouts/app-layout';
import { Link } from '@inertiajs/react';
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

  return (
    <>
      <div className="mb-8 grid grid-cols-12 bg-blue-50 py-11 bg-pattern-blue-50 lg:py-32">
        <div className="col-span-12">
          <div className="text-center text-2xl font-bold lg:text-6xl">
            {specialist.name}
          </div>
        </div>
      </div>
      <Container>
        {doctors.length ? (
          <>
            <Grid>
              {doctors.map((doctor: any, index: number) => (
                <DoctorCard key={index} doctor={doctor} />
              ))}
            </Grid>
            <Pagination {...{ meta, links }} />
          </>
        ) : (
          <div className="text-center text-gray-500">No doctors found.</div>
        )}
      </Container>
    </>
  );
}

Show.layout = (page: any) => <AppLayout children={page} />;

function DoctorCard({ doctor }: { doctor: any }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="overflow-hidden rounded-xl border-none shadow-lg">
      <CardHeader className="relative p-0">
        {!imageLoaded && <Skeleton className="h-60 w-full" />}
        <Link href="#">
          <img
            className={`h-60 w-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'block' : 'hidden'
            }`}
            src={doctor.picture}
            alt={doctor.name}
            onLoad={() => setImageLoaded(true)}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold tracking-tight text-gray-800 transition duration-200 hover:text-indigo-600">
          <Link href="#">{doctor.name}</Link>
        </CardTitle>
        {doctor.schedules.length ? (
          <div className="flex items-center gap-x-2">
            {doctor.schedules.map((schedule: any, index: number) => (
              <div
                key={index}
                className="rounded-lg border border-slate-300 px-2 py-1 text-xs font-medium text-blue-900 duration-300 hover:bg-slate-200"
              >
                {schedule.day} {schedule.start_time} - {schedule.end_time}
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
