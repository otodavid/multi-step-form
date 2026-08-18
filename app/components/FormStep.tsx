import { StepInfo } from "../types/types";

interface FormStepProps {
  index: number;
  stepInfo: StepInfo;
  currentStep: number;
}
export const FormStep = ({ index, stepInfo, currentStep }: FormStepProps) => {
  return (
    <div className="">
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full font-medium bg-primary-blue-lighter  ${
          currentStep === index
            ? "bg-primary-blue text-primary-blue"
            : " bg-transparent border border-neutral-white text-neutral-white"
        }`}
      >
        {index}
      </span>
      <p className="hidden md-block">{stepInfo.name}</p>
      <p className="hidden md-block">{stepInfo.description}</p>
    </div>
  );
};
