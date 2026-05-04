# Mini Project 02: Tip Calculator

## Story
After eating at a restaurant, you want to quickly figure out the final bill after adding a tip.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function calculateTotalWithTip(billAmount: number, tipPercent: number): number
```

## Requirements
- `tipPercent` will be a whole number like `15` or `20`.
- Return the final total after adding the tip.
- Round the result to 2 decimal places.
- Assume both inputs are valid non-negative numbers.

## Test Cases
```ts
calculateTotalWithTip(100, 15) // 115
calculateTotalWithTip(42.5, 20) // 51
calculateTotalWithTip(19.99, 18) // 23.59
```

## TypeScript Focus
- `number`
- arithmetic
- function signatures
- rounding

## Stretch Goal
Write a second helper function that returns only the tip amount.
