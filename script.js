function getCor() {
  let colorBox = document.getElementById("color-container");
  let firstColor = Math.floor(Math.random() * (0 + 255));
  let secondColor = Math.floor(Math.random() * (0 + 255));
  let thirdColor = Math.floor(Math.random() * (0 + 255));
  let btnD = document.getElementById(btnC);

  const parseColor =
    "#" +
    firstColor.toString(16) +
    secondColor.toString(16) +
    thirdColor.toString(16);

  const numColor =
    "rgb" + "(" + firstColor + ", " + secondColor + ", " + thirdColor + ")";

  let formInput = document.getElementById("formInpit");
  let inputForm = document.getElementById("formColor");
  colorBox.style.backgroundColor = numColor;
  inputForm.value = numColor;
  formInput.value = parseColor.toString(16);
}
