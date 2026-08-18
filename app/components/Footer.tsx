interface FooterProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

export const Footer = ({ step, nextStep, prevStep }: FooterProps) => {
  return (
    <footer className="bg-neutral-white p-5 flex justify-between items-center">
      {step !== 1 && (
        <button onClick={prevStep} className="text-neutral-grey font-medium">
          Go back
        </button>
      )}

      <button
        onClick={nextStep}
        className="bg-primary-blue p-2 text-neutral-white rounded-sm capitalize ml-auto font-medium px-4"
      >
        {step !== 4 ? "next steps" : "confirm"}
      </button>
    </footer>
  );
};
