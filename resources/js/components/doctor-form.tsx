import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { usePage } from '@inertiajs/react';
import clsx from 'clsx';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import ErrorField from './error-field';
import MSelect from './m-select';
import MultiSelectSchedule from './multi-select-schedule';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface DoctorFormProps {
  data: { [key: string]: any };
  setData: (field: string, value: any) => void;
}

export default function DoctorForm({ data, setData }: DoctorFormProps) {
  const { errors, specialists, schedules } = usePage<{
    errors: any;
    specialists: any[];
    schedules: any[];
    auth: any;
    articles: any;
    ziggy: any;
  }>().props;
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onchange = (e: any) => setData(e.target.name, e.target.value);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setData('picture', file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleAddSchedule = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleScheduleSubmit = (newSchedule: any) => {
    setData('schedules', [...data.schedules, newSchedule]);
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="flex gap-6">
        <div className="w-64 flex-none">
          {imagePreview || data.picture ? (
            <img
              src={imagePreview || data.picture}
              alt="Image Preview"
              className="mt-2 h-80 w-full rounded-lg object-cover"
            />
          ) : (
            <div className="mt-2 h-80 w-full animate-pulse rounded-lg bg-primary/10"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex gap-4 pb-4">
            <div className="w-full">
              <Label htmlFor="picture">Picture</Label>
              <Input
                name="picture"
                id="picture"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChange}
                className={clsx(
                  'block w-full rounded-md border-gray-200',
                  errors.picture && 'border-red-500',
                )}
              />
              {errors.picture ? <ErrorField value={errors.picture} /> : null}
            </div>
            <div className="w-full">
              <Label htmlFor="name">Nama</Label>
              <Input
                name="name"
                id="name"
                onChange={onchange}
                value={data.name}
                className={clsx(
                  'block w-full rounded-md border-gray-200',
                  errors.name && 'border-red-500',
                )}
              />
              {errors.name ? <ErrorField value={errors.name} /> : null}
            </div>
          </div>
          <div className="flex gap-4 pb-8">
            <div className="w-1/2">
              <Label htmlFor="specialist_id">Specialist</Label>
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <MSelect
                    buttonClassName={clsx(
                      'block w-full rounded-md border-gray-200',
                      errors.specialist_id && 'border-red-500',
                    )}
                    value={data.specialist_id}
                    data={specialists}
                    onChange={(e) => setData('specialist_id', e)}
                  />
                  {errors.specialist_id ? (
                    <ErrorField value={errors.specialist_id} />
                  ) : null}
                </div>
                <div className="w-18 flex-none">
                  <Button
                    type="button"
                    variant={'ghost'}
                    onClick={handleAddSchedule}
                    className="border"
                  >
                    <PlusIcon className="size-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <Label htmlFor="schedules">Schedules</Label>
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <MultiSelectSchedule
                    buttonClassName={clsx(
                      'block w-full rounded-md border-gray-200',
                      errors.schedules && 'border-red-500',
                    )}
                    data={schedules}
                    selectedItems={data.schedules}
                    onChange={(e: any) => setData('schedules', e)}
                  />
                  {errors.schedules ? (
                    <ErrorField value={errors.schedules} />
                  ) : null}
                </div>
                <div className="w-18 flex-none">
                  <Button
                    type="button"
                    variant={'ghost'}
                    onClick={handleAddSchedule}
                    className="border"
                  >
                    <PlusIcon className="size-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScheduleFormDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onSubmit={handleScheduleSubmit}
      />
    </>
  );
}

function ScheduleFormDialog({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newSchedule: any) => void;
}) {
  const [newSchedule, setNewSchedule] = useState({
    day: '',
    start_time: '',
    end_time: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(newSchedule);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Add New Schedule</DialogTitle>
          <DialogDescription>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="day">Day</Label>
                <Input
                  name="day"
                  id="day"
                  value={newSchedule.day}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-200"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="start_time">Start Time</Label>
                <Input
                  name="start_time"
                  id="start_time"
                  type="time"
                  value={newSchedule.start_time}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-200"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="end_time">End Time</Label>
                <Input
                  name="end_time"
                  id="end_time"
                  type="time"
                  value={newSchedule.end_time}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-200"
                />
              </div>
              <Button type="submit" className="mt-2 w-full">
                Save Schedule
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
