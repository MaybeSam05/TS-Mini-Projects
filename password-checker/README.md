# Mini Project 04: Password Checker

## Story
You are building a simple password rule checker.

## File
Write your solution in `solution.ts`.

## Your Task
Implement this function:

```ts
export function isStrongPassword(password: string): boolean
```

## Requirements
A password is strong only if it:

- has at least 8 characters
- contains at least 1 lowercase letter
- contains at least 1 uppercase letter
- contains at least 1 digit
- contains no spaces

Return `true` if the password is strong. Otherwise return `false`.

## Test Cases
```ts
isStrongPassword("Hello123") // true
isStrongPassword("hello123") // false
isStrongPassword("HELLO123") // false
isStrongPassword("Hello World1") // false
isStrongPassword("Hi7") // false
```

## TypeScript Focus
- `boolean`
- loops
- conditionals
- combining rules

## Stretch Goal
Return an object that explains which rule failed.
