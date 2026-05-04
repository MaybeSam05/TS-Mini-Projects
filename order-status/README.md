# Mini Project 11: Order Status

## Story
Different orders can be in different states. Your function should return the right message for each one.

## File
Write your solution in `solution.ts`.

## Your Task
Create this type:

```ts
export type Order =
  | { status: "pending"; id: number }
  | { status: "shipped"; id: number; trackingNumber: string }
  | { status: "delivered"; id: number; deliveredAt: string };
```

Then implement this function:

```ts
export function formatOrderStatus(order: Order): string
```

## Requirements
- If the order is pending, return: `Order #ID is pending.`
- If the order is shipped, return: `Order #ID shipped with tracking TRACKING.`
- If the order is delivered, return: `Order #ID was delivered on DATE.`
- Replace `ID`, `TRACKING`, and `DATE` with the real values.

## Test Cases
```ts
formatOrderStatus({ status: "pending", id: 3 })
// "Order #3 is pending."

formatOrderStatus({ status: "shipped", id: 4, trackingNumber: "ABC123" })
// "Order #4 shipped with tracking ABC123."

formatOrderStatus({ status: "delivered", id: 5, deliveredAt: "2026-05-01" })
// "Order #5 was delivered on 2026-05-01."
```

## TypeScript Focus
- discriminated unions
- type narrowing
- template strings

## Stretch Goal
Add a new `cancelled` order type.
