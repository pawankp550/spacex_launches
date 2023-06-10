import { Header } from "./Header";
import { Row } from "./Row";
import { Launch } from "../../types/launch";
import React from "react";

interface TableProps {
  data: Launch[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="w-fit border border-solid border-gray-200 rounded-lg drop-shadow-sm overflow-hidden">
      <table className="table-auto ">
        <Header />
        <tbody>
          {data?.map((d, i) => (
            <Row index={i} data={d} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
