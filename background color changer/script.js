const body = document.querySelector("body");
const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");
const cssOutput = document.querySelector(".css-output");

// getting colors

let leftColor = leftInput.value;

let rightColor = rightInput.value;

const changeBackground = () => {
    const cssString = `linear-gradient(to right , ${leftColor}, ${rightColor})`;
    body.style.background = cssString;

    cssOutput.textContent = `background : ${cssString}`;

};

// adding event on inputs

leftInput.addEventListener("change", (event) => {
    leftColor = event.target.value;
    changeBackground();

});

rightInput.addEventListener("change", (event) => {
    rightColor = event.target.value;
    changeBackground();

});