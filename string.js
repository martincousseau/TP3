function repeat(s, n){
    return s.repeat(n);
}


function truncate(s,n){

    if(s.length <= n){
        return s;
    } else {
        let pt = "...";
        s = s.substring(0,n);
        return s + pt;
    }
}
