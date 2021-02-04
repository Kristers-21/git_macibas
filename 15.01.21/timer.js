var laiks;
var s =sekundes.getContext("2d");
    s.clearReact(0, 0, 100, 30);
//teksta parametri
    s.font = "30px Verdana";
    s.textAlign = "right";
    s.fillStyle = "blue";

function taimeris() {
    laiks = ievade.value;
    s.clearReact(0, 0, 100, 30);
    s.fillText(laiks, 95, 28);
    var izpildit = setInterval(function() {
        s.clearReact(0, 0, 100, 30);
        if (laiks > 0) {
            laiks = laiks - 1;
        }
        if (laiks < 6) {
            s.fillStyle = "red";
        } s.fillText (laiks, 95, 28);
        if(laiks==0){
            clearInterval(izpildit);
            s.fillStyle = "blue"; }
    }, 1000);
}