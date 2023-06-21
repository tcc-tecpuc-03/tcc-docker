import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  children?: ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  buttonType?: "primary" | "secondary";
  Icon?: IconType;
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  buttonProps,
  buttonType = "primary",
  Icon,
  disabled,
  isLoading = false,
}: ButtonProps) {
  const buttonClasses = {
    primary: disabled
      ? "bg-[#5B21B6] text-white cursor-not-allowed"
      : "bg-[#7C3AED] hover:bg-[#9F67FF] text-white",
    secondary: disabled
      ? "border-[#D1D5DB] text-black bg-transparent cursor-not-allowed"
      : "border-black hover:border-gray-700 text-black bg-transparent border-2 border-[#7C3AED]",
  };

  const spinnerStyles: CSSProperties = {
    border: "4px solid rgba(0, 0, 0, 0.1)",
    borderTopColor: "#FFF",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    animation: "spin 1s linear infinite",
  };

  return (
    <button
      className={`${buttonClasses[buttonType]} text-[16px] font-titillium px-5 py-2 rounded-md relative`}
      {...buttonProps}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <div className="flex justify-center items-center" style={{ height: '100%' }}>
          <div style={spinnerStyles} />
        </div>
      ) : (
        <div className="flex justify-start items-center">
          {Icon && <Icon className="mr-2" />}
          <span className="flex-grow text-center">{children}</span>
        </div>
      )}
    </button>
  );
}
