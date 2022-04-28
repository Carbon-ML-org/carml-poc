import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

function Products() {
  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
}

export default Products;
