var number = 1;

for (i = 0, i >20 , i ++) {
    console.log(number);
    if (number % 3 == 0) {
        console.log("Fizz");
        number = number + 1;
    } else if (number % 5) {
        console.log("Buzz");
        number = number + 1;
    } else if ((number % 3 ) && (number % 5)) {
        console.log("FizzBuzz");
        number = number + 1;
    } else {
        number = number + 1;
    }
};
