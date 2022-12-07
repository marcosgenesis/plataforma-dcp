import { isAfter } from "date-fns";
import * as yup from "yup";

const schema = yup.object().shape({
  numeroCartao: yup
    .string()
    .min(16, "O cartão precisa conter 16 dígitos")
    .max(16, "O cartão precisa conter 16 dígitos")
    .required("O numero do cartão é obrigatório"),
  cvv: yup
    .string()
    .required("O CVV é obrigatório")
    .length(3, "Precisa conter 3 dígitos"),
  vencimento: yup
    .string()
    .typeError("Precisa ser uma data válida")
    .required("A data de vencimento é obrigatório"),
  parcela: yup.string().required("A parcela é obrigatório"),
  titular: yup.string().required("O nome do titular é obrigatório"),
});

export default schema;
