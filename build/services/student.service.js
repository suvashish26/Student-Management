let nextId = 1;
export function isvalidateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function addStudent(name, age, email, course, marks) {
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
        console.log("Please provide the name");
        return;
    }
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Enter a valid marks between 0 and 100");
        return;
    }
}
//# sourceMappingURL=student.service.js.map