const myPromise = new Promise((resolve,rejected) => {
    const success = true;

    if(success){
        resolve("Success ka!");
    } else {
        rejected("Rejected ka boi");
    }
});

async function runTask() {
    try{
        const data = await myPromise;
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

runTask()