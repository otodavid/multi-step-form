import { StepInfo } from "../types/types";

interface FormStepProps {
  index: number;
  stepInfo: StepInfo;
  currentStep: number;
  jumpToStep: (step: number) => void;
  hasFinishedForm: boolean;
}
export const FormStep = ({
  index,
  stepInfo,
  currentStep,
  jumpToStep,
  hasFinishedForm,
}: FormStepProps) => {
  return (
    <button
      className="md:flex md:items-center md:gap-4 md:text-left md:w-full md:px-6 md:py-3 "
      type="button"
      disabled={currentStep < index || hasFinishedForm}
      onClick={() => jumpToStep(index)}
      aria-label={`Step ${index}: ${stepInfo.description}`}
      aria-current={currentStep === index ? "step" : undefined}
    >
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full font-medium xl:h-12 xl:w-12 xl:font-bold xl:text-xl ${
          currentStep === index
            ? "bg-primary-blue-lighter text-primary-blue"
            : " bg-transparent border border-neutral-white text-neutral-white"
        }`}
      >
        {index}
      </span>
      <div className="hidden md:block md:uppercase">
        <p className="text-neutral-grey text-sm xl:text-base xl:font-medium">
          {stepInfo.name}
        </p>
        <p className="text-neutral-white tracking-wider font-medium xl:text-lg xl:font-bold">
          {stepInfo.description}
        </p>
      </div>
    </button>
  );
};
