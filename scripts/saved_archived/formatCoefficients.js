function key_a_coeff() {
    // check key "a"-coefficient value in quadratic equation
    var aCoeffObj = document.getElementById("a");
    var aCoeff = aCoeffObj.value;
    
    // display or no:  #rootResultFirstDegree-div , #rootResultsQuadratic-div div elements (styles)
    var divFirstStyle = document.getElementById("rootResultFirstDegree-div").style;
    var divQuadraticStyle = document.getElementById("rootResultsQuadratic-div").style;
    
    
    if (aCoeff == "") {
        divFirstStyle.display = "none";
        divQuadraticStyle.display = "none";
    }
    else if (Number(aCoeff) != 0) {
        divFirstStyle.display = "none";
        divQuadraticStyle.display = "inline-block";
    }
    else {
        divFirstStyle.display = "inline-block";
        divQuadraticStyle.display ="none";
    }
/*
    if (typeof aCoeff === "string") {
        alert("Az --aCoeff-- változó tényleg string");

    if (aCoeff != "") {
        alert("Változott a #a# együttható értéke!\nMost az értéke: " + "---\t\t " + aCoeff + "\t\t---");
*/
}