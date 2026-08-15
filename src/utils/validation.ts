export function isvalidateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function isNotEmptyString(value:string):boolean{
    return value.trim()!=""
}
export function isValidateAge(age:number):boolean{
return !isNaN(age) && age > 0 && age <= 120;
}
export function isValidMarks(marks: number): boolean {
    return !isNaN(marks) && marks >= 0 && marks <= 100;
}