export function getResult(marks: number): "Pass" | "Fail" {
    return marks >= 40 ? "Pass" : "Fail";
}