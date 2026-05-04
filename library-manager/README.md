# Mini Project 15: Library Manager

## Story
For your final mini project, build a small class that manages books in a library.

## File
Write your solution in `solution.ts`.

## Your Task
Create this interface and class:

```ts
export interface Book {
  title: string;
  author: string;
  isBorrowed: boolean;
}

export class Library {
  books: Book[];

  constructor(books?: Book[]);
  addBook(title: string, author: string): void;
  borrowBook(title: string): boolean;
  returnBook(title: string): boolean;
  listAvailableBooks(): string[];
}
```

## Requirements
- `constructor` should accept an optional starting list of books.
- `addBook` should add a new book with `isBorrowed: false`.
- `borrowBook` should mark the first matching available book as borrowed and return `true`.
- If `borrowBook` cannot find an available match, return `false`.
- `returnBook` should mark the first matching borrowed book as available and return `true`.
- If `returnBook` cannot find a borrowed match, return `false`.
- `listAvailableBooks` should return the titles of all books that are not borrowed.

## Test Cases
```ts
const library = new Library([
  { title: "Dune", author: "Frank Herbert", isBorrowed: false },
  { title: "1984", author: "George Orwell", isBorrowed: true }
]);

library.listAvailableBooks() // ["Dune"]
library.borrowBook("Dune") // true
library.borrowBook("Dune") // false
library.returnBook("1984") // true
library.addBook("The Hobbit", "J.R.R. Tolkien")
library.listAvailableBooks() // ["1984", "The Hobbit"]
```

## TypeScript Focus
- classes
- constructors
- methods
- arrays of typed objects

## Stretch Goal
Add a method that returns all books by a specific author.
