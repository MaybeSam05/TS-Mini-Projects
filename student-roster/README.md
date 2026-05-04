# Mini Project 08: Student Roster

## Story
You are managing a classroom and need a quick summary of attendance and scores.

## File
Write your solution in `solution.ts`.

## Your Task
First create this interface:

```ts
export interface Student {
  name: string;
  present: boolean;
  score: number;
}
```

Then implement this function:

```ts
export function getClassSummary(students: Student[]): {
  presentCount: number;
  absentCount: number;
  topStudent: string | null;
}
```

## Requirements
- Count how many students are present.
- Count how many students are absent.
- Return the name of the student with the highest score.
- If the array is empty, return `null` for `topStudent`.
- If there is a tie for highest score, return the first student with that score.

## Test Cases
```ts
getClassSummary([
  { name: "Ava", present: true, score: 91 },
  { name: "Ben", present: false, score: 88 },
  { name: "Cara", present: true, score: 95 }
])
// { presentCount: 2, absentCount: 1, topStudent: "Cara" }

getClassSummary([])
// { presentCount: 0, absentCount: 0, topStudent: null }
```

## TypeScript Focus
- interfaces
- arrays of objects
- `string | null`

## Stretch Goal
Also return the class average score.
