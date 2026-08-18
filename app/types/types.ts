export interface StepInfo {
  name: string;
  description: string;
}

export type Frequency = "monthly" | "yearly";
export type PlanName = "Arcade" | "Advanced" | "Pro";

export interface Pricing {
  monthly: {
    price: string;
    promo?: string;
  };
  yearly: {
    price: string;
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
  price: string;
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  frequency: Frequency;
  plan: PlanName;
  addons: string[];
}
