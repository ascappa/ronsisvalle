const myForm = document.querySelector("form");
const tableEl = document.querySelector("table");
const tableBodyEl = tableEl.querySelector("tbody");
const theadRowEl = tableEl.querySelector("thead tr");
const numEl = document.createElement("th");
window.addEventListener("submit", (e) => {
  e.preventDefault()
  theadRowEl.innerHTML = ""
  numEl.innerHTML = ""
  tableBodyEl.innerHTML = ""
  numEl.textContent = document.querySelector("#num").value;
  theadRowEl.append(numEl);
  for (let i = 1; i <= 10; i++) {
    const cellEl = document.createElement("th");
    cellEl.textContent = i;
    theadRowEl.append(cellEl);
  }
  for (let i = 1; i <= 10; i++) {
    const tableRowEl = document.createElement("tr");
    const cellEl = document.createElement("th");
    cellEl.textContent = i;
    tableRowEl.append(cellEl);
    for (let j = 1; j <= 10; j++) {
      const cellEl_2 = document.createElement("td");
      cellEl_2.textContent = Number(numEl.textContent) * i * j;
      tableRowEl.append(cellEl_2);
    }
    tableBodyEl.append(tableRowEl);
  }
});
