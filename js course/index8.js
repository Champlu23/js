// функции

function info(word) {
    console.log(word + "!");

}

info("Hello");

function summa(a, b) {
    var res = a + b;
    info(res);
} 

summa(5, 7);    
 
var array = [7, 8, 1];

 function summarr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum+=arr[i];
        
    }
    return sum;
 }

var res = summarr(array);
console.log(res);

