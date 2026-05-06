export interface Student {
    name : string,
    present : boolean,
    score : number
}

export function getClassSummary(students: Student[]) : {presentCount: number; absentCount: number; topStudent: string | null; } {
    let presentCount : number = 0;
    let absentCount : number = 0;
    let currTopStudent : string | null = null
    let topScore : number = -1;

    for (let i : number = 0; i < students.length; i++) {
        if (students[i].present) presentCount++
        else absentCount++

        if (students[i].score > topScore) {
            topScore = students[i].score;
            currTopStudent = students[i].name;
        }
    }

    return {presentCount : presentCount, absentCount : absentCount, topStudent : currTopStudent}
}

console.log(getClassSummary([
    { name: "Ava", present: true, score: 91 },
    { name: "Ben", present: false, score: 88 },
    { name: "Cara", present: true, score: 95 }
  ]))
  // { presentCount: 2, absentCount: 1, topStudent: "Cara" }
  
  console.log(getClassSummary([]))
