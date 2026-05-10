/* Legacy Code */

// function processOrder(){
//     for(var i = 0; i < 3; i++){
//         setTimeout(function(){
//             console.log("Processing order #" + i);
//         }, 1000);
//     }
// }
// processOrder();

/* Refactored */
function modernProcessOrder(){
    const processOrder = "Order Number: ";

    for(let i = 1; i <= 3 ; i++){
        setTimeout(() => {
            console.log(`${processOrder}${i}`);
        }, 1000);
    }
}
modernProcessOrder()