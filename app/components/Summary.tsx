import {
  Frequency,
  SelectedAddonNameAndPrice,
  SelectedPlanPrice,
} from "../types/types";

interface SummaryProps {
  selecetedPlanPrice: SelectedPlanPrice;
  frequency: Frequency;
  selectedAddonNameAndPrice: SelectedAddonNameAndPrice[];
  jumpToStep: (step: number) => void;
}

export const Summary = ({
  selecetedPlanPrice,
  frequency,
  selectedAddonNameAndPrice,
  jumpToStep,
}: SummaryProps) => {
  console.log("selectedAddonNameAndPrice", selectedAddonNameAndPrice);
  const totalText =
    frequency === "monthly" ? "Total (per month)" : "Total (per year)";
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-blue"> Finishing up</h2>
      <p className="text-neutral-grey font-normal mt-2">
        Double-check everything looks OK before confirming.
      </p>

      <div className="space-y-3 mt-6 bg-neutral-blue-light rounded-md p-4 text-sm text-primary-blue">
        <div className="flex justify-between m-0">
          <div>
            <p className="text-primary-blue font-medium">
              {selecetedPlanPrice.plan} ({frequency})
            </p>
            <button
              type="button"
              className="appearance-none underline text-neutral-grey capitalize cursor-pointer"
              onClick={() => jumpToStep(2)}
            >
              change
            </button>
          </div>

          <span className="font-bold">{selecetedPlanPrice.price}</span>
        </div>

        {selectedAddonNameAndPrice.length > 0 && (
          <div className="w-full h-[0.5px] bg-neutral-purple-light block mt-3"></div>
        )}

        <div className="space-y-2">
          {selectedAddonNameAndPrice.map((addon) => (
            <div key={addon.name} className="flex justify-between">
              <span className="text-neutral-grey">{addon.name}</span>
              <span>{addon.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4 text-sm p-4">
        <span className="text-neutral-grey">{totalText}</span>
        <span className="text-primary-purple font-bold">
          {selecetedPlanPrice.price}
        </span>
      </div>
    </div>
  );
};
