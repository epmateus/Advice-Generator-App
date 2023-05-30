let button = document.querySelector("#dice-button");

button.addEventListener('click', giveAdvice);

async function randomAdvice(advice) {
    const response = await fetch(`https://api.adviceslip.com/${advice}`);
    return await response.json();
}

async function giveAdvice(advice){
    const givenAdvice = await randomAdvice();
    const contentAdvice = await givenAdvice(advice);
    document.getElementById("advice-description").textContent = contentAdvice;
}

giveAdvice()