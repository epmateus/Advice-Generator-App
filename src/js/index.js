const button = document.querySelector ("#dice-button");
const adviceId = document.getElementById("advice-id");
const adviceDescription = document.getElementById("advice-description");

async function giveAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const givenId = `Advice #${adviceContent.slip.id}`;
    const givenAdvice = `"${adviceContent.slip.advice}"`;

    adviceId.innerHTML = givenId;
    adviceDescription.innerHTML = givenAdvice;
}

button.addEventListener('click', giveAdvice);

giveAdvice()