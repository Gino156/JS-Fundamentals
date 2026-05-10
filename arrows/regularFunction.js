function Counter() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++; // ERROR: 'this' dito ay hindi yung Counter, kundi yung Global/Window!
        console.log(this.seconds);
    }, 1000);
}

const myCounter = new Counter();

//Output: NaN (Not a Number)