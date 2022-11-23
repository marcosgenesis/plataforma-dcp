import * as yup from "yup";

const schema = yup.object().shape({
  cep: yup.string().required("O cep é obrigatório"),
  rua: yup.string().required("A rua é obrigatório").nullable(),
  city: yup.string().required("A cidade é obrigatório"),
  bairro: yup.string().required("O bairro é obrigatório"),
  state: yup.string().required("O estado é obrigatório"),
});

export default schema;
