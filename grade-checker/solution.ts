export function getLetterGrade(score: number): string {
    if (score > 100 || score < 0) {
        return 'ERROR! Enter a number between 0 and 100'
    }
    else if (score >= 90) {
        return 'A'
    }
    else if (score >= 80) {
        return 'B'
    }
    else if (score >= 70) {
        return 'C'
    }
    else if (score >= 60) {
        return 'D'
    }
    else {
        return 'F'
    }
    
}

console.log(getLetterGrade(95)) // "A"
console.log(getLetterGrade(82)) // "B"
console.log(getLetterGrade(70)) // "C"
console.log(getLetterGrade(61)) // "D"
console.log(getLetterGrade(12))// "F"
console.log(getLetterGrade(101))// "F"
console.log(getLetterGrade(-100))// "F"