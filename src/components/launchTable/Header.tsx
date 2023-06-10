export const Header = () => {
  const getHeaders = () => {
    return [
      "No:",
      "Launched",
      "Location",
      "Mission",
      "Orbit",
      "Status",
      "Rocket",
    ].map((l) => <td className="px-5 py-2 text-left">{l}</td>);
  };
  return <thead className="bg-gray-100">{getHeaders()}</thead>;
};
