const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", updateNameOutput);

function updateNameOutput(event) {
    const rawValue = event.target.value.trim();

    if (rawValue === "") {
        span.innerHTML = "Anonymous";
    } else {
        span.innerHTML = rawValue;
    }
}
