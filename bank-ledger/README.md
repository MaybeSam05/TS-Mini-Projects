# Mini Project 10: Bank Ledger

## Story
You are tracking deposits and withdrawals in a bank account.

## File
Write your solution in `solution.ts`.

## Your Task
Create this type:

```ts
export type Transaction = {
  type: "deposit" | "withdrawal";
  amount: number;
};
```

Then implement this function:

```ts
export function summarizeLedger(
  startingBalance: number,
  transactions: Transaction[]
): {
  finalBalance: number;
  deposits: number;
  withdrawals: number;
}
```

## Requirements
- Apply each transaction in order.
- A deposit adds money.
- A withdrawal subtracts money.
- `deposits` and `withdrawals` should count how many transactions of each type there were.
- Round `finalBalance` to 2 decimal places.
- Assume all inputs are valid.

## Test Cases
```ts
summarizeLedger(100, [
  { type: "deposit", amount: 50 },
  { type: "withdrawal", amount: 20 }
])
// { finalBalance: 130, deposits: 1, withdrawals: 1 }

summarizeLedger(20, [])
// { finalBalance: 20, deposits: 0, withdrawals: 0 }
```

## TypeScript Focus
- type aliases
- literal union types
- arrays of objects

## Stretch Goal
Track the biggest deposit and biggest withdrawal too.
