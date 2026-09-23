## Migration Task for Students

## Goal: Convert this entire project to strict TypeScript with zero any, in this order:

## Setup — add tsconfig.json with strict: true, rename all files .js → .ts, get it compiling (expect ~15–20 errors to fix).

## users.ts — define a User interface, type all function signatures and the users array.

## expenses.ts — define an Expense interface. Use a union or literal type for category (e.g. "Food" | "Travel" | "Other") instead of string. Type deleteExpense's return as boolean.

## currency.ts — type formatCurrency and convert; use a literal union for supported currencies instead of a plain string.

## expenseService.ts — type getSummaryByCategory's return as Record<Expense["category"], number> instead of a loose object (this is the key exercise — connects back to Record/mapped types from Day 2–3).

## index.ts — no changes needed if everything above is typed correctly; if it errors, something upstream is wrong.

## add a getUserById call in index.ts and handle the User | undefined return properly (no ! non-null assertion allowed).
