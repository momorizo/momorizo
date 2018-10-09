function calcFirstDegree(b, c) {
    if (b==0) 
        if (c==0) {
            alert("Ez egy AZONOSSÁG !\n"+
                 "( azaz MINDEN valós x egyben megoldás is)");
            formatBack();
            return;
        }
        else {
            alert("Ez egy ELLENTMONDÁS !\n"+
                 "( azaz NINCS megoldás )");
            formatBack();
            return;            
        } 
    else {
        changeFormatFirstDegree((-b/a).toString());        
    }
}