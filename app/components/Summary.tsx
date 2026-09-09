import { useFormContext } from "react-hook-form";
import { FormState, SelectedAddonNameAndPrice } from "../types/types";
import { useMemo } from "react";
import { ADDONS_LIST, PLANS_LIST } from "../utils/constants";
import { Heading } from "./Heading";
import { priceDisplay } from "../utils/helper";

interface SummaryProps {
  jumpToStep: (step: number) => void;
}

export const Summary = ({ jumpToStep }: SummaryProps) => {
  const { getValues } = useFormContext<FormState>();
  const { frequency, addons, plan } = getValues();

  const selectedAddonNameAndPrice: SelectedAddonNameAndPrice[] = useMemo(() => {
    const selectedAddons = addons
      .map((addonName) => {
        const addon = ADDONS_LIST.find((addon) => addon.name === addonName);
        return {
          name: addon?.name ?? "",
          price: addon?.pricing[frequency].price ?? 0,
        };
      })
      .filter((addon) => addon.name !== "");

    return selectedAddons;
  }, [addons, frequency]);

  const selectedPlanPrice = useMemo(() => {
    const selectedPlanDetails = PLANS_LIST.find(
      (planName) => planName.name === plan,
    );
    const planPrice = selectedPlanDetails?.pricing[frequency].price ?? 0;

    return {
      plan: selectedPlanDetails?.name ?? "Arcade",
      price: planPrice,
    };
  }, [frequency, plan]);

  const totalPrice = useMemo(() => {
    const addonsPrice = selectedAddonNameAndPrice.reduce(
      (total, addon) => total + addon.price,
      0,
    );

    return addonsPrice + selectedPlanPrice.price;
  }, [selectedPlanPrice, selectedAddonNameAndPrice]);

  const totalText =
    frequency === "monthly" ? "Total (per month)" : "Total (per year)";
  return (
    <div>
      <Heading
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <div className="space-y-3 mt-6 bg-neutral-blue-light rounded-md p-4 text-sm text-primary-blue lg:p-6 lg:space-y-5">
        <div className="flex justify-between m-0">
          <div>
            <p className="text-primary-blue font-medium lg:text-xl">
              {selectedPlanPrice.plan} ({frequency})
            </p>
            <button
              type="button"
              className="appearance-none underline text-neutral-grey capitalize cursor-pointer hover:text-primary-purple text-sm lg:text-base"
              onClick={() => jumpToStep(2)}
            >
              change
            </button>
          </div>

          <span className="font-bold lg:text-xl">
            {priceDisplay(selectedPlanPrice.price, frequency, false)}
          </span>
        </div>

        {selectedAddonNameAndPrice.length > 0 && (
          <div className="w-full h-[0.5px] bg-neutral-purple-light block mt-3 lg:mt-5"></div>
        )}

        <div className="space-y-2">
          {selectedAddonNameAndPrice.map((addon) => (
            <div
              key={addon.name}
              className="flex justify-between text-sm lg:text-base"
            >
              <span className="text-neutral-grey">{addon.name}</span>
              <span>{priceDisplay(addon.price, frequency)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4 p-4 lg:p-6">
        <span className="text-neutral-grey text-sm lg:text-lg">
          {totalText}
        </span>
        <span className="text-primary-purple font-bold lg:text-xl">
          {priceDisplay(totalPrice, frequency, false)}
        </span>
      </div>
    </div>
  );
};
