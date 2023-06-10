import { Button } from "./Button";
import classnames from "classnames";

interface PaginationProps {
  current: number;
  onClick: (a: number) => void;
}

const BTN_CLASS = "border-l-0";

export const Pagination: React.FC<PaginationProps> = ({ current, onClick }) => {
  const getPagination = () => {
    if (10 - current > 3) {
      return (
        <>
          <Button
            onBtnClick={() => onClick(current)}
            label={current}
            className="font-semibold"
          />
          <Button
            className={BTN_CLASS}
            onBtnClick={() => onClick(current + 1)}
            label={current + 1}
          />
          <Button className={BTN_CLASS} label="..." onBtnClick={() => {}} />
          <Button
            className={BTN_CLASS}
            onBtnClick={() => onClick(10)}
            label={10}
          />
        </>
      );
    } else {
      return (
        <>
          <Button onBtnClick={() => onClick(7)} label={7} />
          <Button
            className={classnames(BTN_CLASS, {
              "font-semibold": current === 8,
            })}
            onBtnClick={() => onClick(8)}
            label={8}
          />
          <Button
            className={classnames(BTN_CLASS, {
              "font-semibold": current === 9,
            })}
            onBtnClick={() => onClick(9)}
            label={9}
          />
          <Button
            className={classnames(BTN_CLASS, {
              "font-semibold": current === 10,
            })}
            onBtnClick={() => onClick(10)}
            label={10}
          />
        </>
      );
    }
  };

  const onPrevClick = () => {
    if (current !== 1) {
      onClick(current - 1);
    }
  };

  const onNextClick = () => {
    if (current !== 10) {
      onClick(current + 1);
    }
  };

  return (
    <div>
      <Button
        onBtnClick={() => onPrevClick()}
        label={"<"}
        className="border-r-0 rounded-l-md"
      />
      {getPagination()}
      <Button
        onBtnClick={() => onNextClick()}
        label={">"}
        className="border-l-0 rounded-r-md"
      />
    </div>
  );
};
