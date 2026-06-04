export async function getUser(username){
    const url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Github user not found");
    }
    const data = await response.json();
    return data;
}
