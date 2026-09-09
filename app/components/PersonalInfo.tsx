import { useFormContext } from "react-hook-form";
import { FormState } from "../types/types";
import { Heading } from "./Heading";

export const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormState>();

  return (
    <div>
      <Heading
        title="Personal Info"
        description="Please provide your name, email address, and phone number."
      />

      <div className="space-y-4 mt-6 lg:space-y-6">
        <div className="space-y-1 xl:space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="name"
              className="text-primary-blue text-sm xl:text-base"
            >
              Name
            </label>
            {errors.name && (
              <span
                id="name-error"
                className="text-primary-red text-xs font-medium"
              >
                {errors.name.message}
              </span>
            )}
          </div>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            className="w-full rounded-lg px-4 py-3 placeholder-neutral-grey font-medium border border-neutral-grey xl:text-lg cursor-pointer"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </div>

        <div className="space-y-1 xl:space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="text-primary-blue text-sm  xl:text-base"
            >
              Email Address
            </label>
            {errors.email && (
              <span
                id="email-error"
                className="text-primary-red text-xs font-medium"
              >
                {errors.email.message}
              </span>
            )}
          </div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className="w-full rounded-lg px-4 py-3 placeholder-neutral-grey font-medium border border-neutral-grey xl:text-lg cursor-pointer"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </div>

        <div className="space-y-1 xl:space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="phone"
              className="text-primary-blue text-sm xl:text-base"
            >
              Phone Number
            </label>
            {errors.phone && (
              <span
                id="phone-error"
                className="text-primary-red text-xs font-medium"
              >
                {errors.phone.message}
              </span>
            )}
          </div>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value:
                  /^(?:\+1[\s.-]?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: "Enter a valid phone number",
              },
            })}
            type="text"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className="w-full rounded-lg px-4 py-3 placeholder-neutral-grey font-medium border border-neutral-grey xl:text-lg cursor-pointer"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </div>
      </div>
    </div>
  );
};
