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
  height?: string;
  error?: FieldError;
  color: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { onChange, onBlur, name, label, type, error, color, height },
  ref
) => {
  return (
    <InputContainer>
      <Label htmlFor={label} color={color}>{label}</Label>
      {type === "textarea" && (
        <TextArea name={name} ref={ref} onChange={onChange} onBlur={onBlur} />
      )}
      {type !== "textarea" && (
        <InputField
          name={name}
          type={type}
          ref={ref}
          height={height}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
};

export default forwardRef(Input);
