export function removeVowels(text: string) : string {
    let twttr : string = ""

    for (let i : number = 0; i < text.length; i++) {
        if (isNotVowel(text.charAt(i))) {
            twttr += text.charAt(i)
        }
    }

    return twttr
}

export function isNotVowel(char: string) : boolean {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') return false
    return true
}


console.log(removeVowels("Twitter")) // "Twttr"
console.log(removeVowels("What's your name?")) // "Wht's yr nm?"
console.log(removeVowels("CS50")) // "CS50"