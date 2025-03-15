import { Pagination } from '@/components/pagination';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Authenticated from '@/Layouts/auth-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import {
  BadgeCheckIcon,
  Ellipsis,
  Eraser,
  PencilLine,
  Plus,
  Trash,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface DoctorTableProps {
  doctors: {
    data: Array<{
      id: number;
      name: string;
      slug: string;
      specialist: {
        name: string;
        url: string;
      };
      schedules: Array<{
        day: string;
      }>;
      url: string;
    }>;
    meta: any;
    links: any;
  };
}

export default function DoctorTable(props: DoctorTableProps) {
  const { data: doctors, meta, links } = props.doctors;
  const [deleteDoctorSlug, setDeleteDoctorSlug] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { delete: destroy } = useForm();

  const handleDelete = () => {
    if (deleteDoctorSlug !== null) {
      destroy(route('doctor.destroy', deleteDoctorSlug), {
        onSuccess: () => {
          setDeleteDoctorSlug(null);
          setIsDialogOpen(false);
          toast('Success!!', {
            description: 'The doctor has been deleted',
            icon: <BadgeCheckIcon />,
            duration: 5000,
          });
        },
      });
    }
  };

  const openDialog = (doctorSlug: string) => {
    setDeleteDoctorSlug(doctorSlug);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Head title="Doctor" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="flex justify-end">
                <Button asChild className="mb-6">
                  <Link href={route('doctor.create')}>
                    <Plus size={20} /> <span>Doctor</span>
                  </Link>
                </Button>
              </div>
              <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Specialist</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead className="text-right">Act</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {doctors.length ? (
                    doctors.map((doctor, i) => (
                      <TableRow key={doctor.id}>
                        <TableCell>{meta.from + i}</TableCell>
                        <TableCell className="w-[450px]">
                          <Link href={doctor.url}>{doctor.name}</Link>
                        </TableCell>
                        <TableCell>{doctor.specialist.name}</TableCell>
                        <TableCell>
                          {doctor.schedules.map((schedule, i) => (
                            <Badge
                              key={i}
                              variant={'secondary'}
                              className="mx-1"
                            >
                              {schedule.day}
                            </Badge>
                          ))}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Ellipsis />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <Link href={route('doctor.edit', doctor.slug)}>
                                <DropdownMenuItem>
                                  <PencilLine /> Edit
                                </DropdownMenuItem>
                              </Link>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => openDialog(doctor.slug)}
                                className="focus:bg-rose-50 focus:text-rose-600"
                              >
                                <Eraser /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell>
                        <p>No doctors found</p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <Pagination {...{ meta, links }} />
            </div>
          </div>
        </div>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              doctor and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="border-none shadow-none"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="hover:bg-rose-600"
              onClick={handleDelete}
            >
              <Trash />
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

DoctorTable.layout = (page: any) => <Authenticated children={page} />;
