"use client";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import React, { useEffect, useState } from "react";

export default function Grid({ data }) {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "category", filter: true, width: 300 },
    { field: "difficulty", filter: true },
    { field: "question", width: 750, filter: true },
    { field: "correct_answer", headerName: "Correct Answer" },
    { field: "answer_2", headerName: "Incorrect Answer" },
    { field: "answer_3", headerName: "Incorrect Answer" },
    { field: "answer_4", headerName: "Incorrect Answer" },
    { field: "username", filter: true },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  const autoSizeStrategy = {
    type: "fitCellContents",
  };
  useEffect(() => {
    if (data) {
      setRowData(data);
    }
  }, [data]);
  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={"ag-theme-quartz-dark"}
      style={{
        width: "83vw",
        height: "83vh",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
      />
    </div>
  );
}