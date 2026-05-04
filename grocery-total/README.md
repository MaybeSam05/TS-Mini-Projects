# Mini Project 06: Grocery Total

## Story
You have a list of grocery prices and want the total cost.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function calculateGroceryTotal(prices: number[]): number
```

## Requirements
- Return the sum of all prices.
- Round the final answer to 2 decimal places.
- If the array is empty, return `0`.
- Assume all prices are valid non-negative numbers.

## Test Cases
```ts
calculateGroceryTotal([]) // 0
calculateGroceryTotal([1, 2, 3]) // 6
calculateGroceryTotal([1.99, 2.49, 3.5]) // 7.98
```

## TypeScript Focus
- arrays
- loops
- number totals

## Stretch Goal
Add a second function that also applies a sales tax percentage.
