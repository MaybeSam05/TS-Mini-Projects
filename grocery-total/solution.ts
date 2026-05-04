export function calculateGroceryTotal(prices: number[]): number {
    let sum : number = 0

    for (let i : number = 0; i < prices.length; i++) {
        sum += prices[i]
    }

    return salesTaxTotal(sum)
}

export function salesTaxTotal(sum : number) : number {
    let taxtotal = sum * 1.06625
    return +taxtotal.toFixed(2)
}


console.log(calculateGroceryTotal([])) // 0
console.log(calculateGroceryTotal([1, 2, 3])) // 6
console.log(calculateGroceryTotal([1.99, 2.49, 3.5])) // 7.98