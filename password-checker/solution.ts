export function isStrongPassword(password: string): boolean {
    const password_length : number = password.length // atleast 8 
    let lowercase_amount : number = 0
    let uppercase_amount : number = 0
    let space_amount : number = 0
    let digit_amount : number = 0

    for (let i: number = 0; i < password.length; i++) {
        if (isUpper(password.charAt(i))) {
            uppercase_amount++
        }
        else if (isLower(password.charAt(i))) {
            lowercase_amount++
        }
        else if (isDigit(password.charAt(i))) {
            digit_amount++
        }
        else if (isSpace(password.charAt(i))) {
            space_amount++
        }
    }

    if (password_length >= 8 && lowercase_amount >= 1 && uppercase_amount >= 1 && digit_amount >= 1 && space_amount === 0) return true
    return false
}

export function isUpper(char: string): boolean {
    return char === char.toUpperCase() && char !== char.toLowerCase()
}

export function isLower(char: string): boolean {
    return char === char.toLowerCase() && char !== char.toUpperCase()
}

export function isSpace(char: string): boolean {
    return char === ' '
}

export function isDigit(char: string): boolean {
    return char >= '0' && char <= '9'
}
