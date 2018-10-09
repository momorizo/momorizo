function changeFormatFirstDegree(b_str, c_str, xRootSolution) {
//    alert("ELLENŐRZÉS -- breakpoint !\nchangeFormatFirstDegree() függvény első sora");
    document.getElementById("x").value=xRootSolution;
    var spanString = "<b><i>";
    var b = Number(b_str);
    var c = Number(c_str);
    if (b==-1) {
        spanString+="-x ";
    }
    else if (b==1) {
        spanString+="x ";
    }
    else spanString+= b_str + "x ";

    if (c > 0) {
        spanString+="+ "+c_str+" = 0" ;
    }
    else if (c < 0) {
        spanString+="- "+String(Math.abs(c))+" = 0";
    }
    else spanString+=" = 0";
    spanString+="</i></b>";
    alert("span tartalma --- az egyenlet felépítése és megjelenítése :\n"+spanString);
    document.getElementById("span-equation").innerHTML= spanString;
}