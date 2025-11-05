interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}
interface TeacherInterface { 
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string 
}
type createEmployeeFunction = (salary: string | number) => TeacherInterface  | DirectorInterface 
type Subjects = "Math" | "History"
type TeachClassFunction = (subject: Subjects) => string

class Director implements DirectorInterface  {
  workFromHome(){
    return `Working from home`
  }

  getCoffeeBreak(){
    return `Getting a coffee break`
  }

  workDirectorTasks() {
    return  `Getting to director tasks`
  }
}

class Teacher implements TeacherInterface  {
  workFromHome() {
    return `Cannot work from home`
  }
  getCoffeeBreak() {
    return `Cannot have a break`
  }
  workTeacherTasks() {
    return `Getting to work`
  }
}

const createEmployee: createEmployeeFunction = (salary) => {
  if(typeof salary === "number" && salary < 500) return new Teacher()
    
  return new Director()
}

export function isDirector (employee: DirectorInterface | TeacherInterface  ) {
  return ("workDirectorTasks" in employee)
}

export const executeWork = (employee: TeacherInterface | DirectorInterface) => {
  if(isDirector(employee)) return employee.workDirectorTasks()

  employee.workTeacherTasks()
}

export const teachClass: TeachClassFunction = (todayClass ) => {
  return `Teaching ${todayClass}`
}