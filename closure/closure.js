function greetUser(){
    let name = "Gino";

    function displayName(){
        console.log("Hello " + name + "!!" );
    }
    return displayName;
}

const myGreet = greetUser();
myGreet()