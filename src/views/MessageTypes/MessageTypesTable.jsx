import React, { useEffect, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { Box, Card, CardContent, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getMessageTypes } from "../../store/messageTypes/messageTypes.actions";

function parseMessageTypes(messageTypes) {
  return messageTypes.map((mt) => ({
    id: mt.id,
    name: mt.name,
    amount: `${mt.amount.amount}${mt.amount.units}`,
    calculation: mt.declaredTraitMeasurementMethodology.calculation,
    date: format(
      new Date(mt.declaredTraitMeasurementMethodology.date),
      "MM/dd/yyyy"
    ),
  }));
}

const MESSAGE_TYPES_COLUMNS = [
  {
    field: "id",
    headerName: "ID",
    renderCell: ({ value }) => {
      return (
        <Link component={RouterLink} to={`/message-types/${value}`}>
          {value}
        </Link>
      );
    },
    width: 300,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
  },
  {
    field: "calculation",
    headerName: "Calculation",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
];

function MessageTypesTable() {
  const dispatch = useDispatch();
  const { messageTypes, status } = useSelector((state) => state.messageTypes);

  console.log("messageTypes:", messageTypes);
  console.log("status:", status);

  useEffect(() => {
    dispatch(getMessageTypes());
  }, []); // eslint-disable-line

  const messageTypesRows = useMemo(
    () => parseMessageTypes(messageTypes),
    [messageTypes]
  );

  if (status === "success") {
    return (
      <Card>
        <CardContent
          sx={{ width: "100%", height: "400px" }}
          style={{ padding: 0 }}
        >
          <DataGrid
            sx={{ border: 0 }}
            columns={MESSAGE_TYPES_COLUMNS}
            pageSize={10}
            rows={messageTypesRows}
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
          minHeight: "50rem",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
}

export default MessageTypesTable;
