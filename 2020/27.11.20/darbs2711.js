function cikls() {
    var pamatne=document.getElementById("vieta")
    var zim=pamatne.getContext("2d")


    for (var x=20; x<300; x=x+10){
        zim.lineWidth=5;
        zim.strokStyle="red";
        zim.strokeReact(20,x,30,30);
    }
    for (var y=20; y<300; y=y+40){
        zim.strokeReact(y,20,30,30);
    }
    for (var r=10; r<300; r=r+30){
    zim.beginPath();
    zim.lineWidth=2;
    zim.strokStyle="blue";
    zim.arc(100,75,50,0,2*Math.PI);
    zim.stroke();
    }
}