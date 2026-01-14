// Sequential vs Parallel
async function sequential() {
  const a = await fetchUser(1); // Wait
  const b = await fetchUser(2); // Then wait
  // Total: 2 seconds
}

async function parallel() {
  const [a, b] = await Promise.all([fetchUser(1), fetchUser(2)]);
  // Total: 1 second (runs simultaneously)
}
