console.log("Test");
function showOutput(){
    console.log("Hello")
    let number1 = document.querySelector('#btn2').value;

    let number2 = document.querySelector('#btn3').value;

    let result = number1 * number2;
    
    document.querySelector('#output').textContent = "The multiplication of "+number1+" and "+number2+" is " +result;

}
document.querySelector('#btn4').addEventListener("click",showOutput);