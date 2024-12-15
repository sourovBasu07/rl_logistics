const SectionTitle = ({
  name,
  title,
  description,
  center = false,
  className,
}: {
  name: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`w-full lg:w-[625px] flex flex-col ${
        center ? "items-center" : ""
      } gap-3 lg:gap-6 ${className}`}
    >
      <div
        className={`flex flex-col ${
          center ? "items-center" : ""
        } gap-2 lg:gap-4`}
      >
        <div className="flex items-center gap-3">
          {center && (
            <div className="flex items-center gap-[2px]">
              <div className="w-1 h-[2px] bg-primary rounded-[2px]" />
              <div className="w-8 h-[2px] bg-primary rounded-[2px]" />
            </div>
          )}
          <h4 className="text-primary uppercase">{name}</h4>
          <div className="hidden lg:flex items-center gap-[2px]">
            <div className="w-8 h-[2px] bg-primary rounded-[2px]" />
            <div className="w-1 h-[2px] bg-primary rounded-[2px]" />
          </div>
        </div>
        <h2 className={`${center ? "text-center" : ""}`}>{title}</h2>
      </div>
      <p className="">{description}</p>
    </div>
  );
};
export default SectionTitle;
