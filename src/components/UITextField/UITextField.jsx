import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

/**
 * UITextField
 * -----------------------------------------------------------
 */
export default function UITextField({
  disabled,
  helperText,
  label,
  name,
  onChange = () => {},
  placeholder,
}) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          disabled={disabled}
          error={!!fieldState.error?.message}
          fullWidth
          helperText={fieldState.error ? fieldState.error.message : helperText}
          id="outlined-required"
          label={label}
          onChange={(e) => {
            field.onChange(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={placeholder}
          variant="outlined"
        />
      )}
    />
  );
}
