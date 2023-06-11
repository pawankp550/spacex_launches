import { LaunchFilter, DateFilters } from "../types/launch";

export const addQueryString = (key: string, value: string): void => {
  const currentURL = window.location.href;
  const url = new URL(currentURL);

  url.searchParams.set(key, value);

  window.history.replaceState(null, "", url.toString());
};

export const getQueryParamValue = (paramName: string): string | null => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get(paramName);
};

export const getLaunchQueryParams = (
  filter: LaunchFilter
): Record<string, string> => {
  switch (filter) {
    case LaunchFilter.all_launches:
      return {};
    case LaunchFilter.upcoming_launches:
      return { tbd: "true" };
    case LaunchFilter.successful_launches:
      return { launch_success: "true" };
    case LaunchFilter.failed_launches:
      return { launch_success: "false" };
    default:
      return {};
  }
};

const getLastSixMonthsRange = () => {
  const currentDate = new Date();

  const endDate = currentDate.toISOString().slice(0, 10);

  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 6,
    currentDate.getDate()
  )
    .toISOString()
    .slice(0, 10);

  return { startDate, endDate };
};

const getYearsRange = (years: number) => {
  const currentDate = new Date();

  const endDate = currentDate.toISOString().slice(0, 10);

  const startDate = new Date(
    currentDate.getFullYear() - years,
    currentDate.getMonth(),
    currentDate.getDate()
  )
    .toISOString()
    .slice(0, 10);

  return { startDate, endDate };
};

export const getDateQueryParams = (
  filter: DateFilters
): { startDate?: string; endDate?: string } => {
  switch (filter) {
    case DateFilters.past_6_months:
      return getLastSixMonthsRange();
    case DateFilters.past_1_year:
      return getYearsRange(1);
    case DateFilters.past_5_years:
      return getYearsRange(5);
    case DateFilters.past_10_years:
      return getYearsRange(10);
    case DateFilters.all_time:
      return {};
    default:
      return {};
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return formattedDate;
};
