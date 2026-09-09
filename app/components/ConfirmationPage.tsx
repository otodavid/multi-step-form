import Image from "next/image";
import { Heading } from "./Heading";

export const ConfirmationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-10 lg:gap-8">
      <div className="relative w-10 h-10 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
        <Image
          src={"/images/icon-thank-you.svg"}
          alt="success checkmark"
          className="cover"
          fill
        />
      </div>

      <div className="text-center lg:w-11/12">
        <Heading
          title="Thank you"
          description=" Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com"
        />
      </div>
    </div>
  );
};
