import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  Typography,
} from "@mui/material";
import {
  SMTActions,
  SMTChoices,
  SMTChoice,
  SMTChoiceText,
  SMTHeader,
  SMTSelectors,
} from "./MessageTypeDialog.styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function MessageTypeDialog({ onClose, open }) {
  const [selectedChoice, selectChoice] = useState(null);
  const [selectedIndustry, selectIndustry] = useState("");
  const [selectedProductCategory, selectProductCategory] = useState("");
  const [selectedMessageTypeCategory, selectMessageTypeCategory] = useState("");

  function handleIndustrySelection(e) {
    selectIndustry(e.target.value);
  }

  function handleProductCategorySelection(e) {
    selectProductCategory(e.target.value);
  }

  function handleMessageTypeCategorySelection(e) {
    selectMessageTypeCategory(e.target.value);
  }

  function handleClose() {
    selectChoice(null);
    onClose();
  }

  function handleAccept() {
    console.log("Accept!");
  }

  function renderChoicesList() {
    return (
      <SMTChoices>
        <SMTChoice
          onClick={() => {
            selectChoice("Product");
          }}
        >
          <SMTChoiceText>
            <Typography variant="h6">Product</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SMTChoiceText>
        </SMTChoice>
        <SMTChoice
          onClick={() => {
            selectChoice("Service");
          }}
        >
          <SMTChoiceText>
            <Typography variant="h6">Service</Typography>
            <Typography variant="body2">
              Ipsum nunc aliquet bibendum enim facilisis gravida neque
              convallis. Nunc mi ipsum faucibus vitae aliquet.
            </Typography>
          </SMTChoiceText>
        </SMTChoice>
      </SMTChoices>
    );
  }

  function renderSelectorsFromChoice() {
    return (
      <SMTSelectors>
        <FormControl fullWidth sx={{ mb: "1rem" }}>
          <InputLabel id="industry-select-label">Industry</InputLabel>
          <Select
            labelId="industry-select-label"
            id="industry-select"
            value={selectedIndustry}
            label="Industry"
            onChange={handleIndustrySelection}
          >
            <MenuItem value="Aluminum">Aluminum</MenuItem>
            <MenuItem value="Cement">Cement</MenuItem>
            <MenuItem value="Transportation">Transportation</MenuItem>
          </Select>
          <FormHelperText>
            Manufacturing associated to the product.
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: "1rem" }}>
          <InputLabel id="product-category-select-label">
            Product Category
          </InputLabel>
          <Select
            labelId="product-category-select-label"
            id="product-category-select"
            value={selectedProductCategory}
            label="Product Category"
            onChange={handleProductCategorySelection}
          >
            <MenuItem value="Aluminum Sheets">Aluminum Sheets</MenuItem>
            <MenuItem value="Aluminum Bars">Aluminum Bars</MenuItem>
            <MenuItem value="Aluminum Coils">Aluminum Coils</MenuItem>
          </Select>
          <FormHelperText>
            Classification linked to selected industry.
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="message-type-category-select-label">
            Message Type Category
          </InputLabel>
          <Select
            labelId="message-type-category-select-label"
            id="message-type-category-select"
            value={selectedMessageTypeCategory}
            label="Message Type Category"
            onChange={handleMessageTypeCategorySelection}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="CBAM">CBAM</MenuItem>
            <MenuItem value="Carbon Credits RFQ">Carbon Credits RFQ</MenuItem>
          </Select>
          <FormHelperText>
            Associated to financial credit markets, consumer goods, services,
            etc.
          </FormHelperText>
        </FormControl>
      </SMTSelectors>
    );
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth="sm"
      TransitionComponent={Transition}
    >
      <SMTHeader>
        <Typography variant="h5">
          {`Create ${selectedChoice || ""} Message Type`}
        </Typography>
      </SMTHeader>
      <DialogContent>
        {selectedChoice ? renderSelectorsFromChoice() : renderChoicesList()}
      </DialogContent>
      {selectedChoice && (
        <SMTActions>
          <Button
            autoFocus
            disableElevation
            onClick={handleAccept}
            variant="contained"
            size="medium"
          >
            Accept
          </Button>
        </SMTActions>
      )}
    </Dialog>
  );
}

export default MessageTypeDialog;
