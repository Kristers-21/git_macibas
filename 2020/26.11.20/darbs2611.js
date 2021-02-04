function zimet(){
    var pamats=document.getElementById("vieta");
    var otr=pamats.getContext("2d");
    // zils riņķis
        otr.lineWidth = 2; 
        otr.strokeStyle="blue"; 
       
        otr.beginPath();
        otr.arc(60, 50, 40, 0, 2 * Math.PI);
        otr.stroke();
        otr.fillStyle ="blue";
        otr.fill();
        
    // baltais
    otr.strokeStyle="blue";
        otr.beginPath();
        otr.arc(160, 50, 25, 0, 2 * Math.PI);
        otr.stroke();
        otr.fillStyle = "white";
        otr.fill();

    // melns riņķis
    otr.strokeStyle="black";
        otr.beginPath();
        otr.arc(240, 50, 50, 0, 2 * Math.PI);
        otr.stroke();
        otr.fillStyle ="black";
        otr.fill();
    //rozāts riņķis
        otr.beginPath();
        otr.arc(100, 100, 60, 0, 2 * Math.PI);
        otr.stroke();
        otr.fillStyle ="pink";
        otr.fill();

}
