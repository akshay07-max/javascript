// Parallel execution with Promise.all
async function getMultipleUsers() {
  try {
    const [user1, user2, user3] = await Promise.all([
      fetchUser(1),
      fetchUser(2),
      fetchUser(3),
    ]);
    console.log(user1, user2, user3);
  } catch (error) {
    console.error(error);
  }
}
getMultipleUsers();
