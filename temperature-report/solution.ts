export function getTemperatureReport(readings: number[]) : {min: number, max: number, average: number, range: number} {
    let min_temp : number = readings[0]
    let max_temp : number = readings[0]
    let sum : number = readings[0]

    for (let i : number = 1; i < readings.length; i++) {
        if (readings[i] < min_temp) min_temp = readings[i]
        if (readings[i] > max_temp) max_temp = readings[i]
        sum += readings[i]
    }

    const range : number = max_temp - min_temp
    const average : number = +(sum / readings.length).toFixed(1)

    return {
        min: min_temp,
        max: max_temp,
        average: average,
        range: range
    }
}

console.log(getTemperatureReport([70, 72, 68, 74]))
// { min: 68, max: 74, average: 71 }

console.log(getTemperatureReport([32]))
// { min: 32, max: 32, average: 32 }