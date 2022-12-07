import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa ter no mínimo 3 caracteres"),
  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Isso não é um CPF")
    .required("O CPF é obrigatório"),
  email: yup
    .string()
    .email("Isso não é um email")
    .required("O email é obrigatório"),
  telefone: yup
    .string()
    .required("O telefone é obrigatório")
    .min(11, "Telefone precisa conter no mínimo 11 dígitos")
    .max(11, "Telefone precisa conter no mínimo 11 dígitos"),
});

export default schema;
