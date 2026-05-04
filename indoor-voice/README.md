# Mini Project 01: Indoor Voice

## Story
Sometimes people type like they are shouting. Build a function that turns any message into lowercase.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function toIndoorVoice(message: string): string
```

## Requirements
- Return the same text in lowercase.
- Keep spaces, numbers, and punctuation unchanged.
- Do not print inside the function. Return the result.

## Test Cases
```ts
toIndoorVoice("HELLO") // "hello"
toIndoorVoice("This IS TypeScript!") // "this is typescript!"
toIndoorVoice("123 GO") // "123 go"
```

## TypeScript Focus
- `string`
- function parameters
- return types
- string methods

## Stretch Goal
Add a few `console.log` calls at the bottom of the file to test your function manually.
