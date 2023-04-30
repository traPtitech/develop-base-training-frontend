let count = 0;
const countUp = () => {
  count++;
  const countElement = document.querySelector("#count");
  countElement.innerText = "回数: " + count;
};

const greet = () => {
  const name = document.querySelector("#name").value;
  const output = document.getElementById("greet");
  output.innerText = "Hello, " + name + "!";
};
