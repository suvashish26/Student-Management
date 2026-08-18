import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { addStudent, deleteStudent, filterStudents, findStudent, getAllStudent, getStatistics, searchStudent, sortStudent, updateStudent } from "./services/student.service.js";
async function main() {
    const rl = readline.createInterface({ input, output });
    let running = true;
    while (running) {
        console.log(`
==================================== STUDENT MANAGEMENT SYSTEM ====================================
1. Add Student   2. View All Students   3. Find Student   4. Update Student   5. Delete Student
6. Search Students   7. Filter Students   8. Student Statistics   9. Sort Students   0. Exit
        `);
        const choice = await rl.question("Choose an option: ");
        switch (choice) {
            case "1": {
                const name = await rl.question("Enter your name: ");
                const age = Number(await rl.question("Enter your age: "));
                const email = await rl.question("Enter your email: ");
                const course = await rl.question("Enter your course: ");
                const marks = Number(await rl.question("Enter your marks: "));
                addStudent(name, age, email, course, marks);
                break;
            }
            case "2": {
                const students = getAllStudent();
                if (students.length === 0) {
                    console.log("No students found.");
                }
                else {
                    for (const student of students) {
                        console.log(`ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, Course: ${student.course}, Marks: ${student.marks}`);
                    }
                }
                break;
            }
            case "3": {
                const findIdInput = await rl.question("Enter student id to find: ");
                const findId = Number(findIdInput);
                const student = findStudent(findId);
                if (student === undefined) {
                    console.log("Student not found.");
                }
                else {
                    console.log(`ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, Course: ${student.course}, Marks: ${student.marks}`);
                }
                break;
            }
            case "4": {
                const idInput = await rl.question("Enter student ID to update: ");
                const id = Number(idInput);
                const name = await rl.question("Enter new name: ");
                const age = Number(await rl.question("Enter new age: "));
                const email = await rl.question("Enter new email: ");
                const course = await rl.question("Enter new course: ");
                const marks = Number(await rl.question("Enter new marks: "));
                updateStudent(id, name, age, email, course, marks);
                break;
            }
            case "5": {
                const deleteIdInput = await rl.question("Enter student ID to delete: ");
                const deleteId = Number(deleteIdInput);
                deleteStudent(deleteId);
                break;
            }
            case "6": {
                const nameSearch = await rl.question("Enter name (or leave blank): ");
                const emailSearch = await rl.question("Enter email (or leave blank): ");
                const courseSearch = await rl.question("Enter course (or leave blank): ");
                searchStudent(nameSearch, emailSearch, courseSearch);
                break;
            }
            case "7": {
                const courseFilter = await rl.question("Filter by course (or leave blank): ");
                const resultFilter = await rl.question("Filter by result - Pass/Fail (or leave blank): ");
                if (resultFilter !== "Pass" && resultFilter !== "Fail" && resultFilter !== "") {
                    console.log("Invalid result filter. Please enter 'Pass', 'Fail', or leave blank.");
                }
                else {
                    filterStudents(courseFilter, resultFilter);
                }
                break;
            }
            case "8": {
                getStatistics();
                break;
            }
            case "9": {
                const sortField = await rl.question("Sort by (marks/name): ");
                const sortDirection = await rl.question("Direction (asc/desc): ");
                if (sortField !== "marks" && sortField !== "name") {
                    console.log("Invalid sort field. Please enter 'marks' or 'name'.");
                }
                else if (sortDirection !== "asc" && sortDirection !== "desc") {
                    console.log("Invalid direction. Please enter 'asc' or 'desc'.");
                }
                else {
                    sortStudent(sortField, sortDirection);
                }
                break;
            }
            case "0": {
                running = false;
                console.log("Goodbye!");
                break;
            }
            default: {
                console.log("Invalid option. Please choose a number from 0-9.");
            }
        }
    }
    rl.close();
}
main();
//# sourceMappingURL=index.js.map