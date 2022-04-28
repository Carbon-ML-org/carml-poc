import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Grid } from "@mui/material";
import { getProduct } from "../../store/product/product.actions";
import UITableOfContents from "../../components/UITableOfContents/UITableOfContents";
import ProductForm from "./ProductForm";
import { useHeadings } from "../../hooks/useHeadings";

/**
 * ProductView
 * -----------------------------------------------------------
 */
export default function ProductView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status } = useSelector((state) => state.product);
  const { headings, resetHeadings } = useHeadings();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProduct(id));
    }, 2000);
  }, []); // eslint-disable-line

  if (status === "success") {
    return (
      <Grid
        container
        columnSpacing={{ xs: 0, md: 4 }}
        sx={{
          width: "100%",
          height: "100%",
          px: 2,
          pt: 12,
          pb: 4,
        }}
        component={"main"}
      >
        <Grid item xs={12} md={10}>
          <ProductForm
            defaultValues={{ product }}
            onSectionsChange={() => resetHeadings()}
          />
        </Grid>
        <Grid item xs={12} md={2} position="relative" pt="9rem">
          <UITableOfContents headings={headings} />
        </Grid>
      </Grid>
    );
  } else if (status === "failed") {
    return <p>Not found!</p>;
  } else {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
}
