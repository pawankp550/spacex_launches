import { Launch } from "../../../types/launch";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return formattedDate;
};

export const LaunchedCell: React.FC<Launch> = (props) => {
  const { launch_date_utc } = props;
  return <span>{formatDate(launch_date_utc)}</span>;
};
