const form = document.querySelector(".login-form"); 


form.addEventListener("submit", foo);

function foo(event) {
    event.preventDefault();

    const inputEmail = event.target.elements.email.value;
    const inputPassword = event.target.elements.password.value;
    if (inputEmail === "" || inputPassword === "") {
        alert("All form fields must be filled in");
    }

    const obj = {
        email: inputEmail,
        password: inputPassword,
    };
    console.log(obj);
    form.reset()
}




