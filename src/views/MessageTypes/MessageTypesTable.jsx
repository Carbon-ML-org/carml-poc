import React from "react";
import { Card, CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function MessageTypesTable({ rows, columns }) {
  return (
    <Card>
      <CardContent
        sx={{ width: "100%", height: "400px" }}
        style={{ padding: 0 }}
      >
        <DataGrid
          sx={{ border: 0 }}
          columns={columns}
          pageSize={10}
          rows={rows}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </CardContent>
    </Card>
  );
}

export default MessageTypesTable;
