/// <reference path="./crud.d.ts" />

import * as CRUD from "./crud.js"
import { RowElement, RowID } from "./interface"

const row: RowElement = {
  firstName: "John",
  lastName: "Doe"
}

const newRowID: RowID = CRUD.insertRow(row)

const updatedRow: RowElement = {
  firstName: "Micheal",
  lastName: "Angelo",
  age: 23
}

CRUD.updateRow(newRowID, updatedRow)

CRUD.deleteRow(newRowID)