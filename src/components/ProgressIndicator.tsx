
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  color: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

const ProgressIndicator = ({ steps, currentStep, onStepClick }: ProgressIndicatorProps) => {
  return (
    <div className="relative">
      {/* Line connecting steps */}
      <div className="absolute top-4 left-4 right-4 h-0.5 bg-grip-light -z-10" />
      
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <button
              onClick={() => onStepClick(index)}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium transition-all duration-300",
                index <= currentStep ? step.color : "bg-grip-light",
                "hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              )}
            >
              {index < currentStep ? (
                <Check className="h-4 w-4" />
              ) : (
                <span>{step.id}</span>
              )}
            </button>
            <div 
              className={cn(
                "mt-2 text-xs font-medium text-center transition-colors duration-300 px-1",
                index === currentStep ? "text-grip-blue" : "text-grip-neutral"
              )}
            >
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
