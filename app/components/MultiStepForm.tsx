import { useEffect, useRef, useState } from "react";
import { STEPS } from "../utils/constants";
import { Footer } from "./Footer";
import { FormStep } from "./FormStep";
import { FormState } from "../types/types";
import { FormProvider, useForm } from "react-hook-form";
import { PersonalInfo } from "./PersonalInfo";
import { PlanStep } from "./PlanStep";
import { AddonsStep } from "./AddonsStep";
import { Summary } from "./Summary";
import { ConfirmationPage } from "./ConfirmationPage";

export const MultiStepForm = () => {
  const [step, setStep] = useState<number>(1);
  const [hasFinishedForm, setHasFinishedForm] = useState<boolean>(false);
  const stepHeadingRef = useRef<HTMLDivElement>(null);

  const methods = useForm<FormState>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      frequency: "monthly",
      plan: "Arcade",
      addons: [],
    },
  });

  useEffect(() => {
    stepHeadingRef.current?.focus();
  }, [step, hasFinishedForm]);

  const { handleSubmit, trigger } = methods;

  const onSubmit = (data: FormState) => {
    alert(`Thanks ${data.name}, your form has been submitted`);
  };

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await trigger(["email", "name", "phone"]);

      if (!isValid) {
        return;
      }
    }

    if (step === 4) {
      setHasFinishedForm(true);
    }

    setStep((prev) => (prev < STEPS.length ? prev + 1 : prev));
  };

  const prevStep = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const jumpToStep = (jump: number) => {
    setStep(jump);
  };

  return (
    <FormProvider {...methods}>
      <div className="bg-neutral-blue-light min-h-screen overflow-auto md:bg-neutral-white md:flex md:gap-0 lg:p-4 xl:p-6">
        <section className="app-bg h-48 block md:h-auto md:w-4/12 lg:rounded-xl">
          <div className="flex gap-6 justify-center pt-6 md:flex-col md:gap-4 md:justify-start lg:pt-10 xl:px-8 xl:py-12">
            {STEPS.map((stepItem, index) => (
              <FormStep
                key={index}
                index={index + 1}
                currentStep={step}
                stepInfo={stepItem}
                jumpToStep={jumpToStep}
                hasFinishedForm={hasFinishedForm}
              />
            ))}
          </div>
        </section>

        <div className="relative -mt-20 mb-28 md:mt-0 md:mb-0 md:w-8/12">
          <form onSubmit={handleSubmit(onSubmit)} className="h-full">
            <div
              className={`flex flex-col justify-between h-full md:pt-12 md:px-10 md:mx-auto lg:w-8/9 xl:w-3/4 xl:pt-0 ${hasFinishedForm ? "pt-0 justify-center items-center xl:pt-0 md:pt-0" : "xl:pt-20"}`}
            >
              <div
                className={`bg-neutral-white mx-auto w-11/12  h-full rounded-xl py-8 px-6 md:px-0 md:py-0 md:w-full ${hasFinishedForm && "flex justify-center items-center"}`}
                ref={stepHeadingRef}
                tabIndex={-1}
              >
                {step === 1 && <PersonalInfo />}
                {step === 2 && <PlanStep />}
                {step === 3 && <AddonsStep />}
                {step === 4 && !hasFinishedForm && (
                  <Summary jumpToStep={jumpToStep} />
                )}
                {hasFinishedForm && <ConfirmationPage />}
              </div>

              {!hasFinishedForm && (
                <div className="fixed bottom-0 left-0 right-0 md:static md:bottom-auto md:left-auto md:right-auto md:mt-6">
                  <Footer step={step} nextStep={nextStep} prevStep={prevStep} />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};
