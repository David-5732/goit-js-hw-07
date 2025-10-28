const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", foo);

function foo(event) {
    const newSpan = event.target.value;
    if (newSpan === "") {
        span.innerHTML = "Anonymous";
    } else if (newSpan.includes(" ")) {
        span.innerHTML = "Anonymous";
    } else {
        span.innerHTML = newSpan;
    }
}