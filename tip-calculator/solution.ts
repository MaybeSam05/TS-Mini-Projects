export function calculateTotalWithTip(billAmount: number, tipPercent: number): number {
    const tip : number = billAmount * (tipPercent / 100)
    return +(tip + billAmount).toFixed(2)
}

console.log(calculateTotalWithTip(100, 15)) // 115
console.log(calculateTotalWithTip(42.5, 20)) // 51
console.log(calculateTotalWithTip(19.99, 18)) // 23.59
console.log(calculateTotalWithTip(10.005, 10)) 