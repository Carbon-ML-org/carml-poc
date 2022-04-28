import { Controller, useFormContext } from "react-hook-form";
import { FormControlLabel, Switch } from "@mui/material";

/**
 * UISwitch
 * -----------------------------------------------------------
 */
export default function UISwitch({ label, name, defaultChecked, onChange }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Switch
              defaultChecked={defaultChecked}
              inputRef={field.ref}
              onChange={(e) => {
                field.onChange(e.target.checked);
                onChange(e.target.checked);
              }}
            />
          }
          label={label}
        />
      )}
    />
  );
}
