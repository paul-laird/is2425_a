/*If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

1. Find the sum of all the multiples of 3 or 5 below 1000.

2. Create a function to find the sum of all the multiples of a or b below n.
(a,b,n) are function parameters

3. Allow the user to enter the parameters via text box(es)
and alert them to the output


Demonstrate some DOM manipulation in the exercise.
for example changing the value of a result div, hiding inputs once the button is clicked ...

Arrays:
a.
Create a function which takes parameters a,b,l
l is a list of integers
find the sum of all the multiples of a or b in l

b.
Create a function which takes parameters a,l
a is a list of two integers
l is a list of integers
find the sum of all the multiples of elements of a in l

c.
Create a function which takes parameters a,l
a is a list of integers
l is a list of integers
find the sum of all the multiples of elements of a in l
*/
alert("Loaded Euler JS");
let a=3;
let b=5;
let n=1000;

//Create a function to find the sum of all the multiples of a or b below n.
//(a,b,n) are function parameters

let f1=(a,b,n) => {
    let total=0
    for(let i=0; i<n; i++){
        if (i%a==0 || i%b==0){
            total+=i;
        }
    }
    return total;
}

alert(f1(3,5,1000));