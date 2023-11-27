// Циклы
for (var i = 100; i >5; i/=2) {
    console.log(i);
}

var j = 1000;
while(j<1002) {
    console.log(j);
    j++;
}

var x = 100;

do {
    console.log(x);
} while(x<50);

for(var i = 10; i< 20; i++) {
    if(i > 15)
    break;
console.log(i);
}

for(var i = 10; i<=20; i++) {
    if (i % 2 == 0)
    continue;
console.log(i);
}

var arr = [5, 7, 3, 8, 9, "stroka"];

for ( var i = 0; i <arr.length; i++) {
    console.log("Элемент" + (i + 1) + ":" + arr[i]);
}