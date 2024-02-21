const messages = [
    { title: "Feliz Aniversário!", text: "Desejamos um dia cheio de alegria e realizações." },
    { title: "Parabéns pelo novo emprego!", text: "Que esta nova etapa seja repleta de sucesso." },
    { title: "Boa recuperação!", text: "Esperamos que você se recupere rapidamente." },
    { title: "Bom trabalho!", text: "Seu esforço e dedicação são admiráveis." }
];

let currentIndex = 0;

function displayMessage() {
    const messageTitle = document.getElementById("messageTitle");
    const messageText = document.getElementById("messageText");

    messageTitle.textContent = messages[currentIndex].title;
    messageText.textContent = messages[currentIndex].text;

    currentIndex = (currentIndex + 1) % messages.length;
}

displayMessage();
setInterval(displayMessage, 5000);
