import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { addStudent } from "./services/student.service.js";
async function main() {
    const rl = readline.createInterface({ input, output });
    const name = await rl.question("Enter your name: ");
    const age = Number(await rl.question("Enter your age: "));
    const email = await rl.question("Enter your email: ");
    const course = await rl.question("Enter your course: ");
    const marks = Number(await rl.question("Enter your marks: "));
    addStudent(name, age, email, course, marks);
    rl.close();
}
main();
//# sourceMappingURL=index.js.map