import type { Student } from "../models/student.js";
export declare function addStudent(name: string, age: number, email: string, course: string, marks: number): void;
export declare function getAllStudent(): Student[];
export declare function findStudent(id: number): Student | undefined;
export declare function updateStudent(id: number, name: string, age: number, email: string, course: string, marks: number): void;
export declare function deleteStudent(id: number): void;
//# sourceMappingURL=student.service.d.ts.map