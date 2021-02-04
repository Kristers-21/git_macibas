var x;

var cipari = ["null", "üks", "kaks", "kolm", "neli", "viis" , "kuus", "seitse", "kaheksa", "ükheksa"];


function izveidot() {
    x = Math.floor(Math.random() *10);
    izvade.innerHTML = cipari[x];
}

function tests() {
    if(x == ievade.value) {
        izvade.innerHTML = "Pareizi";
    } else {
        izvade.innerHTML = "Nepareizi";
    }
    ievade.value = "";
}
