import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker-custom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group-custom';
import Stepper from '@/components/ui/stepper';
import SplitLayout from '@/Layouts/split-layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Define the validation schema using Zod
const formSchema = z.object({
  patientType: z.enum(['new', 'existing']),
  name: z.string().min(1, { message: 'Name is required' }),
  place: z.string().min(1, { message: 'Place of birth is required' }),
  date_born: z.string().min(1, { message: 'Date of birth is required' }),
  gender: z.string().min(1, { message: 'Gender is required' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  nik: z.string().optional(),
});

type RegisterForm = z.infer<typeof formSchema>;

export default function Appointment() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientType: 'new',
      name: '',
      place: '',
      date_born: '',
      gender: '',
      phone: '',
      nik: '',
    },
  });

  const data = watch();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([
    true,
    false,
    false,
  ]);

  const validateForm = (): boolean => {
    // Trigger validation for the current step
    return Object.keys(errors).length === 0;
  };

  const isNextDisabled = () => {
    return !validateForm(); // Disable "Next" button if validation fails
  };

  const isStepClickable = (step: number) => {
    if (step <= currentStep) {
      return true; // Allow clicking on completed or current steps
    }
    if (step > currentStep) {
      return validateForm(); // Allow clicking only if the current step is valid
    }
    return false;
  };

  const handleStepChange = (step: number) => {
    if (validateForm() && isStepClickable(step)) {
      setCurrentStep(step);

      // Mark the current step as completed
      const updatedCompletedSteps = [...completedSteps];
      updatedCompletedSteps[step] = true;
      setCompletedSteps(updatedCompletedSteps);
    }
  };

  const onSubmit = (formData: RegisterForm) => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const steps = [
    // Step 1: Patient Type Selection
    <div className="flex h-full items-start justify-center">
      <div className="space-y-4 text-center">
        <Label>Apakah anda ?</Label>
        <RadioGroup
          value={data.patientType}
          onValueChange={(value: any) => setValue('patientType', value)}
          className="flex flex-col"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="new" />
            Belum pernah ke Garba
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="existing" />
            Sudah pernah ke Garba
          </div>
        </RadioGroup>
      </div>
    </div>,

    // Step 2: Form for New or Existing Patient
    <div className="h-full p-1">
      {data.patientType === 'new' && (
        <div className="flex flex-col gap-4">
          <Input
            type="number"
            placeholder="NIK"
            id="nik"
            {...register('nik')}
          />
          <Input placeholder="Nama Lengkap" id="name" {...register('name')} />
          <div className="flex gap-2">
            <Input
              placeholder="Tempat lahir"
              id="place"
              {...register('place')}
            />
            <DatePicker
              value={data.date_born}
              onChange={(date) => setValue('date_born', date)}
              placeholder="Tanggal lahir"
            />
          </div>
          <RadioGroup
            value={data.gender}
            onValueChange={(value: any) => setValue('gender', value)}
            className="flex items-center justify-between space-x-2"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="laki-laki" id="r1" />
              <Label htmlFor="r1">Laki-laki</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="perempuan" id="r2" />
              <Label htmlFor="r2">Perempuan</Label>
            </div>
          </RadioGroup>
          <Input
            placeholder="Nomor WA"
            type="number"
            id="phone"
            {...register('phone')}
          />
        </div>
      )}

      {data.patientType === 'existing' && (
        <div className="grid gap-2">
          <Label htmlFor="medicalRecordNumber">Medical Record Number</Label>
          <Input id="medicalRecordNumber" {...register('nik')} />
        </div>
      )}
    </div>,

    // Step 2: Form for New or Existing Patient
    <div className="h-full p-1">
      {data.patientType === 'new' && (
        <div className="flex flex-col gap-4">
          <Input
            type="number"
            placeholder="NIK"
            id="nik"
            {...register('nik')}
          />
          <Input placeholder="Nama Lengkap" id="name" {...register('name')} />
          <div className="flex gap-2">
            <Input
              placeholder="Tempat lahir"
              id="place"
              {...register('place')}
            />
            <DatePicker
              value={data.date_born}
              onChange={(date) => setValue('date_born', date)}
              placeholder="Tanggal lahir"
            />
          </div>
          <RadioGroup
            value={data.gender}
            onValueChange={(value: any) => setValue('gender', value)}
            className="flex items-center justify-between space-x-2"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="laki-laki" id="r1" />
              <Label htmlFor="r1">Laki-laki</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="perempuan" id="r2" />
              <Label htmlFor="r2">Perempuan</Label>
            </div>
          </RadioGroup>
          <Input
            placeholder="Nomor WA"
            type="number"
            id="phone"
            {...register('phone')}
          />
        </div>
      )}

      {data.patientType === 'existing' && (
        <div className="grid gap-2">
          <Label htmlFor="medicalRecordNumber">Medical Record Number</Label>
          <Input id="medicalRecordNumber" {...register('nik')} />
        </div>
      )}
    </div>,

    // Step 3: Confirmation with Submit Button
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-blue-100">
      <p className="text-lg font-bold">Konfirmasi Data Anda</p>
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </div>,
  ];

  return (
    <>
      <Head title="Appointment" />
      <div className="p-1">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepChange={handleStepChange}
          completedSteps={completedSteps}
          isNextDisabled={isNextDisabled()} // Pass the validation state
        />
      </div>
    </>
  );
}

Appointment.layout = (page: any) => (
  <SplitLayout
    title="Book an Appointment"
    description="Book an appointment with us"
    children={page}
  />
);
