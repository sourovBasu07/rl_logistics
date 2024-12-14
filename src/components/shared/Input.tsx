type InputProps = {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "textarea";
  style?: "primary" | "booknow";
  required?: boolean;
  labelWidth?: string;
};

const Input = ({
  label,
  type = "text",
  style = "primary",
  required = false,
  placeholder = "",
  labelWidth = "160px",
}: InputProps) => {
  if (style === "booknow") {
    if (type === "textarea") {
      return (
        <div className="w-full flex items-start gap-3 border-b border-b-[#707070] p-2 group focus-within:border-b-black">
          <label className={`min-w-[${labelWidth}] text-lg text-[#2C2C2C]`}>
            {label}
            {required && "*"}
          </label>
          <textarea
            required={required}
            placeholder={placeholder || "Type here..."}
            className="w-full h-[150px] outline-none border-none px-2 py-1"
          />
        </div>
      );
    }
    return (
      <div className="w-full flex items-center gap-3 border-b border-b-[#707070] p-2 group focus-within:border-b-black">
        <label className={`min-w-[${labelWidth}] text-lg text-[#2C2C2C]`}>
          {label}
          {required && "*"}
        </label>
        <input
          required={required}
          type={type}
          placeholder={placeholder || "Type here..."}
          className="outline-none border-none px-2 py-1"
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="outline-none border-b border-b-[rgba(0,0,0,0.4)] px-2 py-1"
      />
    </div>
  );
};
export default Input;
