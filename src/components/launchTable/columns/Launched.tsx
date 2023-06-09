import { Launch } from "../../../types/launch";

export const LaunchedCell: React.FC<Launch> = (props) => {
  const { launch_date_unix } = props;
  return <span>{launch_date_unix}</span>;
};
