const StatsCard = ({
  title,
  count,
}: {
  title: string;
  count: string | number;
}) => {
  return (
    <div className="flex flex-col items-center gap-3 pl-10">
      <h2 className="text-[#111111]">{count}</h2>
      <p className="font-medium text-lg text-[#111111]">{title}</p>
    </div>
  );
};
export default StatsCard;
