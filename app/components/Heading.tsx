interface HeadingProps {
  title: string;
  description: string;
}

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="xl:mb-10">
      <h2 className="text-2xl font-bold text-primary-blue lg:text-3xl xl:text-[2.5rem]">
        {title}
      </h2>
      <p className="text-neutral-grey font-normal mt-2 xl:text-xl">
        {description}
      </p>
    </div>
  );
};
