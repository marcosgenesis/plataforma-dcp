import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ErrorMessage } from "../input/styles";
import { Label, InputContainer, SelectField } from "./styles";

interface InputProps extends HtmlElementProps<HTMLSelectElement> {
  label: string;
  disabled?: boolean;
  error?: FieldError;
  options: { value: string; label: string }[];
}

const Select: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { onChange, onBlur, name, label, disabled, options, error },
  ref
) => {
  return (
    <InputContainer>
      <Label disabled={disabled} htmlFor={label}>
        {label}
      </Label>
      <SelectField
        ref={ref}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
      >
        <option selected disabled>
          Selecionar
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </SelectField>
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
};

export default forwardRef(Select);
