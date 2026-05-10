function Counter() {
    this.seconds = 0;
    
    // Pinalitan natin ng arrow function dito:
    setInterval(() => {
        this.seconds++; 
        console.log(this.seconds);
    }, 1000);
}

const myCounter = new Counter();