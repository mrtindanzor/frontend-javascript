type Student = {
  firstName: string
  lastName: string
  age: Number
  location: string
}

const studentsList: Student[] = [
  { 
    firstName: "Simon",
    lastName: "Tindanzor",
    age: 25,
    location: "Ghana, Greater Accra",
  },
  {
    firstName: "Godfred",
    lastName: "Tindanzor",
    age: 25,
    location: "Ghana, Ashanti"
  }
]

console.table(studentsList)

