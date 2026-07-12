
// JavaScript Closures Example


function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        console.log("Current Count:", count);
    }

    return innerFunction;
}

const counter = outerFunction();

counter();
counter();
counter();