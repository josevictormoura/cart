export function formatCurrancy(value, currency) {
  return value.toLocaleString("pt-BR",{style: "currency", currency})
}