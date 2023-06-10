import "./styles.css";
import { Table } from "./components/launchTable";
import { useEffect, useState } from "react";
import { Launch } from "./types/launch";
import { getLaunchData } from "./requests/index";
import { Pagination } from "./components/pagination";

export default function App() {
  const [tableData, setTableData] = useState<Launch[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    const offset = currentPage * 12 - 12;
    const data = await getLaunchData(offset, 12);
    setTableData(data || []);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const onPaginationClick = (selection: number) => {
    setCurrentPage(selection);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table data={tableData} />
      <Pagination current={currentPage} onClick={onPaginationClick} />
    </div>
  );
}
