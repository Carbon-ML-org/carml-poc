import React from "react";
import { Box, Skeleton, Card, CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function MessageTypesTable({ rows, columns, status }) {
  if (status === "success") {
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
  } else if (status === "failed") {
    return <p>Not found!</p>;
  } else {
    return (
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Skeleton width="71rem" />
        <Skeleton width="71rem" />
        <Skeleton width="71rem" />
      </Box>
    );
  }
}

export default MessageTypesTable;
