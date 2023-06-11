import "./styles.css";
import { Table } from "./components/launchTable";
import { useEffect, useState } from "react";
import { Launch, LaunchFilter, DateFilters, Filters } from "./types/launch";
import { getLaunchData } from "./requests/index";
import { Pagination } from "./components/pagination";
import { Select } from "./components/Select";
import { addQueryString, getQueryParamValue } from "./utils/launch";
import { ReactComponent as FunnelIcon } from "./icons/funnel.svg";
import { ReactComponent as CalendarIcon } from "./icons/calendar.svg";

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

const dateOptions = [
  {
    label: "Past 6 months",
    value: DateFilters.past_6_months,
  },
  {
    label: "Past 1 year",
    value: DateFilters.past_1_year,
  },
  {
    label: "Past 5 years",
    value: DateFilters.past_5_years,
  },
  {
    label: "Past 10 years",
    value: DateFilters.past_10_years,
  },
  {
    label: "All time",
    value: DateFilters.all_time,
  },
];

export default function App() {
  const [tableData, setTableData] = useState<Launch[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLaunchesFilter, setSelectedLaunchesFilter] = useState(
    getQueryParamValue(Filters.launches) || LaunchFilter.all_launches
  );
  const [selectedDateRange, setSelectedDateRange] = useState(
    getQueryParamValue(Filters.date_range) || DateFilters.all_time
  );
  const [isDataLoading, setIsDataLoading] = useState(false);

  const onFilterChange = (v: string) => {
    addQueryString("launches", v);
    setCurrentPage(1);
    setSelectedLaunchesFilter(v as LaunchFilter);
  };

  const onDateRangeChange = (v: string) => {
    addQueryString("date_range", v);
    setCurrentPage(1);
    setSelectedDateRange(v as DateFilters);
  };

  const fetchData = async () => {
    try {
      setIsDataLoading(true);
      const offset = currentPage * 12 - 12;
      const data = await getLaunchData(offset, 12);
      setTableData(data || []);
    } catch (err) {
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedLaunchesFilter, selectedDateRange]);

  const onPaginationClick = (selection: number) => {
    setCurrentPage(selection);
  };

  return (
    <div className="App">
      <div className="p-5 flex flex-col justify-center items-center">
        <div className="flex w-full justify-between py-5">
          <Select
            label=""
            options={dateOptions}
            onChange={(v) => onDateRangeChange(v as DateFilters)}
            selected={selectedDateRange}
            optionsCLassname="w-max left-0 text-left"
            LeftIcon={CalendarIcon}
          />
          <Select
            label=""
            options={filterOptions}
            onChange={(v) => onFilterChange(v as LaunchFilter)}
            selected={selectedLaunchesFilter}
            optionsCLassname="w-max right-0 text-left"
            LeftIcon={FunnelIcon}
          />
        </div>
        <Table data={tableData} isLoading={isDataLoading} />
        <div className="mt-5 flex w-full justify-end">
          {!isDataLoading ? (
            <Pagination current={currentPage} onClick={onPaginationClick} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
