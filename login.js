
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
        sweetAlert("error", "Something Went Wrong", "Please Enter a valid email")
        return;
    };

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
        sweetAlert("error", "Weak Password", "Password must contain uppercase, number & special character");
        return;
    };

    let userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        day: day.value,
        month: month.value,
        year: year.value,
        email: email.value,
        password: password.value
    };

    let isGenderValid = false;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            userData.gender = gender[i].value;
            isGenderValid = true;
            break;
        }
    }

    if (!isGenderValid) {
        sweetAlert("error", "Something Went Wrong", "Please select your gender");
        return;
    };

    userDataArr.push(userData);

    console.log(userDataArr);

    localStorage.setItem("users", JSON.stringify(userDataArr));

    sweetAlert("success", "Signup Successfully", "Congratulations")

    firstName.value = "";

    lastName.value = "";

    day.value = "";

    month.value = "";

    year.value = "";

    email.value = "";

    password.value = "";

    for (let i = 0; i < gender.length; i++) {
        gender[i].checked = false;
    };
};

loginBtn.addEventListener("click", loginHandler);