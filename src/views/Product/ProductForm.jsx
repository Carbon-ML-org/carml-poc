import React, { useEffect, useState } from "react";
import { get } from "lodash";
import { toDate } from "date-fns";
import X2JS from "x2js";
import XmlBeautify from "xml-beautify";
import { Box } from "@mui/system";
import DescriptionIcon from "@mui/icons-material/Description";
import BalanceIcon from "@mui/icons-material/Balance";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ScaleIcon from "@mui/icons-material/Scale";
import VerifiedIcon from "@mui/icons-material/Verified";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Tooltip from "@mui/material/Tooltip";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UIButton from "../../components/UIButton/UIButton";
import UIYearPicker from "../../components/UIYearPicker/UIYearPicker";
import UIDateTimePicker from "../../components/UIDateTimePicker/UIDateTimePicker";
import UIMap from "../../components/UIMap/UIMap";
import UISwitch from "../../components/UISwitch/UISwitch";
import UITextField from "../../components/UITextField/UITextField";
import productValidations from "./Product.validations";
import { SCode, SForm } from "./Product.styles";
import { TabContext, TabPanel } from "@mui/lab";

/**
 * ProductForm
 * -----------------------------------------------------------
 */
export default function ProductForm({ defaultValues, onSectionsChange }) {
  const methods = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(productValidations),
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  const x2js = new X2JS();
  const beautyXml = new XmlBeautify();

  const [verifierVisibility, setVerifierVisibility] = useState(
    methods.getValues(get("product.isVerified"))
  );

  const [carbonCreditVisibility, setCarbonCreditVisibility] = useState(
    methods.getValues(get("product.hasCarbonCredit"))
  );

  const [measureLocation, setMeasureLocation] = useState({
    lat: methods.getValues("product.measurement.location.lat"),
    lng: methods.getValues("product.measurement.location.lng"),
  });

  const [open, setOpen] = useState(false);
  const [result, setResult] = useState({
    json: "",
    xml: "",
  });
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    onSectionsChange(methods.getValues());
  }, [verifierVisibility, carbonCreditVisibility]); // eslint-disable-line

  function handleSubmit(data) {
    setOpen(true);
    setResult({
      json: JSON.stringify(data, null, 2),
      xml: beautyXml.beautify(x2js.js2xml(data), {
        indent: "  ",
        useSelfClosingElement: true,
      }),
    });
  }

  function handleJsonDialogClose() {
    setOpen(false);
  }

  function handleMeasureLatChange(lat) {
    setMeasureLocation({
      ...measureLocation,
      lat: parseFloat(lat),
    });
  }

  function handleMeasureLngChange(lng) {
    setMeasureLocation({
      ...measureLocation,
      lng: parseFloat(lng),
    });
  }

  function handleIsVerifiedChange(isVerified) {
    methods.reset({
      product: {
        verifier: !isVerified
          ? {
              source: "",
              origin: "",
              company: "",
            }
          : { ...defaultValues.verifier },
      },
    });
    setVerifierVisibility(isVerified);
  }

  function handleCarbonCreditChange(hasCarbonCredit) {
    methods.reset({
      product: {
        carbonCredit: !hasCarbonCredit
          ? {
              vintageYear: toDate(new Date()),
              id: "",
              carbonOffsetAmount: 0,
            }
          : { ...defaultValues.carbonCredit },
      },
    });
    setCarbonCreditVisibility(hasCarbonCredit);
  }

  function handleTabChange(e, newActiveTab) {
    setActiveTab(newActiveTab);
  }

  return (
    <FormProvider {...methods}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          mb={2}
          sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          Example PoC for
          <SCode style={{ marginLeft: "0.75rem" }}>{`<CarML>`}</SCode>
        </Typography>
        <Typography variant="h5" component="div" mb={1}>
          <SCode>{`<CarML>`}</SCode> Standard for CO2e Declaration
        </Typography>
        <Typography variant="body1" mb={2}>
          Fields can be customized based on message type, product and/or
          service.
        </Typography>
      </Grid>
      <SForm onSubmit={methods.handleSubmit(handleSubmit)}>
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12}>
            <Card sx={{ width: "100%" }}>
              <CardHeader
                title={
                  <Stack direction="row" alignItems="center" gap={1}>
                    <DescriptionIcon color="primary" />
                    <Tooltip
                      title="Lorem ipsum dolor sit amet"
                      placement="right"
                      arrow
                    >
                      <Typography id="general" variant="h5">
                        General
                      </Typography>
                    </Tooltip>
                  </Stack>
                }
              />
              <Divider />
              <CardContent sx={{ py: 4 }}>
                <Grid container spacing={2} maxWidth="md">
                  <Grid item xs={12}>
                    <UITextField
                      name="product.name"
                      label="Name"
                      placeholder="Name of product or service"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <UISwitch
                      defaultChecked
                      label="Is Verified"
                      name="product.isVerified"
                      onChange={handleIsVerifiedChange}
                    />
                    <UISwitch
                      defaultChecked
                      label="Carbon Credit"
                      name="product.hasCarbonCredit"
                      onChange={handleCarbonCreditChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* VOLUME */}
          <Grid item xs={6}>
            <Card sx={{ width: "100%" }}>
              <CardHeader
                title={
                  <Stack direction="row" alignItems="center" gap={1}>
                    <BalanceIcon color="primary" />
                    <Tooltip
                      title="Lorem ipsum dolor sit amet"
                      placement="right"
                      arrow
                    >
                      <Typography id="volume" variant="h5">
                        Volume
                      </Typography>
                    </Tooltip>
                  </Stack>
                }
              />
              <Divider />
              <CardContent sx={{ py: 4 }}>
                <Grid container spacing={2} maxWidth="md">
                  <Grid item xs={12}>
                    <UITextField
                      name="product.volume.descriptor"
                      label="Descriptor"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <UITextField name="product.volume.amount" label="Amount" />
                  </Grid>
                  <Grid item xs={6}>
                    <UITextField name="product.volume.units" label="Units" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* IDENTIFIER */}
          <Grid item xs={6}>
            <Card sx={{ width: "100%" }}>
              <CardHeader
                title={
                  <Stack direction="row" alignItems="center" gap={1}>
                    <AssignmentIcon color="primary" />
                    <Tooltip
                      title="Lorem ipsum dolor sit amet"
                      placement="right"
                      arrow
                    >
                      <Typography id="identifier" variant="h5">
                        Identifier
                      </Typography>
                    </Tooltip>
                  </Stack>
                }
              />
              <Divider />
              <CardContent sx={{ py: 4 }}>
                <Grid container spacing={2} maxWidth="md">
                  <Grid item xs={12}>
                    <UITextField
                      name="product.identifier.source"
                      label="Source"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <UITextField name="product.identifier.type" label="Type" />
                  </Grid>
                  <Grid item xs={6}>
                    <UITextField name="product.identifier.id" label="Id" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* REPORTER */}
          <Grid item xs={12}>
            <Card sx={{ width: "100%" }}>
              <CardHeader
                title={
                  <Stack direction="row" alignItems="center" gap={1}>
                    <HistoryEduIcon color="primary" />
                    <Tooltip
                      title="Lorem ipsum dolor sit amet"
                      placement="right"
                      arrow
                    >
                      <Typography id="reporter" variant="h5">
                        Reporter
                      </Typography>
                    </Tooltip>
                  </Stack>
                }
              />
              <Divider />
              <CardContent sx={{ py: 4 }}>
                <Grid container spacing={2} maxWidth="md">
                  <Grid item xs={12}>
                    <UITextField
                      name="product.reporter.source"
                      label="Source"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* MEASUREMENT */}
          <Grid item xs={12}>
            <Card sx={{ width: "100%" }}>
              <CardHeader
                title={
                  <Stack direction="row" alignItems="center" gap={1}>
                    <ScaleIcon color="primary" />
                    <Tooltip
                      title="Lorem ipsum dolor sit amet"
                      placement="right"
                      arrow
                    >
                      <Typography id="measurement" variant="h5">
                        Measurement
                      </Typography>
                    </Tooltip>
                  </Stack>
                }
              />
              <Divider />
              <CardContent sx={{ py: 4 }}>
                <Grid container spacing={2} maxWidth="md">
                  <Grid item xs={8}>
                    <UITextField
                      name="product.measurement.source"
                      label="Source"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <UIDateTimePicker
                      name="product.measurement.date"
                      label="Date"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <UITextField
                      name="product.measurement.origin"
                      label="Origin"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <UITextField
                      name="product.measurement.method"
                      label="Method"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <UITextField
                      name="product.measurement.calculation"
                      label="Calculation"
                    />
                  </Grid>
                  <Grid container spacing={2} item xs={6}>
                    <Grid item xs={12}>
                      <UITextField
                        name="product.measurement.address"
                        label="Address"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <UITextField
                        name="product.measurement.location.lng"
                        label="Lng"
                        onChange={handleMeasureLngChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <UITextField
                        name="product.measurement.location.lat"
                        label="Lat"
                        onChange={handleMeasureLatChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <UIMap {...measureLocation} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* Verifier */}
          {verifierVisibility && (
            <Grid item xs={12}>
              <Card sx={{ width: "100%" }}>
                <CardHeader
                  title={
                    <Stack direction="row" alignItems="center" gap={1}>
                      <VerifiedIcon color="primary" />
                      <Tooltip
                        title="Lorem ipsum dolor sit amet"
                        placement="right"
                        arrow
                      >
                        <Typography id="verifier" variant="h5">
                          Verifier
                        </Typography>
                      </Tooltip>
                    </Stack>
                  }
                />
                <Divider />
                <CardContent sx={{ py: 4 }}>
                  <Grid container spacing={2} maxWidth="md">
                    <Grid item xs={12}>
                      <UITextField
                        name="product.verifier.source"
                        label="Source"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <UITextField
                        name="product.verifier.origin"
                        label="Origin"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <UITextField
                        name="product.verifier.company"
                        label="Company"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
          {/* Verifier */}
          {carbonCreditVisibility && (
            <Grid item xs={12}>
              <Card sx={{ width: "100%" }}>
                <CardHeader
                  title={
                    <Stack direction="row" alignItems="center" gap={1}>
                      <ReceiptIcon color="primary" />
                      <Tooltip
                        title="Lorem ipsum dolor sit amet"
                        placement="right"
                        arrow
                      >
                        <Typography id="carbon-credit" variant="h5">
                          Carbon Credit
                        </Typography>
                      </Tooltip>
                    </Stack>
                  }
                />
                <Divider />
                <CardContent sx={{ py: 4 }}>
                  <Grid container spacing={2} maxWidth="md">
                    <Grid item xs={4}>
                      <UIYearPicker
                        name="product.carbonCredit.vintageYear"
                        label="Vintage Year"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <UITextField name="product.carbonCredit.id" label="Id" />
                    </Grid>
                    <Grid item xs={4}>
                      <UITextField
                        name="product.carbonCredit.carbonOffsetAmount"
                        label="Carbon Offset Amount"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
          <Grid item container xs={12} sx={{ justifyContent: "flex-end" }}>
            <UIButton variant="outlined">Cancel</UIButton>
            <UIButton type="submit" sx={{ ml: 1 }}>
              Send
            </UIButton>
            <Dialog
              fullWidth={true}
              maxWidth="md"
              onClose={handleJsonDialogClose}
              open={open}
            >
              <DialogTitle mb={-2}>
                Data Schema <small>(v1.0.0)</small>
              </DialogTitle>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={activeTab}>
                  <Box sx={{ borderBottom: 1, borderColor: "#d1d1d1" }}>
                    <Tabs
                      value={activeTab}
                      onChange={handleTabChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="JSON" value="1" />
                      <Tab label="XML" value="2" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">
                    <SyntaxHighlighter
                      language="json"
                      style={github}
                      showLineNumbers
                    >
                      {result.json}
                    </SyntaxHighlighter>
                  </TabPanel>
                  <TabPanel value="2">
                    <SyntaxHighlighter
                      language="xml"
                      style={github}
                      showLineNumbers
                    >
                      {result.xml}
                    </SyntaxHighlighter>
                  </TabPanel>
                </TabContext>
              </Box>
            </Dialog>
          </Grid>
        </Grid>
      </SForm>
    </FormProvider>
  );
}