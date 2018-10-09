function changeFormatQuadratic(a, b, c, which, r) {
//--------------------------------------------------------------------
    alert("changeFormatQuadratic() hívása közben: a , b, c, which és r értékei\n" + 
    a + " " + b + " " + c + " " + which + " " + String(r));
    if (which=="first") {
        document.getElementById("x1").value=r;
        
        var spanString="<b><i>";
        if (Math.abs(Number(a))!=1)
            spanString+=a+"x<sup>2</sup> ";
        else if (Number(a)<0)
            spanString+="-x<sup>2</sup> ";
        else spanString+="x<sup>2</sup> ";
        
        if (Number(b)==-1)
            spanString+="- x ";
        else if (Number(b)==1)
            spanString+="+ x ";
        else if (Number(b)==0) ;
        else if (Number(b)>0)
            spanString+="+ " + b + "x ";
        else spanString+="- " + String(Math.abs(Number(b))) + "x ";
        
        if (Number(c) > 0)
            spanString+="+ "+c+" = 0" ;
        else if (Number(c) < 0)
            spanString+="- "+String(Math.abs(Number(c)))+" = 0";
        else spanString+=" = 0";
            
        spanString+="</i></b>";
        
        document.getElementById("span-equation").innerHTML = spanString;
    }
    else if (which=="second")
        document.getElementById("x2").value=r;
    //changeFormatCalculate();
}
/*
var zButtonSolution = document.getElementById('solution-button');
var zDivSolutionAndButton = document.getElementById('solution-div');
var zDivRootResults = document.getElementById('rootResults-div');
*/