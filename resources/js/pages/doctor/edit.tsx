import DoctorForm from '@/components/doctor-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Authenticated from '@/Layouts/auth-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';

interface Doctor {
  name: string;
  picture: string;
  specialist: any;
  schedules: any;
  slug: string;
}

interface EditProps {
  doctor: Doctor;
  errors: {
    name?: string;
    picture?: string;
    specialist_id?: string;
    schedules?: string;
  };
}

export default function Edit({ doctor }: EditProps) {
  const { data, setData } = useForm({
    name: doctor.name,
    specialist_id: doctor.specialist.id,
    picture: doctor.picture,
    schedules: doctor.schedules,
  });

  const onsubmit = (e: any) => {
    e.preventDefault();
    router.post(route('doctor.update', doctor.slug), {
      ...data,
      _method: 'PUT',
      specialist_id: data.specialist_id,
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
                      <CardTitle>Update Doctor</CardTitle>
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
                              Update
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

Edit.layout = (page: any) => <Authenticated children={page} />;
