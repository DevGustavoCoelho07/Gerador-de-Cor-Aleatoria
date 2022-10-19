const getColor = () => {
  let colorBox = document.getElementById("color-container");
  let firstColor = Math.floor(Math.random() * (0 + 255));
  let secondColor = Math.floor(Math.random() * (0 + 255));
  let thirdColor = Math.floor(Math.random() * (0 + 255));

  const parseColor =
    "#" +
    firstColor.toString(16) +
    secondColor.toString(16) +
    thirdColor.toString(16);

  const numColor =
    "rgb" + "(" + firstColor + ", " + secondColor + ", " + thirdColor + ")";

  let hexInput = document.getElementById("formInput");
  let rgbInput = document.getElementById("formColor");
  colorBox.style.backgroundColor = numColor;
  rgbInput.value = numColor;
  hexInput.value = parseColor.toString(16);
};
