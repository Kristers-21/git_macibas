function linolejs(){
    //definē mainīgos
    var linoleja_izmaksa, izmaksa_m, linoleja_cena, telpas_platums, telpas_garums;
    //mainīgo piešķiršana
    linoleja_cena=linoleja_cena.value;
    telpas_platums=telpas_platums.value;
    telpas_garums=telpas_garums.value;
    // tiešie aprēķini
    izmaksa_m = telpas_platums * telpas_garums;
    linoleja_izmaksa = izmaksa_m * linoleja_cena; 
    // izvade html failā.... lai redzētu to rezultātu 
    izm.innerHTML="Linoleja izmaksas ir "+ linoleja_izmaksa+ " Eur."; 
}