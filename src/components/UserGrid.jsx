"use client";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import React, { useEffect, useState } from "react";
import CellQuestionLinks from "./CellQuestionLink";
export default function UserGrid({ data }) {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "question", width: 200 },
    { field: "category", filter: true, width: 175 },
    { field: "difficulty", filter: true },
    { field: "correct_answer", headerName: "Correct Answer" },
    { field: "answer_2", headerName: "Incorrect Answer" },
    { field: "answer_3", headerName: "Incorrect Answer" },
    { field: "answer_4", headerName: "Incorrect Answer" },
    {
      headerName: "Link",
      field: "id",
      cellRenderer: CellQuestionLinks,
    },
  ]);

  // turn off row translation
  const suppressRowTransform = true;

  const autoSizeStrategy = {
    type: "fitGridWidth",
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
        width: "90vw",
        height: "85vh",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <AgGridReact
        rowData={rowData}
        suppressRowTransform={suppressRowTransform}
        columnDefs={colDefs}
        pagination={true}
      />
    </div>
  );
}
