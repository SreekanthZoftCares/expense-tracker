import { getExpensesByUser } from "../expenses.js";
import { getBudget } from "../budgets.js";
import { formatCurrency } from "../utils/currency.js";
import { groupBy } from "../utils/groupBy.js";

export function getTotalForUser(userId) {
  const userExpenses = getExpensesByUser(userId);
  return userExpenses.reduce((sum, e) => sum + e.amount, 0);
}

export function getSummaryByCategory(userId) {
  const userExpenses = getExpensesByUser(userId);
  const grouped = groupBy(userExpenses, (e) => e.category);

  const summary = {};
  for (const category in grouped) {
    summary[category] = grouped[category].reduce((sum, e) => sum + e.amount, 0);
  }
  return summary;
}

export function checkBudgetStatus(userId) {
  const summary = getSummaryByCategory(userId);
  const report = [];

  for (const category in summary) {
    const spent = summary[category];
    const budget = getBudget(category);

    let status;
    if (!budget) {
      status = "no-budget";
    } else {
      status = spent > budget.limit ? "over" : "under";
    }

    report.push({
      category,
      spent,
      limit: budget ? budget.limit : null,
      status,
    });
  }

  return report;
}

export function printReport(userId, userName) {
  const total = getTotalForUser(userId);
  const summary = getSummaryByCategory(userId);
  const budgetReport = checkBudgetStatus(userId);

  console.log(`Expense Report for ${userName}`);
  console.log(`Total: ${formatCurrency(total)}`);
  console.log("By category:");
  for (const category in summary) {
    console.log(`  ${category}: ${formatCurrency(summary[category])}`);
  }
  console.log("Budget status:");
  for (const entry of budgetReport) {
    console.log(
      `  ${entry.category}: ${entry.status} (spent ${formatCurrency(entry.spent)})`,
    );
  }
}
