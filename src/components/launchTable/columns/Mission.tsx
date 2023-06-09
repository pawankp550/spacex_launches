import { Launch } from "../../../types/launch";

export const MissionCell: React.FC<Launch> = (props) => {
  const { mission_name } = props;
  return <span>{mission_name}</span>;
};
