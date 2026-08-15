export function isvalidateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function isNotEmptyString(value) {
    return value.trim() != "";
}
export function isValidateAge(age) {
    return !isNaN(age) && age > 0 && age <= 120;
}
export function isValidMarks(marks) {
    return !isNaN(marks) && marks >= 0 && marks <= 100;
}
//# sourceMappingURL=validation.js.map