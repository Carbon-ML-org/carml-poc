import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";

/**
 * UIDatePicker
 * -----------------------------------------------------------
 */
export default function UIDatePicker({ label, name }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          renderInput={(props) => <TextField {...props} helperText={null} />}
          label={label}
          value={field.value}
          views={["year"]}
          onChange={field.onChange}
        />
      )}
    />
  );
}
