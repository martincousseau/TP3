function repeatTests(){

    console.log(repeat("foo", 3));
    
}

function truncateTest(){

    console .log(truncate( "unchanged text" , 20 )); 
    console .log(truncate( "unchanged text" , 14 ));
    console .log(truncate( "truncated text" , 10 ));
    
}

function isPalindromeTest() {

    console .log(isPalindrome( "bonjour" )); // => false
    console .log(isPalindrome( "toto" )); // => false
    console .log(isPalindrome( "kayak" )); // => true
    console .log(isPalindrome( "ressasser" )); // => true

}

function swapCaseTest (){

    console .log(swapCase( "HELLO" )); // => hello
    console .log(swapCase( "bye" )); // => BYE
    console .log(swapCase( "GooD NighT" )); // => gOOd nIGHt
}