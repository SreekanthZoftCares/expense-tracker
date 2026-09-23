import { getExpensesByUser } from "../expenses.js";
import { formatCurrency } from "../utils/currency.js";

export function getTotalForUser(userId) {
  const userExpenses = getExpensesByUser(userId);
  return userExpenses.reduce((sum, e) => sum + e.amount, 0);
}

export function getSummaryByCategory(userId) {
  const userExpenses = getExpensesByUser(userId);
  const summary = {};

  for (const expense of userExpenses) {
    if (!summary[expense.category]) {
      summary[expense.category] = 0;
    }
    summary[expense.category] += expense.amount;
  }

  return summary;
}

export function printReport(userId, userName) {
  const total = getTotalForUser(userId);
  const summary = getSummaryByCategory(userId);

  console.log(`Expense Report for ${userName}`);
  console.log(`Total: ${formatCurrency(total)}`);
  console.log("By category:");
  for (const [category, amount] of Object.entries(summary)) {
    console.log(`  ${category}: ${formatCurrency(amount)}`);
  }
}
