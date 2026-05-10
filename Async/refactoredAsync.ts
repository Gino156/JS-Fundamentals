interface User {
    id: number;
    name: string;
    email?: string;
    address?: {
        city: string;
    };
}

async function getHighPriorityUsersTS(): Promise<User[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json() as User[];

        users.forEach(user => {
            console.log(`${user.name} lives in ${user.address?.city ?? 'Unknown City'}`);
        });

        return users.filter(user => user.id < 5);

    } catch (error) {
        console.error("Error Fetching Users:", error);
        return [];
    }
}

// 3. OPTION 2: Top-level Await
// Dito natin sinasabi sa terminal na "Huwag mong papatayin ang process hangga't hindi tapos ang fetch"
const filteredData = await getHighPriorityUsersTS();

console.log(filteredData);
console.log(`Total filtered users: ${filteredData.length}`);

export {};
