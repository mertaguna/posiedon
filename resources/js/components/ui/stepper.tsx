import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';

interface StepperProps {
  steps: React.ReactNode[]; // Array of step components
  currentStep: number; // Current active step index
  onStepChange?: (step: number) => void; // Callback when the step changes
  completedSteps: boolean[]; // Array to track completed steps
  isNextDisabled?: boolean; // Disable next button
}

export default function Stepper({
  steps,
  currentStep,
  onStepChange,
  completedSteps,
  isNextDisabled,
}: StepperProps) {
  const [direction, setDirection] = useState(0); // Direction for animation (forward/backward)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      onStepChange?.(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection(-1);
      onStepChange?.(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step !== currentStep && completedSteps[step]) {
      setDirection(step > currentStep ? 1 : -1);
      onStepChange?.(step);
    }
  };

  return (
    <div className="relative w-full">
      {/* Step Indicator with Progress Line */}
      <div className="relative mb-10 flex items-center justify-between">
        {/* Progress Line */}
        <div className="absolute left-0 right-0 top-4 h-1 bg-gray-300">
          <div
            className="h-1 bg-primary transition-all duration-300"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`, // Adjusted to start at Step 1
            }}
          ></div>
        </div>

        {steps.map((_, index) => (
          <div
            key={index}
            className={`relative z-10 hidden flex-1 text-center ${
              index <= currentStep
                ? 'font-bold text-primary'
                : completedSteps[index]
                  ? 'cursor-pointer text-gray-400'
                  : 'cursor-not-allowed text-gray-400'
            }`}
            onClick={() => handleStepClick(index)}
          >
            <div
              className={`mx-auto mb-2 h-8 w-8 rounded-full border-2 ${
                index <= currentStep
                  ? 'border-primary bg-primary text-white'
                  : completedSteps[index]
                    ? 'border-gray-300 bg-gray-200 text-gray-500'
                    : 'border-gray-300 bg-gray-100 text-gray-300'
              } flex items-center justify-center`}
            >
              {index + 1}
            </div>
            <span className="text-sm">{`Step ${index + 1}`}</span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="relative h-96 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute h-full w-full"
          >
            {steps[currentStep]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4">
        {currentStep > 0 && ( // Hide "Previous" button on the first step
          <Button
            variant="ghost"
            onClick={handlePrevious}
            className="w-full hover:bg-primary/5"
          >
            <ArrowLeft />
            Previous
          </Button>
        )}
        {currentStep < steps.length - 1 && ( // Hide "Next" button on the last step
          <Button
            onClick={handleNext}
            disabled={isNextDisabled} // Use isNextDisabled prop
            className="w-full"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
