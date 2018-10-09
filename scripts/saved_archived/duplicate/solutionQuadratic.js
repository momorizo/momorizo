function calcQuadratic(a, b, c, D, which) { 
    // change the layout and/orcontent of the <div id="rootResults-div"> 
    // element(s) for two - x1 and x2 - roots
    // and calculates these roots (of sure quadratic equation)
    if (which=="first")
        return (-b+Math.sgrt(D))/(2*a);
    else return (-b-Math.sgrt(D))/(2*a);
}
/*  var aObjectInput = document.getElementById("a");
    var bObjectInput = document.getElementById("b");
    var cObjectInput = document.getElementById("c");
    //var x1ObjectInput = document.getElementById("x1");
    //var x2ObjectInput = document.getElementById("x2");
    
    var a_co = Number(aObjectInput.value);  // a_co : mean "a" coefficient of equation, 
    var b_co = Number(bObjectInput.value);  // the same way "b_co" and "c_co"
    var c_co = Number(cObjectInput.value);
    //var disc = b*b - 4*a*c; // value of discriminant

// !!    var y = Math.sqrt(16);      // Returns the square root of 16
    
    if (a_co==0) {
        if (confirm("Az a együttható nulla, így a másodfokú egyenlet egy elsőfokúra egyszerűsödik !\n"+
               "Oldja meg az applet az elsőfokú egyenletet is ? OK , ha igen.") {
            solutionFirstDegree(a_co, b_co);
            }
        else return;    
    }
    
    alert("Próba !!!\n" + "--- a_co: " + a_co + "\n--- b_co: " + b_co + "\n--- c_co: " + 
          c_co + "\n"));
    changeCommonFormat(x, y);
    
}

/*
    
    
    var x_as_color = x.toString();
    var y_as_color = y.toString();
    //x_as_color = ""+ x;
    //y_as_color = "" + y;    
   
    var a = Number(document.getElementById("a").innerHTML.value);
    var b = Number(document.getElementById('b').innerHTML.value);
    var c = Number(document.getElementById('c').innerHTML.value);
    
    alert("Most vizsgálom az együtthatók értékét !"+" a: "+a+" b: "+b+" c: "+c);
    if ( isFinite(a) || typeof a == undefined || isNaN(a) ) {
        changeFormat(x_as_color, y_as_color);
    
   
    var a = Number(in_a);
    var b = Number(in_b);
    var c = Number(in_c);
   
    
    //document.form.x1_gyok.value="Az a értéke: ";
    //document.getElementById("x2").innerHTML="A <b> értéke: "+b;
    
    alert("Most vizsgálom az együtthatók értékét !"+" a: "+a+" b: "+b+" c: "+c);
 
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
    else {
        alert("Jók az együtthatók értékei: "
              +"\n"+a+"\n"+b+"\n"+c);
        return;
    }
    
    // formazas
    //var myHeaderH1=document.getElementById('KZheaderh1');
    //var myHeaderH1=document.getElementsByName('KZheaderh1')[0];
    //var myStyle=document.getElementsByName('navi')[0].style;
    //vagy
    //var myStyle=document.getElementById('KZnav').style;
    //document.getElementById('KZheaderh1').style.color=x_as_color;
    //alert("Ez van most a <h1> -ben:  " + document.write(myHeaderH1.innerHTML));
    //myStyle.backgroundColor=y_as_color;
    //document.getElementById('KZheaderh1').innerHTML = "V Á L T O Z Á S";
    //document.getElementById('span-button').innerHTML="Új";
    //document.getElementById('solution-button').style.backgroundColor="red";
    //myHeaderH1.style.color=x_as_color;
    //return;
*/