const expenses = [];

export function addExpense(userId, amount, category, note) {
  const expense = {
    id: expenses.length + 1,
    userId,
    amount,
    category,
    note,
    date: new Date().toISOString(),
  };
  expenses.push(expense);
  return expense;
}

export function getExpensesByUser(userId) {
  return expenses.filter((e) => e.userId === userId);
}

export function deleteExpense(id) {
  const index = expenses.findIndex((e) => e.id === id);
  if (index === -1) return false;
  expenses.splice(index, 1);
  return true;
}

export function getAllExpenses() {
  return expenses;
}
