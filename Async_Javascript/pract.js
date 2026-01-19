const getTimeout = setTimeout(() => {
  console.log("timeout")
}, 1000);

clearTimeout(getTimeout);