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
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { onChange, onBlur, name, label, type, error },
  ref
) => {
  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      {type === "textarea" && (
        <TextArea name={label} ref={ref} onChange={onChange} onBlur={onBlur} />
      )}
      {type !== "textarea" && (
        <InputField
          name={name}
          type={type}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
};

export default forwardRef(Input);
