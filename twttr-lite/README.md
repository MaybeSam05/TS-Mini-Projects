# Mini Project 05: TWTTR Lite

## Story
Short messages sometimes remove vowels to save space. Build a function that does that automatically.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function removeVowels(text: string): string
```

## Requirements
- Remove all vowels: `a`, `e`, `i`, `o`, `u`
- Treat uppercase and lowercase vowels the same way.
- Keep all other characters unchanged.

## Test Cases
```ts
removeVowels("Twitter") // "Twttr"
removeVowels("What's your name?") // "Wht's yr nm?"
removeVowels("CS50") // "CS50"
```

## TypeScript Focus
- iterating over a string
- building a new string
- `for...of`

## Stretch Goal
Make a second version that removes vowels and spaces.
