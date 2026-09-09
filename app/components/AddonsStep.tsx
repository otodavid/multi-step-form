import Image from "next/image";
import { FormState } from "../types/types";
import { ADDONS_LIST } from "../utils/constants";
import { useFormContext } from "react-hook-form";
import { Heading } from "./Heading";

export const AddonsStep = () => {
  const { register, getValues } = useFormContext<FormState>();
  const frequency = getValues("frequency");

  return (
    <div>
      <Heading
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      <div className="space-y-3 mt-6 xl:space-y-5">
        {ADDONS_LIST.map((addon) => (
          <label
            key={addon.name}
            htmlFor={addon.name}
            className="cursor-pointer peer block"
          >
            <div className="border rounded-lg p-4 transition-colors border-neutral-grey has-checked:border-primary-purple has-checked:bg-neutral-blue-lighter flex gap-4 items-center hover:border-primary-purple xl:px-8 xl:py-6 xl:gap-8">
              <div>
                <input
                  type="checkbox"
                  {...register("addons")}
                  id={addon.name}
                  value={addon.name}
                  className="peer sr-only"
                />

                <div className="border border-neutral-grey w-5 h-5 rounded-sm flex justify-center items-center peer-checked:bg-primary-purple lg:w-6 lg:h-6">
                  <Image
                    src={"/images/icon-checkmark.svg"}
                    alt="checkmark icon"
                    width={12}
                    height={12}
                    className=""
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <h4 className="text-primary-blue font-medium text-sm lg:text-lg">
                    {addon.name}
                  </h4>
                  <p className="text-neutral-grey text-xs lg:text-sm">
                    {addon.description}
                  </p>
                </div>
                <p className="text-sm text-primary-purple lg:text-base">
                  {frequency === "monthly" ? (
                    <>+${addon.pricing.monthly.price}/mo</>
                  ) : (
                    <>+${addon.pricing.yearly.price}/yr</>
                  )}
                </p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};
