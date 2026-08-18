import Image from "next/image";
import { Addon, FormState } from "../types/types";
import { ADDONS_LIST } from "../utils/constants";

interface AddonsStepProps {
  formData: FormState;
  handleSelectedAddons: (addon: Addon) => void;
}

export const AddonsStep = ({
  formData: { frequency, addons: selectedAddons },
  handleSelectedAddons,
}: AddonsStepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-blue"> Pick add-ons</h2>
      <p className="text-neutral-grey font-normal mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="space-y-3 mt-6">
        {ADDONS_LIST.map((addon) => (
          <label
            key={addon.name}
            htmlFor={addon.name}
            className="text-sm cursor-pointer peer block"
          >
            <div className="border rounded-lg p-4 transition-colors border-neutral-grey has-checked:border-primary-purple has-checked:bg-neutral-blue-lighter flex gap-4 items-center">
              <div>
                <input
                  type="checkbox"
                  id={addon.name}
                  name={addon.name}
                  onChange={() => handleSelectedAddons(addon)}
                  value={addon.name}
                  checked={selectedAddons.includes(addon.name)}
                  className="peer sr-only"
                />

                <div className="border border-neutral-grey w-5 h-5 rounded-sm flex justify-center items-center peer-checked:bg-primary-purple">
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
                  <h4 className="text-primary-blue font-medium">
                    {addon.name}
                  </h4>
                  <p className="text-neutral-grey">{addon.description}</p>
                </div>
                <p className="text-sm text-primary-purple">
                  {addon.pricing[frequency].price}
                </p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};
