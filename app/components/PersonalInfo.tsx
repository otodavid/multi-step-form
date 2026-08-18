import { FormState } from "../types/types";

interface PersonalInfoProps {
  formData: FormState;
  updatePersonalInfo: (newFormData: FormState) => void;
  errors: {
    name: string;
    email: string;
    phone: string;
  };
}

export const PersonalInfo = ({
  formData,
  updatePersonalInfo,
  errors,
}: PersonalInfoProps) => {
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo({
      ...formData,
      [name]: value,
    });
  };

  console.log("PersonalInfo component rendered with formData:", formData);

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-blue"> Personal info</h2>
      <p className="text-neutral-grey font-normal mt-2">
        Please provide your name, email address, and phone number.
      </p>

      <div className="space-y-4 mt-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="name"
              className="text-primary-blue text-sm flex items-center justify-between"
            >
              Name
            </label>
            {errors.name && (
              <span className="text-primary-red text-xs font-medium">
                {errors.name}
              </span>
            )}
          </div>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => handlePersonalInfoChange(e)}
            placeholder="e.g. Stephen King"
            className="rounded-sm px-4 py-2 placeholder-neutral-grey font-medium border border-neutral-grey"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="text-primary-blue text-sm">
              Email Address
            </label>
            {errors.email && (
              <span className="text-primary-red text-xs font-medium">
                {errors.email}
              </span>
            )}
          </div>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handlePersonalInfoChange(e)}
            placeholder="e.g. stephenking@lorem.com"
            className="rounded-sm px-4 py-2 placeholder-neutral-grey font-medium border border-neutral-grey"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className="text-primary-blue text-sm">
              Phone Number
            </label>
            {errors.phone && (
              <span className="text-primary-red text-xs font-medium">
                {errors.phone}
              </span>
            )}
          </div>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handlePersonalInfoChange(e)}
            placeholder="e.g. +1 234 567 890"
            className="rounded-sm px-4 py-2 placeholder-neutral-grey font-medium border border-neutral-grey"
          />
        </div>
      </div>
    </div>
  );
};
