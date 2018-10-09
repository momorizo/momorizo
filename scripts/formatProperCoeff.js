function changePropCoeff(aCo) {
    // check key "a"-coefficient value in quadratic equation
    var aCoeffObj;
    var aCoeff;
    if (arguments.length==0) {
        aCoeffObj = document.getElementById("a");
        aCoeff = aCoeffObj.value;
    }
    else aCoeff = aCo; 
    
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
    //alert("ELLENŐRZÉS: lefutott a changePropCoeff() kódja");

}