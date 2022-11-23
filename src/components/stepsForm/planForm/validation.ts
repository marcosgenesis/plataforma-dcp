import * as yup from "yup";

const schema = yup.object().shape({
  plan: yup.string().required("É obrigatorio a escolha de um plano").nullable(),
});

export default schema;
