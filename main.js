document.getElementById("phoneNum").addEventListener("input", () => {
    var input_phoneNum = document.getElementById("phoneNum");
    var phoneNum = input_phoneNum.value;
    var phoneNum_warning = document.getElementById("invalidPhoneNum");
    if (phoneNum.length != 9) {
        phoneNum_warning.style.visibility = "visible";
        phoneNum_warning.style.height = "auto";
    } else {
        phoneNum_warning.style.visibility = "hidden";
        phoneNum_warning.style.height = "0px";
    }
})

document.getElementById("repeatPass").addEventListener("input", () => {
    var pass_value = document.getElementById("pass").value;
    var repeat_pass_value = document.getElementById("repeatPass").value;
    var pass_warning = document.getElementById("diffPassword");
    if (pass_value != repeat_pass_value) {
        pass_warning.style.visibility = "visible";
        pass_warning.style.height = "auto";
    } else {
        pass_warning.style.visibility = "hidden";
        pass_warning.style.height = "0px";
    }
})