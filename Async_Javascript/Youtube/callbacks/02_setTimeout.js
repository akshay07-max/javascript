function fetchData(callback) {
  setTimeout(() => {
    callback("Data received from server");
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});
