function callAPI() {
    console.log("Thực hiện đoạn lệnh gọi API từ Server ...");
    return "Call API Successfully!, Next Step.";
}
function callAPICreateUser() {
    console.log("STEP1: Thực hiện đoạn lệnh trước khi gọi API!");
    //Thực hiện call API, thêm await để xử lý bất đồng bộ.
    let result = callAPI();
    console.log("STEP2: Thực hiện Call API và trả về kết quả: ", result);
    // Đoạn lệnh phía dưới sẽ thực thi sau khi hoàn thành chạy API.
    console.log("STEP3: Thực hiện đoạn lệnh sau khi gọi API!");
}
callAPICreateUser();
