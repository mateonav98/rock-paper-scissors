var choices = ["R","P", "S"]
var computer = ["R","P", "S"]


    alert("Please choose rock, paper, or scissors");
    let inputs = prompt("Enter R, P, or S");
    let randomValue = computer[Math.floor(Math.random() * computer.length)]
    alert("The computer chose..." + randomValue); 
    
    if (inputs === randomValue) {
        alert ("It is a tie")
    }
    else if (inputs = "R" && randomValue = "P") {
        alert ("You lose")
    }
    else if (inputs = "R" && randomValue = "S") {
        alert ("You win")
    }




