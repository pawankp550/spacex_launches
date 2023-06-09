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
    ].map((l) => <td>{l}</td>);
  };
  return <thead>{getHeaders()}</thead>;
};
