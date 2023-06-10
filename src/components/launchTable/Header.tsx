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
    ].map((l) => <td className="p-2">{l}</td>);
  };
  return <thead className="bg-gray-100">{getHeaders()}</thead>;
};
