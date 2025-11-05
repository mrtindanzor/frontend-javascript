type StaffType = {
  workFromHome(): string
  getCoffeeBreak(): string
}
type DirectorType = StaffType & { workDirectorTasks(): string }
type TeacherType = StaffType & { workTeacherTasks(): string }
type createEmployeeFunction = (salary: string | number) => TeacherType | DirectorType
type IsDirectorFunctionType = (employee: DirectorType | TeacherType) => boolean
type ExecuteWorkFunction = (employee: DirectorType | TeacherType) => void
type Subjects = "Math" | "History"
type TeachClassFunction = (subject: Subjects) => string

class Director implements DirectorType {
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

class Teacher implements TeacherType {
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

const isDirector: IsDirectorFunctionType = (employee) => {
  return "workDirectorTasks" in employee
}

const executeWork: ExecuteWorkFunction = (employee) => {
  if("workDirectorTasks" in employee) return employee.workDirectorTasks()

  employee.workTeacherTasks()
}

const teachClass: TeachClassFunction = (todayClass ) => {
  return `Teaching ${todayClass}`
}