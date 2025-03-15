import DoctorForm from '@/components/doctor-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Authenticated from '@/Layouts/auth-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';

interface Specialist {
  id: number;
  name: string;
}

interface Schedule {
  id: number;
  name: string;
}

interface CreateProps {
  schedules: Schedule[];
  specialists: Specialist[];
  errors: {
    name?: string;
    picture?: string;
    specialist_id?: string;
    schedules?: string;
  };
}

export default function Create({ specialists }: CreateProps) {
  const { data, setData } = useForm({
    name: '',
    specialist_id: specialists.length > 0 ? specialists[0].id : 0,
    picture: '',
    schedules: [],
  });

  const onsubmit = (e: any) => {
    e.preventDefault();
    router.post(route('doctor.store'), {
      ...data,
      schedules: data.schedules.map((t: any) => t.id),
    });
  };

  return (
    <>
      <Head title="Create Doctor" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="flex gap-4">
                <div className="w-full">
                  <Card className="border-none shadow-none">
                    <CardHeader>
                      <CardTitle>Create Doctor</CardTitle>
                      <CardDescription>Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={onsubmit}>
                        <div className="flex flex-col justify-center">
                          <div className="w-full">
                            <DoctorForm {...{ data, setData }} />
                          </div>
                          <div className="self-end">
                            <Button className="py-5">
                              <Save className="mr-2 inline-flex h-6 w-6" />
                              Create
                            </Button>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Create.layout = (page: any) => <Authenticated children={page} />;
