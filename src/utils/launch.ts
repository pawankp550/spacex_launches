import { LaunchFilter } from "../types/launch";

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
