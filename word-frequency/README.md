# Mini Project 09: Word Frequency

## Story
You want to count how many times each word appears in a sentence.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function countWords(sentence: string): Record<string, number>
```

## Requirements
- Convert the whole sentence to lowercase first.
- Split words by spaces.
- Ignore extra spaces.
- Count how many times each word appears.
- Assume the input contains only letters and spaces.

## Test Cases
```ts
countWords("go go stop stop stop")
// { go: 2, stop: 3 }

countWords("Hello hello HELLO")
// { hello: 3 }

countWords("  red   blue red  ")
// { red: 2, blue: 1 }
```

## TypeScript Focus
- `Record<string, number>`
- string splitting
- counting values

## Stretch Goal
Return the most common word too.
