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
  index: number;
  isFirstRow?: boolean;
  isLastRow?: boolean;
}

export const Row: React.FC<RowProps> = ({
  index,
  data,
}) => {
  return (
    <tr>
      <td className="p-5">{String(index + 1).padStart(2, "0")}</td>
      <td className="p-5">
        <LaunchedCell {...data} />
      </td>
      <td className="p-5">
        <LocationCell {...data} />
      </td>
      <td className="p-5">
        <MissionCell {...data} />
      </td>
      <td className="p-5">
        <OrbitCell {...data} />
      </td>
      <td className="p-5">
        <StatusCell {...data} />
      </td>
      <td className="p-5">
        <RocketCell {...data} />
      </td>
    </tr>
  );
};
