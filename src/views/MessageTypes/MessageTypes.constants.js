import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export const MESSAGE_TYPES_COLUMNS = [
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
