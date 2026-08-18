import { useState } from "react";
import { STEPS } from "../utils/constants";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { FormStep } from "./FormStep";
import { FormState } from "../types/types";

export const MultiStepForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    frequency: "monthly",
    plan: "Arcade",
    addons: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nextStep = () => {
    if (step === 1 && !validateInput()) {
      return;
    }
    setStep((prev) => (prev < STEPS.length ? prev + 1 : prev));
  };

  const prevStep = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const jumpToStep = (jump: number) => {
    setStep(jump);
  };

  const validateInput = () => {
    if (!formData.name.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: "Name is required",
      }));
    }

    if (!formData.email.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is required",
      }));
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is invalid",
      }));
    }

    if (!formData.phone.trim()) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number is required",
      }));
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number is invalid",
      }));
    }

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="">
      <section className="app-bg flex gap-6 justify-center pt-12 pb-32">
        {STEPS.map((stepItem, index) => (
          <FormStep
            key={index}
            index={index + 1}
            currentStep={step}
            stepInfo={stepItem}
          />
        ))}
      </section>

      <div className="bg-neutral-blue-light h-124 relative">
        <Form
          formData={formData}
          setFormData={setFormData}
          step={step}
          jumpToStep={jumpToStep}
          errors={errors}
        />
      </div>

      <Footer step={step} nextStep={nextStep} prevStep={prevStep} />
    </div>
  );
};
