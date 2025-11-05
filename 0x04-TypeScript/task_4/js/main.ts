export const cpp = Subjects.Cpp
export const java = Subjects.Java
export const react = Subjects.React

const cTeacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
}

console.log("c++")
const cppTeacher = new cpp()
cppTeacher.setTeacher(cTeacher)
console.log(cppTeacher.getRequirements())
console.log(cppTeacher.getAvailableTeacher())

console.log("Java")
const javaTeacher = new java()
javaTeacher.setTeacher(cTeacher)
console.log(javaTeacher.getRequirements())
console.log(javaTeacher.getAvailableTeacher())

console.log("React")
const reactTeacher = new react()
reactTeacher.setTeacher(cTeacher)
console.log(reactTeacher.getRequirements())
console.log(reactTeacher.getAvailableTeacher())
