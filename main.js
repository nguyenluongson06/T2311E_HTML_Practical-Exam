var input_phoneNum = document.getElementById("phoneNum");

input_phoneNum.addEventListener("change", () => {
    var phoneNum = input_phoneNum.value;
    var phoneNum_warning = document.getElementById("invalidPhoneNum");
    if (phoneNum.length != 9) {
        phoneNum_warning.style.visibility = "visible";
    } else {
        phoneNum_warning.style.visibility = "hidden";
    }
})