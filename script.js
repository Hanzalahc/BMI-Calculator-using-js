const form = document.querySelector("form");
const res = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);

  validateInput(height, weight);
});

function validateInput(height, weight) {
  if (height == "" || height < 0 || isNaN(height)) {
    res.innerHTML = "Enter Valid Height";
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    res.innerHTML = "Enter Valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    displayRes(bmi);
  }
}

function displayRes(bmi) {
  if (bmi < 18.6) {
    res.innerHTML = `You are Under Weight and BMI is: ${bmi}`;
  } else if (bmi < 24.6 && bmi > 18.5) {
    res.innerHTML = `You are Normal Weight and BMI is: ${bmi}`;
  } else {
    res.innerHTML = `You are Over Weight and BMI is: ${bmi}`;
  }
}
