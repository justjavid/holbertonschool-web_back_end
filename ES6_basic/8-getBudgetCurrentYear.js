/* eslint-disable */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {

  budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`] : gdp,
    [`capita-${getCurrentYear()}`] : capita,
}
  return budget;
}