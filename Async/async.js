// The Goal: 
// Write a function that fetches a list of users from a mock API, 
// filters them, and handles errors.

// 1. Create an async function called getHighPriorityUsers.

// 2. Use fetch('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)').

// 3. await the response and convert it to JSON.

// 4. Filter the users to return only those whose id is less than 5.

// 5. Wrap everything in a try...catch block to handle potential network errors.

async function getHighPriorityUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if(!response.ok){
            throw new Error("Error");
        }

        const users = await response.json();

        const filtered = users.filter(user => user.id < 5);
        console.log("Filtered users: ", filtered);
        return filtered;
    }
    catch (error){
        console.error("Error message: ", error.message);
    }
}

getHighPriorityUsers();