type InputProps = {
  label: string;
  type?: "text" | "email" | "password";
};

const Input = ({ label, type = "text" }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">{label}</label>
      <input
        type={type}
        className="outline-none border-b border-b-[rgba(0,0,0,0.4)] px-2 py-1"
      />
    </div>
  );
};
export default Input;
