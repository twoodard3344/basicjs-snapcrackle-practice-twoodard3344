// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let result = "";
let snapString = "Snap, "
let crackleString = "Crackle, ";
let snapCrackleString = "SnapCrackle, "
var test;

let highestNumber = prompt("What's the highest number?")



function snapCrackle(highestNumber){
for (let i = 1; i <= highestNumber; i++) {
    if (i % 2 !== 0 && i % 5 == 0 )
    {
        result += document.write(`${snapCrackleString}`)
    }
    
    else if (i % 5 == 0)
    {
        result += document.write(`${crackleString}`);
    }
   else  if (i % 2 !== 0)
    {
        result += document.write(`${snapString}`);
    }

    else
    {
        result += document.write(i + '\n,');
    }
  
}

    return result
}


function printResult()
{
    document.write(`
    <h1>Snap Crackle</h1>
    <h3>Max Value: ${highestNumber}</h3>
    `)
    test = snapCrackle(highestNumber);
    
    
     
}

printResult()



















