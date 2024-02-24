const firstInput= document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
let operation = "+"

plus.onclick = function() {
    operation = "+"
}

minus.onclick = function() {
    operation = "-"
}

multiply.onclick = function() {
    operation = "*"
}

divide.onclick = function() {
    operation = "/"
}

function getResult(value) {
    if (value < 0) {
        result.style.color = 'red'
    } else {
        result.style.color = 'green'
    }
    result.textContent = value
}

calculate.onclick = function() {
    if (operation=="+") {
        const sum = Number(firstInput.value) + Number(secondInput.value)
        getResult(sum)
    } else if (operation=="-") {
        const diff = Number(firstInput.value) - Number(secondInput.value)
        getResult(diff)
    } else if (operation=="*"){
        const mul = Number(firstInput.value) * Number(secondInput.value)
        getResult(mul)
    } else {
        const div = Number(firstInput.value) / Number(secondInput.value)
        getResult(div)
    }
}

