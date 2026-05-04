# Mini Project 12: Movie Picker

## Story
You want a function that recommends movies by genre and minimum rating.

## File
Write your solution in `solution.ts`.

## Your Task
Create this interface:

```ts
export interface Movie {
  title: string;
  genre: string;
  rating: number;
  year?: number;
}
```

Then implement this function:

```ts
export function getRecommendedMovies(
  movies: Movie[],
  genre: string,
  minRating: number
): string[]
```

## Requirements
- Match `genre` without caring about uppercase or lowercase.
- Only include movies whose `rating` is greater than or equal to `minRating`.
- Return an array of labels.
- If a movie has a `year`, format it like `"Title (Year)"`.
- If a movie does not have a `year`, format it like `"Title"`.

## Test Cases
```ts
getRecommendedMovies(
  [
    { title: "Up", genre: "Animation", rating: 8.3, year: 2009 },
    { title: "Cars", genre: "Animation", rating: 7.1 },
    { title: "Arrival", genre: "Sci-Fi", rating: 7.9, year: 2016 }
  ],
  "animation",
  8
)
// ["Up (2009)"]

getRecommendedMovies(
  [
    { title: "Arrival", genre: "Sci-Fi", rating: 7.9, year: 2016 },
    { title: "Gravity", genre: "Sci-Fi", rating: 7.7 }
  ],
  "SCI-FI",
  7.7
)
// ["Arrival (2016)", "Gravity"]
```

## TypeScript Focus
- interfaces
- optional properties
- filtering arrays

## Stretch Goal
Sort the returned movies from highest rating to lowest rating.
