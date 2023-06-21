import { useState } from "react";
import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: IconType;
  isPassword?: boolean;
  error?: boolean;
}

export function Input({
  Icon,
  isPassword = false,
  error = false,
  ...inputProps
}: InputProps) {
  const [passwordShown, setPasswordShown] = useState(false);

  const handleClick = () => {
    setPasswordShown((prev) => !prev);
  };

  return (
    <div className={`flex justify-start items-center px-3 py-2 font-titillium rounded-md ${error ? 'border-2 border-[#ED3A5A]' : 'border border-gray-300'} hover:border-[#7C3AED] focus-within:border-[#7C3AED] ${inputProps.disabled ? 'bg-[#E2E8F0]' : 'bg-white'}`}>
      {Icon && <Icon className="mr-2" />}
      <input
        {...inputProps}
        type={isPassword && !passwordShown ? "password" : "text"}
        className="flex-grow border-none outline-none bg-transparent"
      />
      {isPassword && (
        <div onClick={handleClick}>
          {passwordShown ? (
            <FiEyeOff className="mr-2 cursor-pointer" />
          ) : (
            <FiEye className="mr-2 cursor-pointer" />
          )}
        </div>
      )}
    </div>
  );
}
