import type { Student } from "../models/student.js"
import { getResult } from "../utils/index.js";
let nextId = 1;
let existingStudents: Student[] = [];

export function isvalidateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function addStudent(name: string,age: number,email:string,course:string,marks:number):void{
if(name === ""){
console.log("Please provide the name")
return;
}

if (isNaN(age) || age <= 0|| age>120){
    console.log("Enter a valid age")
    return;
}
if (!isvalidateEmail(email)){
    console.log("Please provide a valid email address")
    return;
}
if(course === ""){
console.log("Please provide the course name")
return;
}
if (isNaN(marks) || marks < 0 || marks > 100){
    console.log("Enter a valid marks between 0 and 100")
    return;
}
const student: Student={
    id: 0, // Placeholder, will be assigned later
        name,
        email,
        age,
        course,
        marks
}
    const emailExists = existingStudents.some(student => student.email === email);
    if (emailExists) {
        console.log("Email already exists. Please provide a unique email.");
        return;
    }
    student.id = nextId; // Assign the next available ID to the new student
    nextId++; // Increment nextId for the next student
    existingStudents.push(student); // Add the new student to the existingStudents array
    console.log("Student added:", student);
}