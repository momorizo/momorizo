function calcFirstDegree(b, c) {
    if (b==0) 
        if (c==0) {
            alert("Ez egy AZONOSSÁG !\n"+
                 "( azaz MINDEN valós x egyben megoldás is)");
            //changeformatBack();
            return "AZONOSSAG";
        }
        else {
            alert("Ez egy ELLENTMONDÁS !\n"+
                 "( azaz NINCS megoldás )");
            //changeformatBack();
            return "ELLENTMONDAS";            
        } 
    else {
        //changeFormatFirstDegree(b.toString(),c.toString(),(-b/a).toString());
        alert("ELLENŐRZÉS -- BREAKPOINT !\n calcFormatFirstDegree() hívása előtt"+
        "Próba --paraméterek -- 3 db :  changeFormatFirstDegree(String(b),String(c),String(-c/b));\n"+ String(b)+" " +  String(c) +" " + String(-c/b));
        changeFormatFirstDegree(String(b),String(c),String(-c/b));
        return String(-c/b);
        // function changeFormatFirstDegree(b, c, solution) {}
    }
}