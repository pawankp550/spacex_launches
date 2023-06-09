import React from "react";
import { Launch } from "../../types/launch";
import { LaunchedCell } from "./columns/Launched";
import { LocationCell } from "./columns/Location";
import { MissionCell } from "./columns/Mission";
import { OrbitCell } from "./columns/Orbit";
import { StatusCell } from "./columns/Status";
import { RocketCell } from "./columns/Rocket";

interface RowProps {
  data: Launch;
  index: number
}

export const Row: React.FC<RowProps> = ({index, data}) => {
  return (
    <tr>
      <td>
          {index}
      </td>
      <td>
        <LaunchedCell {...data} />
      </td>
      <td>
        <LocationCell {...data} />
      </td>
      <td>
        <MissionCell {...data} />
      </td>
      <td>
        <OrbitCell {...data} />
      </td>
      <td>
        <StatusCell {...data} />
      </td>
      <td>
        <RocketCell {...data} />
      </td>
    </tr>
  );
};
