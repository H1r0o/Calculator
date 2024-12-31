const upperDisplay = document.getElementById("displayUpper");
const lowerDisplay = document.getElementById("displayLower");
const buttons = document.querySelectorAll("button");

let firstValue;
let secondValue;

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
        firstValue = "";
        secondValue = "";
        upperDisplay.innerText = "";
    };
    if (event.target.innerText === "CLEAR") {
        lowerDisplay.innerText = lowerDisplay.innerText.slice(0, -1);
    };
    if (event.target.innerText === "=" && firstValue !== "" && secondValue !== "") { // !! Musi zostać zamienione na funkcję
        upperDisplay.innerText = lowerDisplay.innerText;
        value = lowerDisplay.innerText;
        lowerDisplay.innerText = "";
        chceckingValue(value);

    }
};

function equal() {

}
// Funkcja wykrywa jaki to jest rodzaj działania
function chceckingValue(zmienna) {

    if (zmienna.includes("+")) {
        firstValue = zmienna.slice(0, zmienna.indexOf("+"));
        secondValue = zmienna.slice(zmienna.indexOf("+") + 1, zmienna.length);
        add(Number(firstValue), Number(secondValue));
    } else if (zmienna.includes("-")) {
        firstValue = zmienna.slice(0, zmienna.indexOf("-"));
        secondValue = zmienna.slice(zmienna.indexOf("-") + 1, zmienna.length);
        subtract(Number(firstValue), Number(secondValue));
    } else if (zmienna.includes("*")) {
        firstValue = zmienna.slice(0, zmienna.indexOf("*"));
        secondValue = zmienna.slice(zmienna.indexOf("*") + 1, zmienna.length);
        multiply(Number(firstValue), Number(secondValue));
    } else if (zmienna.includes("/")) {
        firstValue = zmienna.slice(0, zmienna.indexOf("/"));
        secondValue = zmienna.slice(zmienna.indexOf("/") + 1, zmienna.length);
        divide(Number(firstValue), Number(secondValue));
    }
}

function add(a, b) {
    let resault = a + b;
    lowerDisplay.innerText = resault;
};

function subtract(a, b) {
    let resault = a - b;
    lowerDisplay.innerText = resault;
};

function multiply(a, b) {
    let resault = a * b;
    lowerDisplay.innerText = resault;
};

function divide(a, b) {
    let resault = a / b;
    lowerDisplay.innerText = resault;
}
