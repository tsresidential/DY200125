 let user = "Olusola"

 console.log(`My name is ${user}`) 

 let num1 = 122
 let num2 = 150

 let sum = num1 + num2

 console.log(sum)

 function add( a, b){
    console.log(a + b)
 }

 add(1, 2)

 //write a function that takes three numbers and returns the largest.(if else statement is important here)


function largestNumber(a,b,c){
    if (a > b && a > c){
        console.log(" A lagest")
    }

    else if ( b > a && b > c){
        console.log("B is largest")
    }

    else{
        console.log( " c is the greatest")
    }

}

largestNumber(20000 ,3000,900)