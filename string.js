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

function isPalindrome (s) {


    entree_1 = [...s].reverse().join('');


    if (s === entree_1) {
        return true;
    }

    else {
        return false;
    }
}


function swapCase(s){

    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
      
      for(var x=0; x<s.length; x++)
      {
        if(UPPER.indexOf(s[x]) !== -1)
        {
          result.push(s[x].toLowerCase());
        }
        else if(LOWER.indexOf(s[x]) !== -1)
        {
          result.push(s[x].toUpperCase());
        }
        else 
        {
          result.push(s[x]);
        }
      }
    let r =  result.toString();
    for(let k = 0; k < r.lenght; k++){
        r = r.replace(',','');
    }
    
    return r;
}
