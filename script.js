const upperDisplay = document.getElementById("displayUpper");
const lowerDisplay = document.getElementById("displayLower");

const buttons = document.querySelectorAll("button");
// Dodanie listener do każdego przycisku / wyświetlanie danych na lowerDisplay
buttons.forEach((button) => {
    button.addEventListener("click", event => {
        displayFunc(event);
    }
    );
})

function displayFunc(event) {
    lowerDisplay.innerText += event.target.innerText;
}