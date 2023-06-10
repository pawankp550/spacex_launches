import classNames from "classnames";
import { useState } from "react";
import { ReactComponent as UpIcon } from "../../icons/chevron-up.svg";
import { ReactComponent as DownIcon } from "../../icons/chevron-down.svg";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  selected: string;
  onChange: (v: string) => void;
  optionsCLassname?: string;
  labelClassName?: string;
}

export const Select: React.FC<SelectProps> = ({
  LeftIcon,
  options,
  label,
  selected,
  onChange,
  optionsCLassname = "",
  labelClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const getLabel = () => {
    return options.find((o) => o.value === selected);
  };

  const renderOptions = () => {
    return (
      <div
        className={classNames(
          "absolute border rounded top-10 z-10 flex flex-col bg-white",
          optionsCLassname
        )}
      >
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
      </div>
    );
  };

  return (
    <div className={classNames("relative w-fit", labelClassName)}>
      <div
        className="cursor-pointer flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {LeftIcon && <LeftIcon />}
        <span className="mr-2">{getLabel()?.label || label}</span>
        {isOpen ? <UpIcon /> : <DownIcon />}
      </div>
      {isOpen ? renderOptions() : null}
    </div>
  );
};
