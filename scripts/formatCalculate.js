/*
var zButtonSolution = document.getElementById('solution-button');
var zDivSolutionAndButton = document.getElementById('solution-div');
var zDivRootResults = document.getElementById('rootResults-div');
*/

function changeFormatCalculate() {
    var xAsColor = "red";
    var yAsColor = "" + y;
    var myHeaderH1 = document.getElementById('KZheaderh1');
    var myStyle = document.getElementById('KZnav').style;
    myHeaderH1.style.color = xAsColor;
    myStyle.backgroundColor = yAsColor;
    //alert(myHeaderH1.innerHTML);    
    //var zButton //=document.body.section.solutionForm.fieldset.div[0].solutionDiv.solutionButton;

    var zButtonSolution = document.getElementById('solution-button');
    var zSecondDivBeforeButtonSolution = document.getElementById('sol-second-div');
    var zDivRootResults = document.getElementById('rootResults-div');
    
  
    zButtonSolution.innerHTML = "E R E D M É N Y";
    zButtonSolution.style.backgroundColor = "red";
    //zButtonSolution.style.color = "white";
    zButtonSolution.style.fontSize ="20pt";
    zSecondDivBeforeButtonSolution.style.visibility = "visible";
/*    
    if (quadratic) {
        zDivRootResults.style.visibility = "inherit"; 
    }
    //zDivAndButtonSolution.style.visibility = "hidden";
    //document.body.section.solutionForm.fieldset.div[0].solutionDiv.solutionButton=zButton;Solution
*/
}