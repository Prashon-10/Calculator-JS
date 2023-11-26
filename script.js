const input = document.getElementById("inputBox");
let shouldClear = false;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (p) => {
    const buttonText = p.target.innerText;

    if (shouldClear) {
      input.value = "";
      shouldClear = false;
    }

    if (buttonText === "=") {
      try {
        input.value = Function(`return ${input.value}`)();
      } catch (error) {
        input.value = "Error";
      }
      shouldClear = true;
    } else if (buttonText === "AC") {
      input.value = "";
    } else if (buttonText === "DEL") {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += buttonText;
    }
  });
});
