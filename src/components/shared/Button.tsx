import Image from "next/image";

type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  style?: "primary" | "secondary" | "outline";
  size?: "base" | "sm";
  icon?: string;
  onClick?: () => void;
};

const styles = {
  primary:
    "bg-primary font-medium text-white hover:bg-secondary hover:text-primary",
  secondary:
    "bg-[#FFE830] font-medium text-primary hover:bg-primary hover:text-white",
  outline:
    "bg-transparent text-primary px-7 py-[.625rem] rounded border border-primary font-medium hover:bg-secondary hover:text-primary",
};

const sizes = {
  base: "px-7 py-3 rounded",
  sm: "px-[0.625rem] py-[0.3rem] rounded",
};

const Button = ({
  text,
  type = "button",
  style = "primary",
  size = "base",
  icon,
  onClick,
}: ButtonProps) => {
  return (
    <div
      className={`${styles[style]} ${sizes[size]} flex items-center gap-2 duration-700 cursor-pointer`}
    >
      {icon && <Image src={icon} alt="Icon" width={20} height={20} />}
      <button type={type} className={``} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default Button;