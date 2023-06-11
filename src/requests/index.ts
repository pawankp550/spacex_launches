import axios from "axios";
import { Launch, Filters, LaunchFilter, DateFilters } from "../types/launch";
import { getQueryParamValue, getLaunchQueryParams, getDateQueryParams } from "../utils/launch";

export const getLaunchData = async (
  offset: number,
  limit: number
): Promise<Launch[] | undefined> => {
  const launchesFilterParam = getQueryParamValue(Filters.launches);
  const launchesFilter = getLaunchQueryParams(
    launchesFilterParam as LaunchFilter
  );
  
  const dateFilterParam = getQueryParamValue(Filters.date_range);
  const dateFilter = getDateQueryParams(
    dateFilterParam as DateFilters
  );

  const url = new URL("https://api.spacexdata.com/v3/launches");
  url.searchParams.set("offset", offset?.toString());
  url.searchParams.set("limit", limit?.toString());

  if (Object.keys(launchesFilter).length !== 0) {
    const [key, val] = Object.entries(launchesFilter)[0];
    url.searchParams.set(key, val);
  }
  
  if (dateFilter?.startDate && dateFilter?.endDate) {
    url.searchParams.set('start', dateFilter.startDate);
    url.searchParams.set('end', dateFilter.endDate);
  }

  try {
    const response = await axios.get<Launch[]>(url.href);
    return response.data;
  } catch (error) {
    console.error("Error fetching launch data:");
  }
};
