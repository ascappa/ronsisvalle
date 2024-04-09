$(document).ready(() => {
  const myFormEl = $(".my-form");
  const myInputsEl = myFormEl.find("input");
  console.log(myFormEl.first());
  console.log(myInputsEl);
  console.log(Array.isArray(myInputsEl));
  console.log(Array.from(myInputsEl));
  for (let i = 0; i < myInputsEl.length; i++) {
    myInputsEl[i].placeholder = "0";
  }

  function submitAction(event) {
    event.preventDefault();
    let sum = 0;
    let average = 0;
    for (const el of myInputsEl) {
      console.log(el);
      sum += el.value;
    }
    average = sum / myInputsEl.length;
    $(".somma").first().text( sum);
    $(".media").first().text("Media: " + average);
    for (const el of myInputsEl) {
      el.value = "";
    }
  }


  myFormEl.on("submit", submitAction);

});
