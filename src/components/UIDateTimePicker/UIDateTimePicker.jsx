import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/lab";

/**
 * UIDateTimePicker
 * -----------------------------------------------------------
 */
export default function UIDateTimePicker({ label, name }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DateTimePicker
          renderInput={(props) => <TextField {...props} helperText={null} />}
          label={label}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
}
