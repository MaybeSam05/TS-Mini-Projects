# Mini Project 14: Quiz Scorer

## Story
You have an answer key and a student's answers. Score the quiz automatically.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function scoreQuiz(
  answerKey: Record<string, string>,
  studentAnswers: Record<string, string>
): {
  correct: number;
  incorrect: number;
  skipped: number;
  percentage: number;
}
```

## Requirements
- Check every question in `answerKey`.
- If the student's answer matches exactly, count it as correct.
- If the student answered but the answer is wrong, count it as incorrect.
- If the student did not answer that question, count it as skipped.
- `percentage` should be based on total questions in `answerKey`.
- Round `percentage` to the nearest whole number.

## Test Cases
```ts
scoreQuiz(
  { q1: "A", q2: "C", q3: "B", q4: "D" },
  { q1: "A", q2: "B", q4: "D" }
)
// { correct: 2, incorrect: 1, skipped: 1, percentage: 50 }

scoreQuiz(
  { q1: "True", q2: "False" },
  { q1: "True", q2: "False" }
)
// { correct: 2, incorrect: 0, skipped: 0, percentage: 100 }
```

## TypeScript Focus
- `Record`
- looping through object keys
- summary objects

## Stretch Goal
Return a list of the question IDs the student got wrong.
