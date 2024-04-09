$(document).ready(() => {
  const rubrica = [
    { nome: "Andrea", cognome: "Scappaticci" },
    { nome: "Marco", cognome: "Polo" },
    { nome: "Michelangelo", cognome: "Rotaboni" },
  ];
  rubrica.forEach(
    (el) => (el.numCel = [...Array(10)].map((_) => Math.floor(Math.random() * 10)).join(""))
  );
  console.log(rubrica);
  $("table tbody tr").each((idx, el) => {
    const cells = $(el).children();
    console.log(cells);
    const contatto = rubrica[idx];
    cells[1].textContent = contatto.nome;
    cells[2].textContent = contatto.cognome;
    cells[3].textContent = contatto.numCel;
  });
});

