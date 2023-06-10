import classNames from "classnames";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  selected: string;
  onChange: (v: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  LeftIcon,
  options,
  RightIcon,
  label,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onOptionClick = (value: string) => {
      onChange(value)
      setIsOpen(false)
  }
  
  const getLabel = () => {
    return options.find((o) => o.value === selected);
  };
  
  const renderOptions = () => {
    return (
      <>
        {options.map(({ label, value }) => {
          return (
            <span
              onClick={() => onOptionClick(value)}
              className={classNames("p-2 cursor-pointer", {
                "bg-gray-200": value === selected,
              })}
            >
              {label}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <div className="static w-fit">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {LeftIcon && <LeftIcon />}
        <span>{getLabel()?.label || label}</span>
        {RightIcon && <RightIcon />}
      </div>
      <div className="absolute border rounded top-10 z-10 flex flex-col bg-white">
        {isOpen ? renderOptions() : null}
      </div>
    </div>
  );
};
