import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { format, getMonth, getYear, setMonth, setYear } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';

interface DatePickerProps {
  value: string; // The currently selected date in YYYY-MM-DD format
  onChange: (date: string) => void; // Callback when the date changes
  startYear?: number; // Start year for the year dropdown
  endYear?: number; // End year for the year dropdown
  placeholder?: string; // Placeholder text for the date picker
}

export function DatePicker({
  value,
  onChange,
  startYear = getYear(new Date()) - 100,
  endYear = getYear(new Date()),
  placeholder = 'Pick a date', // Default placeholder text
}: DatePickerProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [date, setDate] = React.useState<Date | null>(
    value ? new Date(value) : null, // Default to null if no value is provided
  );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i,
  );

  const handleMonthChange = (month: string) => {
    if (date) {
      const newDate = setMonth(date, months.indexOf(month));
      setDate(newDate);
      onChange(format(newDate, 'yyyy-MM-dd'));
    }
  };

  const handleYearChange = (year: string) => {
    if (date) {
      const newDate = setYear(date, parseInt(year));
      setDate(newDate);
      onChange(format(newDate, 'yyyy-MM-dd'));
    }
  };

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      onChange(format(selectedDate, 'yyyy-MM-dd'));
    }
  };

  if (isDesktop) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start border-primary py-5 text-left font-normal hover:bg-background',
              !date && 'text-muted-foreground', // Apply muted style if no date is selected
            )}
            onClick={() => {
              if (!date) {
                const today = new Date();
                setDate(today); // Set default value to today
                onChange(format(today, 'yyyy-MM-dd')); // Trigger onChange callback with today's date
              }
            }}
          >
            <CalendarIcon className="mr-2 h-5 w-5" />
            {date ? format(date, 'PPP') : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="border-divider flex justify-between gap-2 border-b p-4">
            <Select
              onValueChange={handleMonthChange}
              value={date ? months[getMonth(date)] : ''}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month, index) => (
                  <SelectItem value={month} key={index}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={handleYearChange}
              value={date ? getYear(date).toString() : ''}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year, index) => (
                  <SelectItem
                    className="font-mono"
                    value={year.toString()}
                    key={index}
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={handleSelect}
            initialFocus
            month={date || new Date()}
            onMonthChange={(newMonth) => setDate(newMonth)}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'text-md w-full justify-start border-primary py-5 text-left font-normal',
            !date && 'text-muted-foreground', // Apply muted style if no date is selected
          )}
          onClick={() => {
            if (!date) {
              const today = new Date();
              setDate(today); // Set default value to today
              onChange(format(today, 'yyyy-MM-dd')); // Trigger onChange callback with today's date
            }
          }}
        >
          <CalendarIcon className="mr-2 h-5 w-5" />
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Tanggal Lahir Anda</DrawerTitle>
          <DrawerDescription className="hidden">description</DrawerDescription>
        </DrawerHeader>
        <div className="border-divider flex justify-between gap-2 border-b p-4">
          <Select
            onValueChange={handleMonthChange}
            value={date ? months[getMonth(date)] : ''}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month, index) => (
                <SelectItem value={month} key={index}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={handleYearChange}
            value={date ? getYear(date).toString() : ''}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year, index) => (
                <SelectItem
                  className="font-mono"
                  value={year.toString()}
                  key={index}
                >
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          className="mx-auto"
          mode="single"
          selected={date || undefined}
          onSelect={handleSelect}
          initialFocus
          month={date || new Date()}
          onMonthChange={(newMonth) => setDate(newMonth)}
        />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button autoFocus className="w-full">
              Select
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
