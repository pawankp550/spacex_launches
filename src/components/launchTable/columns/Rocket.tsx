import { Launch } from "../../../types/launch";

export const RocketCell: React.FC<Launch> = (props) => {
  const { rocket: {rocket_name} } = props;
  return <span>{rocket_name}</span>;
};
