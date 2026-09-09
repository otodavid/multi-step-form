import { Dispatch, SetStateAction } from "react";

export interface StepInfo {
  name: string;
  description: string;
}

export type Frequency = "monthly" | "yearly";
export type PlanName = "Arcade" | "Advanced" | "Pro";

export interface Pricing {
  monthly: {
    price: number;
    promo?: string;
  };
  yearly: {
    price: number;
    promo?: string;
  };
}

export interface Addon {
  name: string;
  description: string;
  pricing: Pricing;
}

export interface Plan {
  name: PlanName;
  pricing: Pricing;
  image: string;
}

export interface SelectedPlanPrice {
  plan: PlanName;
  price: string;
}

export interface SelectedAddonNameAndPrice {
  name: string;
  price: number;
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  frequency: Frequency;
  plan: PlanName;
  addons: string[];
}

export interface FormContextType {
  formData: FormState;
  setFormData: Dispatch<SetStateAction<FormState>>;
}

export interface StepContextType {
  step: number;
  setStep: Dispatch<SetStateAction<{ step: number }>>;
}
