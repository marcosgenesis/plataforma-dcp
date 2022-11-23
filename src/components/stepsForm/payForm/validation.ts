import * as yup from "yup";

const schema = yup.object().shape({
  numeroCartao: yup.string().required("O numero do cartão é obrigatório"),
  cvv: yup.string().required("O CVV é obrigatório").nullable(),
  vencimento: yup.string().required("A data de vencimento é obrigatório"),
  parcela: yup.string().required("A parcela é obrigatório"),
  titular: yup.string().required("O nome do titular é obrigatório"),
});

export default schema;
