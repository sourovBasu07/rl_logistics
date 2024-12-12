type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  style?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

const styles = {
  primary: "bg-primary text-white px-7 py-3 rounded",
  secondary: "bg-[#FFE830] text-white px-[.625rem] py-[0.375rem] rounded",
  outline:
    "bg-transparent text-primary px-7 py-[.625rem] rounded border border-primary font-medium",
};

const Button = ({
  text,
  type = "button",
  style = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} className={`${styles[style]}`} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
