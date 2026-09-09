import Image from "next/image";
import { FormState } from "../types/types";
import { PLANS_LIST } from "../utils/constants";
import { useFormContext } from "react-hook-form";
import { Heading } from "./Heading";
import { priceDisplay } from "../utils/helper";

export const PlanStep = () => {
  const { register, setValue, watch } = useFormContext<FormState>();

  const frequency = watch("frequency");

  const handleFrequencyToggle = () => {
    setValue("frequency", frequency === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div>
      <Heading
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="space-y-4 mt-6">
        <div className="space-y-4 md:space-y-0 md:flex md:gap-4 xl:gap-6">
          {PLANS_LIST.map((plan, index) => (
            <label className="w-full block" key={index}>
              <input
                {...register("plan", { required: "Please select a plan" })}
                type="radio"
                name="plan"
                id="plan"
                className="peer sr-only"
                value={plan.name}
              />
              <div
                className={`w-full border border-neutral-grey peer-checked:border-primary-purple rounded-xl peer-checked:bg-neutral-blue-lighter flex gap-4 p-4 items-start ${index === 0 ? "peer-checked" : ""} md:flex-col md:items-start md:gap-16 xl:px-5 xl:py-6 hover:border-primary-purple transition-colors cursor-pointer`}
              >
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill={true}
                    className="cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-primary-blue font-medium lg:text-xl">
                    {plan.name}
                  </h4>
                  <p className="text-sm text-neutral-grey lg:text-base">
                    {priceDisplay(
                      plan.pricing[frequency].price,
                      frequency,
                      false,
                    )}
                  </p>
                  <p className="text-xs text-primary-blue lg:text-sm">
                    {plan.pricing[frequency].promo}
                  </p>
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="w-full bg-neutral-blue-lighter p-4 flex justify-center gap-8 rounded-xl mt-4 md:mt-7 lg:text-lg xl:mt-10 xl:p-5">
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
