function a() {
    alert('hello');
}

function onClickButton() { 
    var i = prompt("Привет, скажи свое имя");
    if ( i != null) {
    alert("Привет, " + i)
    }
    else {
    alert("Ошибка");
    }
   }

   var counter = 0;
   // function onClickButton2() {
   //     counter++;
   //     console.log(counter);
   // }

   function onClickButton3(element) {
       counter++;
       element.innerHTML = "Вы нажали на кнопку " + counter + " раз";
       element.style.background = "red";
       element.style.color = "blue";

       console.log((element.name))
   }

   function onInput(element) {
    console.log(element.value);
    if(element.value == "Hello") {
        alert("И тебе привет");
    }

   }

   