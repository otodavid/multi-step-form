import { Addon, Plan, StepInfo } from "../types/types";

export const STEPS: StepInfo[] = [
  { name: "Step 1", description: "Your Info" },
  { name: "Step 2", description: "select plan" },
  { name: "Step 3", description: "Add-ons" },
  { name: "Step 4", description: "Summary" },
];

export const ADDONS_LIST: Addon[] = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    pricing: {
      monthly: {
        price: 1,
      },
      yearly: {
        price: 10,
      },
    },
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricing: {
      monthly: {
        price: 2,
      },
      yearly: {
        price: 20,
      },
    },
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    pricing: {
      monthly: {
        price: 2,
      },
      yearly: {
        price: 20,
      },
    },
  },
];

export const PLANS_LIST: Plan[] = [
  {
    name: "Arcade",
    pricing: {
      monthly: { price: 9 },
      yearly: { price: 90, promo: "2 months free" },
    },
    image: "/images/icon-arcade.svg",
  },
  {
    name: "Advanced",
    pricing: {
      monthly: { price: 12 },
      yearly: { price: 120, promo: "2 months free" },
    },
    image: "/images/icon-advanced.svg",
  },
  {
    name: "Pro",
    pricing: {
      monthly: { price: 15 },
      yearly: { price: 150, promo: "2 months free" },
    },
    image: "/images/icon-pro.svg",
  },
];
