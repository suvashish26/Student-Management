import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { addStudent, deleteStudent, filterStudents, findStudent, getAllStudent, getStatistics, searchStudent, updateStudent } from "./services/student.service.js";

async function main() {
const rl =readline.createInterface({input,output})
const name = await rl.question("Enter your name: ");
const age= Number(await rl.question("Enter your age: "));
const email = await rl.question("Enter your email: ")
const course = await rl.question("Enter your course: ")
const marks = Number(await rl.question("Enter your marks: "));

addStudent(name,age,email,course,marks)

// view student stored in memory
const students = getAllStudent();
if (students.length === 0) {
    console.log("No students found.");
} else {
    for (const student of students) {
        console.log(`ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, Course: ${student.course}, Marks: ${student.marks}`);
    }

//find student
const findIdInput = await rl.question("Enter student id to find: ")
const findId = Number(findIdInput)
const student= findStudent(findId)
if (student === undefined) {
    console.log("Student not found.");
} else {
    console.log(`ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, Course: ${student.course}, Marks: ${student.marks}`);
}

//Update
const idInput= await rl.question("Enter student ID to update: ")
const id = Number(idInput);

const name = await rl.question("Enter new name: ")
const age = Number(await rl.question("Enter new age: "));
const email = await rl.question("Enter new email: ")
const course = await rl.question("Entet new course: ")
const marks = Number(await rl.question("Enter new marks: "))

updateStudent(id,name,age,email,course,marks)

//delete
const deleteIdInput = await rl.question("Enter student ID to delete: ");
const deleteId = Number(deleteIdInput);
deleteStudent(deleteId);

//search 
const nameSearch = await rl.question("Enter new name: ")
const emailSearch = await rl.question("Enter new email: ")
const courseSearch = await rl.question("Enter new course: ")
searchStudent(nameSearch,emailSearch,courseSearch)

//filter
const courseFilter = await rl.question("Filter by course: ");
const resultFilter = await rl.question("Filter by result - Pass/Fail: ");

filterStudents(courseFilter, resultFilter as "Pass" | "Fail" | "");

//statistics
getStatistics()
rl.close();
}
}
main();
