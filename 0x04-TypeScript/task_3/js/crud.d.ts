import { RowElement, RowID } from "./interface";

declare namespace CRUD {
  function insertRow(row: RowElement): number
  function deleteRow(rowId: RowID): void
  function updateRow(rowId: RowID, row: RowElement): number
}

export = CRUD