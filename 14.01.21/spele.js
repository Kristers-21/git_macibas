var x;

var atbildes = ["DOCTYPE", "HTML", "head", "body"];


function izveidot() {
    x = Math.floor(Math.random() *4);
    izvade.innerHTML = atbildes[x];
}

function tests() {
    if(x+1 == ievade.value) {
        izvade.innerHTML = "Pareizi";
    } else {
        izvade.innerHTML = "Nepareizi";
    }
    ievade.value = "";
}
