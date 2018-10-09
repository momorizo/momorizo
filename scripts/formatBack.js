function changeFormatBack() {
    document.getElementById("a").value="";    
    document.getElementById("b").value="";
    document.getElementById("c").value="";
    
    document.getElementById("x").value="";
    document.getElementById("x1").value="";
    document.getElementById("x2").value="";
    
    //var xAsColor = "red;
    //var yAsColor = "white";
    var myH1 = document.getElementById('KZheaderh1');
    var myStyle = document.getElementById('KZnav').style;
    myHeaderH1.style.color = "darkgreen";
    myStyle.backgroundColor = "aquamarin";
    //alert(myHeaderH1.innerHTML);    
    
    var zButtonSolution = document.getElementById('solution-button');
    var zSecondDivAfterButtonSolution = document.getElementById('sol-second-div');
    var zDivRootResults = document.getElementById('rootResults-div');
    
  
    zButtonSolution.innerHTML = "Számolás";
    zButtonSolution.style.backgroundColor = "darkgreen";
    //zButtonSolution.style.color = "white";
    zButtonSolution.style.fontSize ="25pt";
    //zSecondDivAfterButtonSolution.style.visibility = "visible";
    
    //if (quadratic) 
    //    zDivRootResults.style.visibility = "inherit"; 
    //zDivAndButtonSolution.style.visibility = "hidden";
    //document.body.section.solutionForm.fieldset.div[0].solutionDiv.solutionButton=zButton;Solution
    changePropCoeff();
}







