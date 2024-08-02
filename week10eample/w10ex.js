console.log("Hello");

//scope of the variables
//1: Global scope
//a= Any variable declared using car keyword or let keyword outside the functions

var g = 10;

console.log("(Outside the function) g  = " +g);

function todo(){
    console.log("(Inside the function) g = "+g);
    
    var a = 5;
    console.log("(Inside the function) g = "+a);
    //block
    {
        var b = 22;
        console.log("(Inside the block(b="+b);

        let c = 100;
    }
    console.log("(Outside the block(b="+b);


}

todo();


function checkAges(ages,cuttOffAge){
    for(let i=0;i<ages.length;i++){
        if(ages[i]<cuttOffAge){
            return false;
        }
    return true;

    }

}
console.log(checkAges([16, 18, 22, 32, 56], 6));//True
console.log(checkAges([16, 18, 11, 32, 56], 19));