import { addUser } from "./users.js";
import { addExpense } from "./expenses.js";
import { setBudget } from "./budgets.js";
import { printReport } from "./services/expenseService.js";

const user = addUser("Sreekanth", "sree@example.com");

setBudget("Food", 700);
setBudget("Travel", 1000);

addExpense(user.id, 500, "Food", "Lunch with team");
addExpense(user.id, 1200, "Travel", "Cab to client site");
addExpense(user.id, 300, "Food", "Coffee");

printReport(user.id, user.name);
