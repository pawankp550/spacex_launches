import { Header } from "./Header";
import { Row } from "./Row";
import { Launch } from "../../types/launch";
import { Loader } from "../loader/Loader";
import React from "react";

interface TableProps {
  data: Launch[];
  isLoading: boolean;
}

export const Table: React.FC<TableProps> = ({ data, isLoading }) => {
  return (
    <div className="w-full border border-solid border-gray-200 rounded-lg drop-shadow-sm overflow-hidden">
      <table className="w-full">
        <Header />
        <tbody className="max-h-min h-96 relative">
          {isLoading ? (
            <span className="w-full flex justify-center items-center absolute top-1/2">
              <Loader />
            </span>
          ) : null}
          {!isLoading && !data.length ? (
            <span className="w-full flex justify-center items-center absolute top-1/2">
              No results found for specidied filters
            </span>
          ) : null}
          {!isLoading && data.length
            ? data?.map((d, i) => <Row index={i} data={d} />)
            : null}
        </tbody>
      </table>
    </div>
  );
};
