function avrage(a,n){
    var sum =0;
    for(i=0;i<n;i++) sum+=a[i];
    return parseFloat(sum/n);
}

var arr = [10, 2, 3, 4, 5, 6, 7, 8,9];
n=arr.length;
console.log(avrage(arr,n))