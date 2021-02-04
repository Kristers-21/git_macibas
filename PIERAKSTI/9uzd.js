{
var otr=pamats.getContext("2d");
// pirmais riņķis
    otr.lineWidth = 10; 
    otr.strokeStyle="black";
    otr.beginPath();
    otr.arc(240, 300, 70, 0, 2 * Math.PI);
    otr.stroke();
    otr.fillStyle = "white";
    otr.fill();
    
// galva
otr.strokeStyle="black";
otr.lineWidth = 10; 
    otr.beginPath();
    otr.arc(240, 92, 25, 0, 2 * Math.PI);
    otr.stroke();
    otr.fillStyle = "white";
    otr.fill();

// 2 riņķis
otr.strokeStyle="black";
otr.lineWidth = 10; 
    otr.beginPath();
    otr.arc(240, 175, 50, 0, 2 * Math.PI);
    otr.stroke();
    otr.fillStyle ="white";
    otr.fill();

//kreisā roka
    otr.strokeStyle="black";
otr.lineWidth = 10; 
    otr.beginPath();
    otr.arc(182, 175, 10, 0, 2 * Math.PI);
    otr.stroke();
    otr.fillStyle = "white";
    otr.fill();

//labā roka
otr.strokeStyle="black";
otr.lineWidth = 10; 
    otr.beginPath();
    otr.arc(298, 175, 10, 0, 2 * Math.PI);
    otr.stroke();
    otr.fillStyle = "white";
    otr.fill();
}
