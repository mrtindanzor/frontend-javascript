interface Student {
  firstName: string
  lastName: string
  age: Number
  location: string
}

const studentsList: Student[] = [
  { 
    firstName: "Elijah",
    lastName: "Michaelson",
    age: 25,
    location: "Ghana, Greater Accra",
  },
  {
    firstName: "Niklaus",
    lastName: "Michaelson",
    age: 22,
    location: "Ghana, Ashanti"
  }
]

const table = document.createElement("table")

const headings = [ "firstname", "lastname", "age", "location" ]
const headingRow = document.createElement("tr")
headings.forEach(heading => {
  const tHead = document.createElement("th")
  tHead.textContent  = heading
  headingRow.appendChild(tHead)
})
table.appendChild(headingRow)

studentsList.forEach(student => {
  const studentRow = document.createElement("tr")

  for(const [, value] of Object.entries(student)){
    const tData = document.createElement("td")
    tData.textContent = value
    studentRow.appendChild(tData)
  }

  table.appendChild(studentRow)
})