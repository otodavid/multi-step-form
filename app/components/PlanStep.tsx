import Image from "next/image";
import { FormState, Frequency, PlanName } from "../types/types";
import { PLANS_LIST } from "../utils/constants";

interface PlanStepProps {
  formData: FormState;
  handleFrequencyToggle: () => void;
  handleSelectedPlanChange: (plan: PlanName) => void;
}

export const PlanStep = ({
  formData: { frequency, plan: selectedPlan },
  handleFrequencyToggle,
  handleSelectedPlanChange,
}: PlanStepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-blue">Select your plan</h2>
      <p className="text-neutral-grey font-normal mt-2">
        You have the option of monthly or yearly billing.
      </p>

      <div className="space-y-4 mt-6">
        {PLANS_LIST.map((plan, index) => (
          <label className="w-full block" key={index}>
            <input
              type="radio"
              name="plan"
              id="plan"
              className="peer sr-only"
              value={plan.name}
              checked={selectedPlan === plan.name}
              onChange={() => handleSelectedPlanChange(plan.name)}
            />
            <div
              className={`w-full border border-neutral-grey peer-checked:border-primary-purple rounded-md peer-checked:bg-neutral-blue-lighter flex gap-4 p-4 items-start ${index === 0 ? "peer-checked" : ""}`}
            >
              <Image src={plan.image} alt="arcade" width={40} height={40} />
              <div className="space-y-1">
                <h4 className="text-primary-blue font-medium">{plan.name}</h4>
                <p className="text-sm text-neutral-grey">
                  {plan.pricing[frequency].price}
                </p>
                <p className="text-xs text-primary-blue">
                  {plan.pricing[frequency].promo}
                </p>
              </div>
            </div>
          </label>
        ))}

        <div className="w-full bg-neutral-blue-lighter p-4 flex justify-center gap-8 rounded-md mt-4">
          <span
            className={`font-medium ${frequency === "monthly" ? "text-primary-blue" : "text-neutral-grey"}`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            className=" bg-primary-blue w-9 h-5 rounded-full p-1 cursor-pointer"
            onClick={handleFrequencyToggle}
            aria-checked={frequency === "yearly"}
          >
            <div
              className={`w-3 h-3 bg-neutral-white rounded-full translate-x-0 transition-all ${frequency !== "monthly" && "translate-x-4"}`}
            ></div>
          </button>
          <span
            className={`font-medium ${frequency === "yearly" ? "text-primary-blue" : "text-neutral-grey"}`}
          >
            Yearly
          </span>
        </div>
      </div>
    </div>
  );
};
