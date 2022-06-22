// Basic Arithmetic Calculator
// without a frontend

let num1 = parseInt(prompt("Enter first number: "))
let operator = prompt("Choose operator: eg + - * / ")
let num2 = parseInt(prompt("Enter second number: "))

if (operator == "+")
{
  alert(num1 + num2)
} else if(operator == "-")
{
  alert(num1 - num2)
} else if(operator == "*")
{
  alert(num1 * num2)
}else if(operator == "/")
{
  alert(num1 / num2)
}