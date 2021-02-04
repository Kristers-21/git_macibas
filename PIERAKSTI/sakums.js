function zimet(){

    var po=document.getElementById("cikls");

    var zim=po.getContext("2d");
    var x=Math.floor(Math.random() * 400);
    var y=Math.floor(Math.random() * 400);

    for( var i=25; i<250; i=i+45){
        zim.beginPath();
        zim.arc(x, y, i, 0, 2 * Math.PI);
        zim.stroke();
    }

}