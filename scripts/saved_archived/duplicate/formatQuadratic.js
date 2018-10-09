/*
var zButtonSolution = document.getElementById('solution-button');
var zDivSolutionAndButton = document.getElementById('solution-div');
var zDivRootResults = document.getElementById('rootResults-div');
*/

function changeFormatQuad() {
//"use strict;" {
    var xAsColor = "" + x;
    var yAsColor = "" + y;
    var myHeaderH1 = document.getElementById('KZheaderh1');
    var myStyle = document.getElementById('KZnav').style;
    myHeaderH1.style.color = xAsColor;
    myStyle.backgroundColor = yAsColor;
    //alert(myHeaderH1.innerHTML);    
    //var zButton //=document.body.section.solutionForm.fieldset.div[0].solutionDiv.solutionButton;

    var zButtonSolution = document.getElementById('solution-button');
    var zDivAndButtonSolution = document.getElementById('solution-div');
    var zDivRootResults = document.getElementById('rootResults-div');

    zDivRootResults.style.visibility = "inherit";
    zButtonSolution.innerHTML = "E R E D M É N Y";
    zButtonSolution.style.backgroundColor = "red";
    zButtonSolution.style.color = "white";
    zButtonSolution.style.fontSize ="20pt";
    zDivAndButtonSolution.style.height = "100px";
    //zDivAndButtonSolution.style.visibility = "hidden";
    //document.body.section.solutionForm.fieldset.div[0].solutionDiv.solutionButton=zButton;
//}
}