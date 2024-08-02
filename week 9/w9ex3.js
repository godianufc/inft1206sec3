

function showOutput(){
    console.log("Hello");
    let name = document.querySelector("#first-name").value;
    document.querySelector('#output').textContent = "Hello"+name;
    document.querySelector('#output').style.color = "blue";
}

document.querySelector("#btn").addEventListener("click",showOutput);