export const Cpp = Subjects.Cpp
export const Java = Subjects.Java
export const React = Subjects.React
type Teacher = Subjects.Teacher

const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
}

console.log("c++")
const cpp = new Cpp()
cpp.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log("Java")
const java = new Java()
java.setTeacher(cTeacher)
console.log(java.getRequirements())
console.log(java.getAvailableTeacher())

console.log("React")
const react = new React()
react.setTeacher(cTeacher)
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())
