var skaitlis;
function darbiba() {
    skaitlis = ievade.value;
    izvade.innerHTML = skaitlis;
    var izpildit = setInterval(function() {
        if (skaitlis > 0) {
            skaitlis = skaitlis -1;
        }
        izvade.innerHTML = skaitlis;
        if (skaitlis == 0) {
            clearInterval(izpildit);
        }
    }, 1000);
}