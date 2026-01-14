// Real-world example: fetching API data
async function getUserPosts(userId) {
  try {
    // Simulate API calls
    const user = await fetch(`https://api.example.com/users/${userId}`).then(
      (res) => res.json()
    );

    const posts = await fetch(
      `https://api.example.com/users/${userId}/posts`
    ).then((res) => res.json());

    return { user, posts };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

getUserPosts(1)
