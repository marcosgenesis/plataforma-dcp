import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  cpf: yup.string().required("O cpf é obrigatório").nullable(),
  email: yup.string().required("O email é obrigatório"),
  telefone: yup.string().required("O telefone é obrigatório"),
});

export default schema;
