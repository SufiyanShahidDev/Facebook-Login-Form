
let email = document.getElementById("email");

let password = document.getElementById("password");

let loginBtn = document.getElementById("loginBtn");

let userDataArr = [];

const loginHandler = () => {
    const sweetAlert = (error, title, message) => {
        Swal.fire({
            icon: error,
            title: title,
            text: message,
        });
    };

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email.value.trim())) {
        sweetAlert("error", "Something Went Wrong", "Please Enter a valid Email Address")
        return;
    };

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordRegex.test(password.value)) {
        sweetAlert("error", "Weak Password", "Password must contain uppercase, number & special character");
        return;
    };

    let userData = {
        email: email.value,
        password: password.value
    };

    userDataArr.push(userData);

    console.log(userDataArr);

    localStorage.setItem("users", JSON.stringify(userDataArr));

    sweetAlert("success", "Signup Successfully", "Congratulations")

    email.value = "";

    password.value = "";
};

loginBtn.addEventListener("click", loginHandler);