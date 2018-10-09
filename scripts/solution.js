function calculate() {
    // calculates the roots of equation, displays these and 
    // change the layout and/or content of the <nav> , <fieldset><div>-s
    // and <button> elements --- id: KZnav and id: solution-button
    var aCoeffObj = document.getElementById("a");
    var aCoeff = aCoeffObj.value;
    var bCoeffObj = document.getElementById("b");
    var bCoeff = bCoeffObj.value;
    var cCoeffObj = document.getElementById("c");
    var cCoeff = cCoeffObj.value;
    
    var xroot;
    var x1root;
    var x2root;        
    
    if (aCoeff=="" || bCoeff=="" || cCoeff=="") {
        alert("Nincsenek megfelelően kitöltve az együtthatók !"+
             "\n(ld. a , b, c FORM-beli értékei) --> MÓDOSÍTÁS és újra");
        return;
    }
                
    if (Number(aCoeff)==0) {
       if (confirm("Az =a= együttható nulla, \nígy a másodfokú egyenlet egy elsőfokúra egyszerűsödik !\n\n"+"Oldja meg a script az elsőfokú egyenletet is ? OK , ha igen.")) {
           alert("JÓ -- megoldom az elsőfokút!!");
           changePropCoeff(aCoeff);   
           if (!isFinite(xroot=calcFirstDegree(Number(bCoeff), Number(cCoeff)))) 
                alert("Az elsőfokú egyenlet megoldása " + xroot + "-hoz vezetett");
           else {
                alert("Visszatérek a weboldalhoz !");
                //changeFormatBack();       ez itt még kérdéses ???
                return;
            }
       }
    }
    else {
        var disc = Math.pow(Number(bCoeff),2)- 4*Number(aCoeff)*Number(cCoeff); 
        //alert("ELLENŐRZÉS --- breakpoint\nA <diszkrimináns> is meg van !!!"+disc);
        if (disc < 0) {
            alert("A diszkrimináns értéke negatív, tehát a másodfokú egyenletnek nincs megoldása !\nDiszkrimináns: b*b-4*a*c = " + String(disc) + "\n( a,b és c --az egyenlet együtthatói)"); 
            return;
        }
        else {
            if (disc==0) 
                alert("A másodfokú egyenlet diszkriminánsa nulla, így van az egyenletnek \nk é t s z e r e s megoldása/gyöke (azaz x1=x2).\n\nTOVÁBB -- OK");
            else alert("A másodfokú egyenlet diszkriminánsa pozitív, így van az egyenletnek \nk é t különböző megoldása/gyöke (azaz x1 != x2).\n\nTOVÁBB -- OK");
            x1root=calcQuadratic(Number(aCoeff), Number(bCoeff),Number(cCoeff), disc,"first");
            x2root=calcQuadratic(Number(aCoeff), Number(bCoeff),Number(cCoeff), disc,"second");
            alert("ELLENŐRZÉS: másodfokú gyökök --- x1: " + x1root + " x2: " + x2root);
        }
    }
    alert("JÓ minden !!");
    /*if (confirm("a confirm() Próbája")) 
        alert("Ellenőrzés! --- aCoeff: "+aCoeff+"+ Nem EREDMÉNY");
    alert("Valami még");
    */
}