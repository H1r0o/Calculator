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
        value = lowerDisplay.innerText;
        chceckingValue(value); // <= Muszę dodać funkcję która zbiera zmienne!!!
        lowerDisplay.innerText = "";
        value = "";
    }
};
// Funkcja wykrywa jaki to jest rodzaj działania
function chceckingValue(zmienna) {
    if (zmienna.includes("+")) {
        console.log("Dodawanie");
    } else if (zmienna.includes("-")) {
        console.log("Odejmowanie");
    } else if (zmienna.includes("*")) {
        console.log("Mnożenie");
    } else if (zmienna.includes("/")) {
        console.log("Dzielenie");
    }
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
}