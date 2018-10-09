    // change the layout and content of the <div id="rootResultsQuadratic-div">,
    // element(s) for two - x1 and x2 - roots
    // and calculates these roots (of sure quadratic equation)
    // the "which" string parameter can take the "first" or "second" value for the 
    // first and second root
    // ----------------------------------------------------------------------
function calcQuadratic(a, b, c, D, which) {
    // a, b, c --- coefficients of equation
    // D --- discriminant of equation
    // which --- value of "first" or "second"
    
    alert("ELLENŐRZÉS!\n\ncalQuadratic(a, b, c, D, which) elején vagyunk !\nA paraméterek értékei sorban: " +
         a + " " + b + " " + c + " " + D + " " + which);    
    //  MAJD törölhető
    //  alert("calcQuadratic() hívása közben: a , b, c, D és which értékei\n" + 
    //  a + " " + b + " "+c + " "+D + " "+ which);
    if (which=="first") {
        var root1 = (-b+Math.sqrt(D))/(2*a);
        alert("root1 értéke: "+ String(root1));
        changeFormatQuadratic(String(a), String(b), String(c), which, String(root1));
        return root1;
    }
    else if (which=="second") {
        var root2 = (-b-Math.sqrt(D))/(2*a);
        alert("root2 értéke: "+ String(root2));
        changeFormatQuadratic(String(a), String(b), String(c), which, String(root2));
        return root2;
    }
    return undefined;   // m. erre az ágra -- ide -- nem kerülhet(ne) a vezérlés !!!
}