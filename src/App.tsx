import "./styles.css";
import { Table } from "./components/launchTable";
import { useEffect, useState } from "react";
import { Launch } from "./types/launch";
import { getLaunchData } from './requests/index'

export default function App() {
 const [tableData, setTableData] = useState<Launch[]>([]);
  
const fetchData = async () => {
  const data = await getLaunchData()
  setTableData(data || [])
}

useEffect(() => {
  fetchData()
}, [])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table data={tableData}/>
    </div>
  );
}
