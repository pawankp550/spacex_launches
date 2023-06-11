import React, { useState } from "react";
import { Launch } from "../../types/launch";
import { LaunchedCell } from "./columns/Launched";
import { LocationCell } from "./columns/Location";
import { MissionCell } from "./columns/Mission";
import { OrbitCell } from "./columns/Orbit";
import { StatusCell } from "./columns/Status";
import { RocketCell } from "./columns/Rocket";
import { LaunchDetailsModal } from "../launchDetailsModal/LaunchDetailsModal";

const CELL_CLASS = "p-5 text-left";

interface RowProps {
  data: Launch;
  index: number;
  isFirstRow?: boolean;
  isLastRow?: boolean;
}

export const Row: React.FC<RowProps> = ({ index, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onRowClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <LaunchDetailsModal
        isOpen={isModalOpen}
        onClose={onRowClick}
        data={data}
      />
      <tr onClick={onRowClick} className="cursor-pointer">
        <td className={CELL_CLASS}>{String(index + 1).padStart(2, "0")}</td>
        <td className={CELL_CLASS}>
          <LaunchedCell {...data} />
        </td>
        <td className={CELL_CLASS}>
          <LocationCell {...data} />
        </td>
        <td className={CELL_CLASS}>
          <MissionCell {...data} />
        </td>
        <td className={CELL_CLASS}>
          <OrbitCell {...data} />
        </td>
        <td className={CELL_CLASS}>
          <StatusCell {...data} />
        </td>
        <td className={CELL_CLASS}>
          <RocketCell {...data} />
        </td>
      </tr>
    </>
  );
};
