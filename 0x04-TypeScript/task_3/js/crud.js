// You are building the next part of the application architecture.
// The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called crud.js.
// Copy this file into the task_3/js directory.

export function insertRow(row) {
  console.log("Insert row", row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log("Delete row id", rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
