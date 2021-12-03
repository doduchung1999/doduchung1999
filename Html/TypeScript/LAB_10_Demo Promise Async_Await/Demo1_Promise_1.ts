let promise = new Promise(function (resolve, reject) {
  resolve("Call API Success!");
  //   reject("Error");
});
promise.then(
  function (success) {
    console.log("Chạy đoạn lệnh Success: ", success);
  },
  function (error) {
    console.log("Chạy đoạn lệnh error: ", error);
  }
);
