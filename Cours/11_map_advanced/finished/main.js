const users = getUsers();

async function getUsers() {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?nat=fr&results=50"
        );

        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
