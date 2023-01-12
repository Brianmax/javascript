const titulo = document.getElementsByTagName("h1")
const input1 = document.getElementById("calculo1")
const input2 = document.getElementById("calculo2")

const button = document.getElementById("btnCalculate")
const answer = document.getElementById("answer")

button.addEventListener("submit", buttonOnclick);

function buttonOnclick(){
    console.log(Number(input1.value) + Number(input2.value));
    const result = Number(input1.value) + Number(input2.value);
    answer.innerText = "Resultado: " + result;
}