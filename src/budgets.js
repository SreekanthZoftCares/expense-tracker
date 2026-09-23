const budgets = [];

export function setBudget(category, limit) {
  const existing = budgets.find((b) => b.category === category);
  if (existing) {
    existing.limit = limit;
    return existing;
  }
  const budget = { category, limit };
  budgets.push(budget);
  return budget;
}

export function getBudget(category) {
  return budgets.find((b) => b.category === category);
}

export function getAllBudgets() {
  return budgets;
}
