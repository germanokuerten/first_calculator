

// Objective

// - Create the structure of the calculator  - UI



// Commands:

const buttons = document.querySelectorAll('.square');

const calculator = document.querySelector('.calculator');

const displayVar = document.querySelector(".display")

// - be able to select the numbers
//     - Through a click, save it somewhere (where we can refer to it)

var numString = ""

calculator.addEventListener("click", handleMove);

function handleMove(event) {
    // console.log("handle move function called")
    // console.log(`${event.target.dataset.square} was clicked`)
    // const squareNumber = parseInt(event.target.dataset.square);   
    let numComb1;
    let numComb2;
    

    let getNumber;  
    getNumber = event.target.dataset.square

   
    
    console.log(numString)

    // console.log(Number.isInteger(getNumber))
    // if (getNumber !== NaN) {
    //     numComb1 = getNumber
    // }

    // string.contains for each operator

    let result;

    if (getNumber !== "=") {
        numString = numString+getNumber
        displayVar.textContent = numString
    } else { 
        let result = eval(numString)
        console.log(result)
        displayVar.textContent = result
    }

    if (getNumber === "AC" ){
    numString = ""
    displayVar.textContent = "0"
    }
}







        // } else {
        //     if (numString.includes("+")==true) {
        //         numString.split("+")
        //         console.log("This is addition")
        //         console.log(numString)
        //     } else if (numString.includes("-")==true) {
        //         numString.split("-")
        //         console.log("This is subtraction")
        //         console.log(numString)
        //     } else if (numString.includes("x")==true) {
        //         numString.split("x")
        //         console.log("This is mult")
        //         console.log(numString)
        //     } else if (numString.includes("÷")==true) {
        //         numString.split("÷")
        //         console.log("This is division")
        //         console.log(numString)
        //     }
        // }



    // take the entire selection before hitting equals into a string

    // str.split   split at the operator

    // separate each broken string and parse the int from those.

    // and then perform the calculation.

    // ps. create 4 functions... 
    // one for each opearation... + - / x ...

    // string contains?? .join
    // concat all the clicks...
    // then how do I parse? 
    // 1st number, then operator and then 2 number.



    // while (getNumber !== NaN) {
    //     numComb1 = numTest1.push(getNumber)
    //     console.log(numComb1)
    // }




// We'll keep selecting numbers untill one of the NAN is selected.

// and then we will take all the numbers selected and turn into one large number.





// Grab the data square string





// turn it into an integer (parseInt)

// but we also need to make sure that the button was selected is in fact a number, and if it's not do not put that in.

// and if it is we change numComb1 and numComb2.


    
//     - Create a button for each number 0 - 9

//     - Create 2 variables to store the numbers (for calculation)





// - create / be able to do the math operation




//     - create a button for subtraction
//     - for addition
//     - for multiplication
//     - for division
    

// - Show the output using the equal button
//     - Display it in the UI
//     - create button for equal sign (output)



