# Mini Project 13: Shape Area

## Story
Different shapes need different formulas. Build one function that can handle all of them.

## File
Write your solution in `solution.ts`.

## Your Task
Create this type:

```ts
export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };
```

Then implement this function:

```ts
export function getArea(shape: Shape): number
```

## Requirements
- Use `3.14159` for pi.
- Circle area: `pi * radius * radius`
- Rectangle area: `width * height`
- Triangle area: `(base * height) / 2`
- Round the final answer to 2 decimal places.

## Test Cases
```ts
getArea({ kind: "circle", radius: 2 }) // 12.57
getArea({ kind: "rectangle", width: 4, height: 3 }) // 12
getArea({ kind: "triangle", base: 10, height: 5 }) // 25
```

## TypeScript Focus
- discriminated unions
- branching by type
- math formulas

## Stretch Goal
Add support for a square shape.
