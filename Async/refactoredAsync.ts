interface User {
    id: number;
    name: string;
    email?: string;
    address?: {
        city?: string;
    };
}

async function getHighPrioUserTS() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok){
            throw new Error(`HTTP Status Error: ${response.status}`);
        }

        const user = await response.json() as User[];
        
        user.forEach(user =>{
            console.log(`${user.name} lives in ${user.address?.city ?? 'Unknown City'}`);
        })

        return user.filter(user => user.id < 5);
    } catch (error) {
        console.error("Error: ", error);
        return[];
    }
}

const filteredData = await getHighPrioUserTS();

console.log(filteredData);
console.log(`Total filtered users: ${filteredData.length}`);