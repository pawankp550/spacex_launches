import "./styles.css";
import { Table } from "./components/launchTable";
import { useEffect, useState } from "react";
import { Launch, LaunchFilter } from "./types/launch";
import { getLaunchData } from "./requests/index";
import { Pagination } from "./components/pagination";
import { Select } from "./components/Select";
import { addQueryString, getQueryParamValue } from "./utils/launch";
import { ReactComponent as FunnelIcon } from "./icons/funnel.svg";

const filterOptions = [
  {
    label: "All Launches",
    value: LaunchFilter.all_launches,
  },
  {
    label: "Upcoming Launches",
    value: LaunchFilter.upcoming_launches,
  },
  {
    label: "Successful Launches",
    value: LaunchFilter.successful_launches,
  },
  {
    label: "Failed Launches",
    value: LaunchFilter.failed_launches,
  },
];

export default function App() {
  const [tableData, setTableData] = useState<Launch[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLaunchesFilter, setSelectedLaunchesFilter] = useState(
    getQueryParamValue("launches") || LaunchFilter.all_launches
  );

  const onFilterChange = (v: string) => {
    addQueryString("launches", v);
    setCurrentPage(1);
    setSelectedLaunchesFilter(v as LaunchFilter);
  };

  const fetchData = async () => {
    const offset = currentPage * 12 - 12;
    const data = await getLaunchData(offset, 12);
    setTableData(data || []);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedLaunchesFilter]);

  const onPaginationClick = (selection: number) => {
    setCurrentPage(selection);
  };

  return (
    <div className="App">
      <div className="p-5 flex flex-col justify-center items-center">
        <div className="flex w-full justify-end py-5">
          <Select
            label=""
            options={filterOptions}
            onChange={(v) => onFilterChange(v as LaunchFilter)}
            selected={selectedLaunchesFilter}
            optionsCLassname="w-max right-0 text-left"
            LeftIcon={FunnelIcon}
          />
        </div>
        <Table data={tableData} />
        <div className="mt-5 flex w-full justify-end">
          <Pagination current={currentPage} onClick={onPaginationClick} />
        </div>
      </div>
    </div>
  );
}
