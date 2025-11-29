function isEven(n){
    let num = n % 2;
    if(num == 0){
        return true;
    }
    else{
        return false;

    }
}

let n= 15;
if(isEven(n)){
    console.log("true");

}else{
    console.log("false")
}