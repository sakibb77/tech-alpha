export const currencyFormatter = (price) => {
  if (!price) return null;

  return price.toLocaleString(navigator.language, {
    style: "currency",
    currency: "USD",
  });
};
