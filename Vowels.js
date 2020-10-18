/**
 * vowels.js
 * 1 arr.forEach
 */

 function countVowlsCons(str) {
    vowls = 0
    cons = 0
    str = str.split('')
    arr = ['a', 'e', 'i', 'o', 'u']

    arr.forEach((var1)=>str.forEach((var2)=> {
        if(var1 == var2){
            vowls = vowls + 1
        }
    }))

    cons = str.length - vowls 

    console.log('Vowels: ' + vowls)
    console.log('Consonants: ' + cons)
 }
 
 str = 'croissant'
 countVowlsCons(str)