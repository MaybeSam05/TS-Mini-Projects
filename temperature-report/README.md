# Mini Project 07: Temperature Report

## Story
You recorded the temperatures for a few days and want a quick report.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function getTemperatureReport(readings: number[]): {
  min: number;
  max: number;
  average: number;
}
```

## Requirements
- Assume `readings` will always contain at least one number.
- Return the smallest reading as `min`.
- Return the largest reading as `max`.
- Return the average rounded to 1 decimal place.

## Test Cases
```ts
getTemperatureReport([70, 72, 68, 74])
// { min: 68, max: 74, average: 71 }

getTemperatureReport([32])
// { min: 32, max: 32, average: 32 }
```

## TypeScript Focus
- object return types
- arrays of numbers
- keeping track of min and max

## Stretch Goal
Add `range` to the returned object.
