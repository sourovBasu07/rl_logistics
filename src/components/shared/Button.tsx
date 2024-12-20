import Image from "next/image";

type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  style?: "primary" | "secondary" | "outline";
  size?: "base" | "sm" | "medium";
  icon?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const styles = {
  primary:
    "bg-primary font-medium text-white hover:bg-secondary hover:text-primary",
  secondary:
    "bg-[#FFE830] font-medium border border-secondary text-primary hover:bg-primary hover:border-primary hover:text-white",
  outline:
    "bg-transparent text-primary border border-primary font-medium hover:bg-secondary hover:border-secondary hover:text-primary",
};

const sizes = {
  base: "px-3 lg:px-7 py-[.375rem] lg:py-3 rounded",
  sm: "px-[0.625rem] py-[0.3rem] rounded",
  medium: "rounded px-4 py-2 text-lg",
};

const Button = ({
  text,
  type = "button",
  style = "primary",
  size = "base",
  icon,
  className,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <div
      className={`${styles[style]} ${
        sizes[size]
      } flex justify-center items-center gap-2 duration-700 cursor-pointer ${
        disabled ? "opacity-50 cursor-auto pointer-events-none" : ""
      } ${className}`}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt="Icon" width={20} height={20} />}
      <button type={type} disabled={disabled} className="whitespace-nowrap">
        {text}
      </button>
    </div>
  );
};
export default Button;
