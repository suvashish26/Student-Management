import type { Student } from "../models/student.js"
import { getResult } from "../utils/index.js";
import { isNotEmptyString, isValidateAge, isvalidateEmail, isValidMarks } from "../utils/validation.js";
let nextId = 1;
let existingStudents: Student[] = [];

//add student
export function addStudent(name: string,age: number,email:string,course:string,marks:number):void{
if(!isNotEmptyString(name)){
console.log("Please provide the name")
return;
}

if (!isValidateAge(age)){
    console.log("Enter a valid age")
    return;
}
if (!isvalidateEmail(email)){
    console.log("Please provide a valid email address")
    return;
}
if(!isNotEmptyString(course)){
console.log("Please provide the course name")
return;
}
if (!isValidMarks(marks)){
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
//get student
export function getAllStudent(): Student[]{
    return existingStudents;
}
//find student
export function findStudent(id:number): Student | undefined{
return existingStudents.find(student => student.id ===id)
}
//update student
export function updateStudent(id:number, name: string, age: number, email: string, course: string, marks: number):void{
        const student = existingStudents.find(student => student.id === id);
        if (student === undefined){
            console.log("Student not found")
            return;
        }
        if (name===""){
            console.log("Please provide the name");
            return;
        }
        if (name === "") {
        console.log("Please provide the name");
        return;
    }
    if (isNaN(age) || age <= 0 || age > 120) {
        console.log("Enter a valid age");
        return;
    }
    if (!isvalidateEmail(email)) {
        console.log("Please provide a valid email address");
        return;
    }
    if (course === "") {
        console.log("Please provide the course name");
        return;
    }
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Enter a valid marks between 0 and 100");
        return;
    }
    const emailExists= existingStudents.some(s=> s.email === email && s.id===id);
    if(emailExists){
        console.log("Email already exists. Please provide a valid email")
         return;
    }
    student.name= name;
    student.age= age;
    student.email=email;
    student.course=course;
    student.marks= marks;
    console.log("Student updated:", student);
}
//delete student
export function deleteStudent(id:number):void{
const student = existingStudents.find(student => student.id ===id)
if (student === undefined){
            console.log("Student not found")
            return;
        }
existingStudents = existingStudents.filter(student => student.id !== id);
console.log("Student deleted successfully:", student);
}

 export function searchStudent(name: string,email:string,course:string):void{
 const results= existingStudents.filter(student => student.name.toLowerCase().includes(name.toLowerCase()) || student.email.toLowerCase().includes(email.toLowerCase())|| student.course.toLowerCase().includes(course.toLowerCase()) );
 if (results.length === 0){
            console.log("Student not found")
            return;
        }
    for (const student of results){
         console.log(`ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, Course: ${student.course}, Marks: ${student.marks}`);
    }
 }
 export function filterStudents(course:string,result: "Pass" | "Fail"|""):void{
    const results= existingStudents.filter(student =>{
        const courseMatches = course === "" || student.course === course;
        const resultMatches = result === "" || getResult(student.marks)===result;
        return courseMatches && resultMatches
    })
     if (results.length === 0) {
        console.log("No students found.");
        return;
    }

    for (const student of results) {
        console.log(`ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, Course: ${student.course}, Marks: ${student.marks}, Result: ${getResult(student.marks)}`);
    }
 }