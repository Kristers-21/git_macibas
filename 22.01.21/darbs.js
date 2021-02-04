var mas=["Biles/antarctica.jpg","Biles/PELMEŅI.jpg", "Biles/Briiviibas_piemineklis.jpg"]

setInterval(
    function(){
        var i=Math.floor(Math.random()*10);
        document.getElementById("kaste").src=mas[i];
    },1000);
