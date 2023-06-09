import { Launch } from "../../../types/launch";

export const OrbitCell: React.FC<Launch> = (props) => {
  const { rocket: {second_stage: {payloads}} } = props;
  return <span>{payloads[0]?.orbit}</span>;
};
