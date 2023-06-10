import { Button } from './Button'

interface PaginationProps {
  current: number;
  onClick: (a: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ current, onClick }) => {
  const btnClass = "border border-solid border-gray-200 px-2 py-1"
  
  const getPagination = () => {
    if (10 - current > 3) {
      return (
        <>
          <Button
            onBtnClick={(e) => onClick(current)}
            label={current}
          />
          <Button className={btnClass} onBtnClick={() => onClick(current + 1)} label={current + 1} />
          {"..."}
          <Button className={btnClass} onBtnClick={() => onClick(10)} label={10} />
        </>
      );
    } else {
      return (
        <>
          <Button  className={btnClass} onBtnClick={() => onClick(7)}  label={7}/>
          <Button className={btnClass} onBtnClick={() => onClick(8)} label={8} />
          <Button className={btnClass} onBtnClick={() => onClick(9)} label={9} />
          <Button className={btnClass} onBtnClick={() => onClick(10)} label={10}/>
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
      <Button onBtnClick={() => onPrevClick} label={"<"}/>
      {getPagination()}
      <Button onBtnClick={() => onNextClick} label={">"} />
    </div>
  );
};
