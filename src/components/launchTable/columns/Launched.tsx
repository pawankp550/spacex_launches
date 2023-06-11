import { Launch } from "../../../types/launch";
import { formatDate } from '../../../utils/launch'

export const LaunchedCell: React.FC<Launch> = (props) => {
  const { launch_date_utc } = props;
  return <span>{formatDate(launch_date_utc)}</span>;
};
