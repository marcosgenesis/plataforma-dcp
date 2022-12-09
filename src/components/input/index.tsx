import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import {
  Label,
  InputContainer,
  InputField,
  TextArea,
  ErrorMessage,
} from "./styles";

interface InputProps extends HtmlElementProps<HTMLInputElement> {
  label: string;
  error?: FieldError;
  color: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { onChange, onBlur, name, label, type, error, color, disabled },
  ref
) => {
  return (
    <InputContainer disabled={disabled}>
      <Label htmlFor={label} color={color}>
        {label}
      </Label>
      {type === "textarea" && (
        <TextArea name={name} ref={ref} onChange={onChange} onBlur={onBlur} />
      )}
      {type !== "textarea" && (
        <InputField
          name={name}
          type={type}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur} disabled={disabled}
        />
      )}
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
};

export default forwardRef(Input);
