const detectPalindrome = (str) => {
    
    if(typeof str !== 'string'){
        return 'Passed argument is not a string'
    } 
    if (str.trim() == '') {
        return 'String is empty'
    } 
    if(str !== str.split('').reverse().join('')){
        return 'This string is not a palindrome!'
    } 
    if(str){
        str = str.toLowerCase();
        str = str.split('').reverse().join(''); 
        if(str){
            return 'This string is palindrome!'
        }
    }
};
console.log(detectPalindrome("ara"))
console.log(detectPalindrome("TARARAT"))
console.log(detectPalindrome("Огоміннімого"))
console.log(detectPalindrome("kotik kitoK"))
console.log(detectPalindrome("I can fly ylf nac i"))


// ***********************//




