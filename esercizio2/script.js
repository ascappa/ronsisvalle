$(document).ready(() => {
  const formEl = $("form").first();
  let myInterval = showDots();

  formEl.on("submit", (e) => {
    e.preventDefault();
    clearInterval(myInterval);
    const voto = $("#voto").first().val();
    $(".giudizio")
      .first()
      .text(() => {
        const giudizio = getGiudizio3(voto);
        return giudizio[0].toUpperCase() + giudizio.slice(1);
      });
    $("#voto").first().val("");
    setTimeout(() => {
      myInterval = showDots();
    }, 2500);
  });
});

function showDots(delay = 700) {
  let dotsNum = 0;
  return setInterval(() => {
    $(".giudizio")
      .first()
      .text("In attesa di un voto" + ".".repeat((dotsNum % 3) + 1));
    dotsNum++;
  }, delay);
}

function getGiudizio1(voto) {
  let giudizio = "";
  if (voto < 18) giudizio = "insufficiente";
  else if (voto <= 21) giudizio = "sufficiente";
  else if (voto >= 21 && voto <= 24) giudizio = "buono";
  else if (voto >= 24 && voto <= 27) giudizio = "distinto";
  else if (voto >= 27 && voto <= 29) giudizio = "ottimo";
  else if (voto === 30) giudizio = "eccellente";
  return giudizio;
}

function getGiudizio2(voto) {
  let giudizio = "";
  if (voto < 18) giudizio = "insufficiente";
  else if (voto <= 21) giudizio = "sufficiente";
  else if (voto <= 24) giudizio = "buono";
  else if (voto <= 27) giudizio = "distinto";
  else if (voto <= 29) giudizio = "ottimo";
  else if (voto === 30) giudizio = "eccellente";
  return giudizio;
}
function getGiudizio3(voto) {
  if (voto < 18) return "insufficiente";
  if (voto <= 21) return "sufficiente";
  if (voto <= 24) return "buono";
  if (voto <= 27) return "distinto";
  if (voto <= 29) return "ottimo";
  if (voto === 30) return "eccellente";
}
function getGiudizio4(voto) {
  const giudizi = ["insufficiente", "sufficiente", "buono", "distinto", "ottimo", "eccellente"];
  let giudizioIdx = 0;
  if (voto >= 18 && voto <= 30) giudizioIdx = Math.floor((voto - 18) / 3) + 1;
  return giudizi[giudizioIdx];
}
