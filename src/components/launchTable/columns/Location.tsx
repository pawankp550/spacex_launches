import { Launch } from "../../../types/launch";

export const LocationCell: React.FC<Launch> = (props) => {
  const { launch_site: {site_name} } = props;
  return <span>{site_name}</span>;
};
