# Expense Tracker — JavaScript to Strict TypeScript

## Tasks

1. Create a `tsconfig.json` with `strict: true` (see class notes for the base config).

2. Rename every `.js` file to `.ts`.

3. Add a `Currency` union type (`"INR" | "USD" | "EUR"`) in `utils/currency.ts` and type the function signature.

4. Add a generic type parameter to `groupBy` in `utils/groupBy.ts` so it works for any array, not just expenses:

   ```typescript
   function groupBy<T>(
     items: T[],
     keyFn: (item: T) => string,
   ): { [key: string]: T[] };
   ```

5. Define a `User` interface in `users.ts`. Type the array and every function.

6. Define an `Expense` interface and a `Category` union type (`"Food" | "Travel" | "Other"`) in `expenses.ts` instead of using `string`.

7. Define a `Budget` interface in `budgets.ts` using your `Category` type.

8. Type every function's parameters and return value in `services/expenseService.ts`.

9. Type `getSummaryByCategory`'s return value as an index signature:

   ```typescript
   { [key: string]: number }
   ```

10. Build the budget report type in `expenseService.ts`:

    ```typescript
    type BudgetStatus = "under" | "over" | "no-budget";

    interface BudgetReportEntry {
      category: Category;
      spent: number;
      limit: number | null;
      status: BudgetStatus;
    }
    ```

    Then type `checkBudgetStatus(userId: number)` to return `BudgetReportEntry[]`.

11. Confirm `index.ts` needs no changes — if it errors, something upstream is typed wrong.

12. Configure path aliases in `tsconfig.json`:

    ```json
    "paths": {
      "@/*": ["./src/*"],
      "@utils/*": ["./src/utils/*"],
      "@services/*": ["./src/services/*"]
    }
    ```

13. Install the alias resolver:

    ```bash
    npm install -D tsc-alias
    ```

    Update `package.json`:

    ```json
    "scripts": {
      "build": "tsc && tsc-alias",
      "start": "node dist/index.js"
    }
    ```

14. Rewrite every cross-folder import to use an alias, e.g.:

    ```typescript
    // before
    import { formatCurrency } from "../utils/currency.js";

    // after
    import { formatCurrency } from "@utils/currency";
    ```

15. Verify the build works at runtime:
    ```bash
    npm run build
    node dist/index.js
    ```
    If you see `Cannot find module '@utils/currency'`, your aliases weren't rewritten — check that `tsc-alias` ran after `tsc`, not before.
