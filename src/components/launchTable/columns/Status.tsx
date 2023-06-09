import { Launch } from "../../../types/launch";

const getStatus = (upcoming: boolean, launch_success: boolean) => {
  if (upcoming) {
    return (
      <span className="bg-yellow-100 rounded-full px-4 py-1 text-yellow-800">
        {"Upcoming"}
      </span>
    );
  }

  if (launch_success) {
    return (
      <span className="bg-green-100 rounded-full px-4 py-1 text-green-800">
        {"Sucsess"}
      </span>
    );
  }

  return (
    <span className="bg-red-100 rounded-full px-4 py-1 text-red-800">
      {"Failed"}
    </span>
  );
};

export const StatusCell: React.FC<Launch> = (props) => {
  const { upcoming, launch_success } = props;

  return <>{getStatus(upcoming, launch_success)}</>;
};
