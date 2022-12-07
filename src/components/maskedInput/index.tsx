import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import MaskedInput from "react-text-mask";

import {
  Label,
  InputContainer,
  InputField,
  TextArea,
  ErrorMessage,
  MaskedInputField,
} from "./styles";

interface InputProps extends HtmlElementProps<HTMLInputElement> {
  label: string;
  error?: FieldError;
  color: string;
  mask: any[];
}

const MaskInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { onChange, onBlur, name, label, type, error, color, mask },
  ref
) => {
  return (
    <InputContainer>
      <Label htmlFor={label} color={color}>
        {label}
      </Label>
      {type === "textarea" && (
        <TextArea name={name} ref={ref} onChange={onChange} onBlur={onBlur} />
      )}
      {type !== "textarea" && (
        <MaskedInputField
          mask={mask}
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

export default forwardRef(MaskInput);
