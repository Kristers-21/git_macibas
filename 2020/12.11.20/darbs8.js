function ievarijums(){
       //definē mainīgos
       var izmaksa_kg, izmaksas, abolii_kg, cukuraa_cena, cukurss_uz_kg;
       //mainīgo vērtības piešķiršana[]
       abolii_kg=aboli_kg.value; 
       cukuraa_cena=cukurs_cena.value;
       cukurss_uz_kg=cukurs_uz_kg.value;
       // tiešie aprēķini
       izmaksa_kg = cukuraa_cena * cukurss_uz_kg;
       izmaksas = izmaksa_kg * abolii_kg; 
       // izvade html failā.... lai redzētu to rezultātu 
       izm.innerHTML="Ievārījuma izmaksas ir "+ izmaksas+ " naudiņas."; 
}