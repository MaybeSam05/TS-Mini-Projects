export function toIndoorVoice(message: string): string {
    return message.toLowerCase()
}

console.log(toIndoorVoice("HELLO")) // "hello"
console.log(toIndoorVoice("This IS TypeScript!")) // "this is typescript!"
console.log(toIndoorVoice("123 GO")) // "123 go"