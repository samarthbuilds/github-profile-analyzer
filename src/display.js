export function displayUser(user) {
  console.log("=================================");
  console.log("       GitHub Profile");
  console.log("=================================");

  console.log(`Name: ${user.name}`);
  console.log(`Username: ${user.login}`);
  console.log(`Followers: ${user.followers}`);
  console.log(`Following: ${user.following}`);
  console.log(`Public Repositories: ${user.public_repos}`);
  console.log(`Profile URL: ${user.html_url}`);
  console.log(`Account Created: ${user.created_at}`);

  console.log("=================================");
}
