const upperDisplay = document.getElementById("displayUpper");
const lowerDisplay = document.getElementById("displayLower");
const buttons = document.querySelectorAll("button");

let value;

// Dodanie listener do każdego przycisku / wyświetlanie danych na lowerDisplay
buttons.forEach((button) => {
    button.addEventListener("click", event => {
        displayFunc(event);
        specialKeys(event);
    }
    );
});

// Wyświetla tylko liczby w razie innego klawisza pomija
function displayFunc(event) {
    if (event.target.innerText !== "DELETE" && event.target.innerText !== "CLEAR" && event.target.innerText !== "=") {
        lowerDisplay.innerText += event.target.innerText;
        chceckingValue(event); // <= Muszę dodać funkcję która zbiera zmienne!!!
    };

};

//funkcja określająca klawisze specjalne i co ma zostać wykonane po ich naciśnięciu
function specialKeys(event) {
    if (event.target.innerText === "DELETE") {
        lowerDisplay.innerText = "";
        valueA = "";
    };
    if (event.target.innerText === "CLEAR") {
        lowerDisplay.innerText = lowerDisplay.innerText.slice(0, -1);
    };
    if (event.target.innerText === "=") { // !! Musi zostać zamienione na funkcję
        upperDisplay.innerText = lowerDisplay.innerText;
        lowerDisplay.innerText = "";
    }
};