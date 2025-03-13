import { Container } from '@/components/container';
import { Grid } from '@/components/grid';
import { Pagination } from '@/components/pagination';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/Layouts/app-layout';
import { Link } from '@inertiajs/react';

interface Specialist {
  name: string;
  // Add other properties as needed
}

interface DoctorProps {
  specialists: Record<string, Specialist>;
}
interface SpecialistProps {
  specialists: {
    data: Array<{
      name: string;
      slug: string;
      url: string;
    }>;
    meta: any;
    links: any;
  };
}

export default function Doctor(prop: SpecialistProps) {
  const { data: specialists, meta, links } = prop.specialists;
  return (
    <>
      <div className="mb-8 grid grid-cols-12 bg-blue-50 py-11 bg-pattern-blue-50 lg:py-32">
        <div className="col-span-12">
          <div className="text-center text-2xl font-bold lg:text-6xl">
            Our Specialists
          </div>
        </div>
      </div>
      <Container>
        {specialists.length ? (
          <>
            <Grid>
              {specialists.map((spesialis: any) => (
                <Card
                  key={spesialis.slug}
                  className="rounded-3xl border-none shadow-2xl shadow-primary/20"
                >
                  <Link href={spesialis.url}>
                    <CardHeader>
                      <CardTitle>{spesialis.name}</CardTitle>
                    </CardHeader>
                  </Link>
                </Card>
              ))}
            </Grid>
            <Pagination {...{ meta, links }} />
          </>
        ) : (
          <div className="text-center text-gray-500">No Specialist found.</div>
        )}
      </Container>
    </>
  );
}

Doctor.layout = (page: any) => <AppLayout children={page} />;
