# Mini Project 03: Grade Checker

## Story
Schools often convert number scores into letter grades. Your job is to automate that rule.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function getLetterGrade(score: number): string
```

## Requirements
- Use this grading scale:
- `90` to `100` => `"A"`
- `80` to `89` => `"B"`
- `70` to `79` => `"C"`
- `60` to `69` => `"D"`
- Below `60` => `"F"`
- Assume the input will always be between `0` and `100`.

## Test Cases
```ts
getLetterGrade(95) // "A"
getLetterGrade(82) // "B"
getLetterGrade(70) // "C"
getLetterGrade(61) // "D"
getLetterGrade(12) // "F"
```

## TypeScript Focus
- `if`, `else if`, `else`
- comparison operators
- returning strings

## Stretch Goal
Return a longer message like `"A - great job"` instead of just the letter.
