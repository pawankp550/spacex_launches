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
      className={`border border-solid border-gray-200 px-2 py-1 ${className}`}
      onClick={onBtnClick}
    >
      {label}
    </button>
  );
};
