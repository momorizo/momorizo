function calculate(x, y) { 
    // change the layout and/orcontent of the <nav> and <button> 
    // elements [ id: KZnav and id: solution-button ]
    // and calculates the roots of equation
    
    var aObjectInput = document.getElementById("a");
    var bObjectInput = document.getElementById("b");
    var cObjectInput = document.getElementById("c");
    //var x1ObjectInput = document.getElementById("x1");
    //var x2ObjectInput = document.getElementById("x2");
    
    changeCommonFormat(x, y, true);
}
    /*
    if ((var a_co = Number(aObjectInput.value)) == undefined) {
        alert("undefined # a # változó-érték --- BEFEJEZÉS");
        return;
    } 
    else alert("NEM undefined az  # a # változó-érték --- nincs BEFEJEZÉS");
        // a_co : mean "a" coefficient of equation, 
    var b_co = Number(bObjectInput.value);  // the same way "b_co" and "c_co"
    var c_co = Number(cObjectInput.value);
    var disc = b_co*b_co - 4*a_co*c_co; // value of discriminant
    alert("A diszkrimináns értéke: "+ disc);
    */

    
// !!    var y = Math.sqrt(16);      // Returns the square root of 16
/*    
    if (a_co==0) {
        if (confirm("Az a együttható nulla, így a másodfokú egyenlet egy elsőfokúra egyszerűsödik !\n"+
               "Oldja meg az applet az elsőfokú egyenletet is ? OK , ha igen."); {
            solutionFirstDegree(a_co, b_co);
            }
        else return;    
    }
*/    
// TESZT
/*    alert("Próba !!!\n" + "--- a_co: " + a_co + "\n--- b_co: " + b_co + "\n--- c_co: " + 
          c_co + "\n"));
*/
/*    
    if (confirm("Az a együttható nulla, így a másodfokú egyenlet egy elsőfokúra egyszerűsödik !\n"+
               "Oldja meg az applet az elsőfokú egyenletet is ? OK , ha igen.";) { changeCommonFormat(x, y, true);
    
}
*/
    
/*    if (confirm("Az a együttható nulla, így a másodfokú egyenlet egy elsőfokúra egyszerűsödik !\n"+
               "Oldja meg az applet az elsőfokú egyenletet is ? OK , ha igen.");) { changeCommonFormat(x, y);

/*
    
    
   
   
    if  ((typeof in_a === undefined))
        //(typeof in_b === undefined) ||
        //(typeof in_c === undefined) ||
        //
   
    if (a+b+c==0 && a+b+c==a*b*c)
    {
        alert("Nincs megfelelően kitöltve az együtthatók ( a, b, c ) értéke !!");
        return;
    }
    else if (a==0) {
            alert("Az \"a\" együttható értéke NEM lehet nulla !!");
            return;
        }
   
  