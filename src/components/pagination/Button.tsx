import { MouseEventHandler } from "react";

interface ButtonProps {
  label: number | string;
  onBtnClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  label,
  onBtnClick,
}) => {
  return (
    <button
      className={`border border-solid border-gray-200 h-10 w-10 ${className}`}
      onClick={onBtnClick}
    >
      {label}
    </button>
  );
};
