interface Teacher {
  firstName: string
  lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  location: string
} 

interface Directors extends Teacher {
  numberOfReports: number
}

type printTeacherFunction =  (firstName: string, lastName: string) => string

const printTeaction: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`
}

interface StudentClassType {
  firstName: string
  lastName: string
  workOnHomeWork(): string
  displayName(): string
}

class StudentClass implements StudentClassType{
  firstName: string
  lastName: string

  constructor(firstName: string, lastname: string){
    this.firstName = firstName
    this.lastName = lastname
  }
  
  workOnHomeWork(){
    return `Currently working`
  }

  displayName(){
    return this.firstName
  }
}