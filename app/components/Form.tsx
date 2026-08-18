import { useMemo, useState } from "react";
import { PlanStep } from "./PlanStep";
import { AddonsStep } from "./AddonsStep";
import {
  Addon,
  FormState,
  PlanName,
  SelectedAddonNameAndPrice,
} from "../types/types";
import { ADDONS_LIST, PLANS_LIST } from "../utils/constants";
import { Summary } from "./Summary";
import { PersonalInfo } from "./PersonalInfo";

interface FormProps {
  formData: FormState;
  setFormData: React.Dispatch<React.SetStateAction<FormState>>;
  step: number;
  jumpToStep: (step: number) => void;
  errors: {
    name: string;
    email: string;
    phone: string;
  };
}

export const Form = ({
  formData,
  setFormData,
  step,
  jumpToStep,
  errors,
}: FormProps) => {
  const handleFrequencyToggle = () => {
    setFormData((prev) => {
      return {
        ...prev,
        frequency: prev.frequency === "monthly" ? "yearly" : "monthly",
      };
    });
  };

  const handleSelectedPlanChange = (plan: PlanName) => {
    setFormData((prev) => ({
      ...prev,
      selectedPlan: plan,
    }));
  };

  const handleSelectedAddons = (addon: Addon) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addon.name)
        ? prev.addons.filter((name) => name !== addon.name)
        : [...prev.addons, addon.name],
    }));
  };

  const selectedPlanPrice = useMemo(() => {
    const plan = PLANS_LIST.find((plan) => formData.plan === plan.name);

    return {
      plan: formData.plan,
      price: plan?.pricing[formData.frequency].price ?? "",
    };
  }, [formData.plan, formData.frequency]);

  const selectedAddonNameAndPrice: SelectedAddonNameAndPrice[] = useMemo(() => {
    const selected = ADDONS_LIST.filter((addon) =>
      formData.addons.includes(addon.name),
    );

    return selected.map((addon) => ({
      name: addon.name,
      price: addon.pricing[formData.frequency].price,
    }));
  }, [formData.addons, formData.frequency]);

  return (
    <form action="" className="relative w-full">
      <div className="absolute -top-20 left-2/4 right-2/4 -translate-x-2/4  bg-neutral-white mx-auto w-11/12 rounded-xl py-8 px-6 ">
        {step === 1 && (
          <PersonalInfo
            formData={formData}
            updatePersonalInfo={setFormData}
            errors={errors}
          />
        )}

        {step === 2 && (
          <PlanStep
            formData={formData}
            handleFrequencyToggle={handleFrequencyToggle}
            handleSelectedPlanChange={handleSelectedPlanChange}
          />
        )}

        {step === 3 && (
          <AddonsStep
            formData={formData}
            handleSelectedAddons={handleSelectedAddons}
          />
        )}

        {step === 4 && (
          <Summary
            frequency={formData.frequency}
            selecetedPlanPrice={selectedPlanPrice}
            selectedAddonNameAndPrice={selectedAddonNameAndPrice}
            jumpToStep={jumpToStep}
          />
        )}
      </div>
    </form>
  );
};
