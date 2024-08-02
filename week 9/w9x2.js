console.log("Hello World!!");

function showGreetingMessage(){
    let name = window.prompt("What is your Name?");


    window.alert("Hello" + name);
}

//showGreetingMessage();

document.querySelector("#btn4").addEventListener("click",showGreetingMessage)

