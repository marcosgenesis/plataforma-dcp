export const convertMoney = (money: number): string => {
  return money.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
