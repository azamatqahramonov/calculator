const display = document.getElementById("display");
const buttons = document.querySelectorAll(".wrapper button, .wrapper img");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculateResult();
    } else {
      appendToDisplay(value);
    }
  });
});

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "xato";
  }
}
