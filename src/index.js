import { getUser } from "./api.js";
import { displayUser } from "./display.js";

const username = "samarthbuilds";

async function main(){
    try {
        console.log("Fetching Github profile...");

        const userdata = await getUser(username);
        displayUser(userdata);
    }
    catch(error){
        console.error("Something went wrong:", error.message);
    }
}

main();
