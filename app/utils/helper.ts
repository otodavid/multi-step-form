import { Frequency } from "../types/types";

export const priceDisplay = (
  price: number,
  frequency: Frequency,
  isAddon: boolean = true,
) => {
  if (isAddon)
    if (frequency === "monthly") {
      return `+$${price}/mo`;
    } else {
      return `+${price}/yr`;
    }

  if (frequency === "monthly") {
    return `$${price}/mo`;
  } else {
    return `${price}/yr`;
  }
};
