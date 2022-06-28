function integers() {
    for (let n=0; n<=100; n++){
        if (n%3===0 && n%5===0){
            console.log("FizzBuzz");
        }
        else if (n%3===0){
            console.log("Fizz");
        }
        else if (n%5===0){
            console.log("Buzz");
        }
    }
}
integers()

function multiples_sum(){
    var sum = 0;
    for (let n=0; n<1000; n++){
        if (n%3===0 && n%5===0){
            sum+=n 
        }
    }
    console.log(sum);
}   
multiples_sum() 

function odd_or_even(){
    for (let n=0; n<=20; n++){
        if (n%2===0){
            console.log( n + " " + "is even");
        }
        else{
            console.log( n + " " + "is odd");
        }
    }
}
odd_or_even()

function largest_number(){
    var num = [-2,4,-5,6,0];
    var largest = 0;
    for (let i = 0; i < num.length; i++) {
        if (largest < num[i]){
            largest = num[i];
        }
    }
    console.log(largest);  
}
largest_number()

function greatest_number(){
    var a = 10;
    var b = 40;
    if (a > b){
        console.log(a + " " + "is the largest");
    }
    else if (a < b){
        console.log(b + " " + "is the largest");
    }
    else{
        console.log("They are equal");
    }
}
greatest_number()

function leap_year_checker(){
    for (let an = 2000; an <= 2022; an++){
        if(an%400===0 && an%100===0){
           console.log(an + " " + "is a leap year");
        }
        else if(an%4===0){
            console.log(an + " " + "is a leap year");
        }
    }
}
leap_year_checker()
