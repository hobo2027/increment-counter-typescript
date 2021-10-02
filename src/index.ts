const incrementBtn = document.getElementById("increment")!;
const showNumber = document.getElementById("showNumber")!;
const resetCounterBtn = document.getElementById("reset")!;

showNumber.innerHTML = (0).toString();

function addToNumber(number: number) {
  const newNumber = number + 1;
  showNumber.innerHTML = newNumber.toString();
}

function resetCounter() {
  showNumber.innerHTML = (0).toString();
}

// listen for increment click
incrementBtn.addEventListener("click", () => {
  const number = Number(showNumber.innerHTML);

  addToNumber(number);
});

// listen for reset click
resetCounterBtn.addEventListener("click", () => resetCounter());
