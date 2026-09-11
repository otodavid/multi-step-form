interface FooterProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

export const Footer = ({ step, nextStep, prevStep }: FooterProps) => {
  return (
    <footer className="bg-neutral-white p-5 flex justify-between items-center xl:text-xl">
      {step !== 1 && (
        <button
          onClick={prevStep}
          className="text-neutral-grey font-medium cursor-pointer hover:text-primary-blue capitalize"
          type="button"
        >
          Go back
        </button>
      )}

      <button
        onClick={nextStep}
        type="button"
        className={`p-2 text-neutral-white rounded-lg capitalize ml-auto font-medium px-4 xl:px-8 xl:py-4 cursor-pointer ${step === 4 ? "bg-primary-purple hover:opacity-70" : "bg-primary-blue hover:bg-primary-purple"}`}
      >
        {step !== 4 ? "next steps" : "confirm"}
      </button>
    </footer>
  );
};
