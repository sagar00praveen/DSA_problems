var N="123";



function printWord(N){
    var i,length=N.length;
    for (i=0;i<length;i++){
        printValue(N[i]);
    }
}

function printValue(digit){
    switch(digit){
        case "0":
            console.log("Zero ");
            break;
        case "1":
            console.log("One ");
            break;

        case "2":
            console.log("Two ");
            break;
        case "3":
            console.log("Thee ")
            break;
        case "4":
            console.log("Four ")
            break;
        case "5":
            console.log("five ")
            break;
        case "6":
            console.log("Six")
            break;

        case "7":
            console.log("Seven")
            break;
        case "8":
            console.log("Eight")
            break;

        case "9":
            console.log("Nine")
            break;

        
    }
}
printWord(N)