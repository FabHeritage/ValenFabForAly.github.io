document.addEventListener("DOMContentLoaded", () => {
    let yesBtn = document.getElementById("YES")
    let noBtn = document.getElementById("NO")
    let count = 0
    let msgs = [
    "Hey :)",
    "You missed it...",
    "It's okay, try again.",
    "Still not clicking it huh?",
    "You see the button right?",
    "It's literally right there.",
    "Are you avoiding it?",
    "Interesting strategy.",
    "Bold move.",
    "You think this is funny?",
    "Because I don't.",
    "Click it.",
    "Please.",
    "PLEASE.",
    "CLICK. IT.",
    "I am running out of patience.",
    "This is becoming personal.",
    "You’re testing me.",
    "Why are you like this?",
    "WHY.",
    "WHY ARE YOU DOING THIS.",
    "JUST CLICK IT.",
    "ALYCIA CHOUAKRI.",
    "...",
    "Ok ta gagné :(",
    "But I won't forget this."
]

let noSize = 100;   // percentage
let yesSize = 100;

noBtn.addEventListener("click", () => {

    const div = document.getElementById("NONONO");

    let p = div.querySelector("p");

    if (!p) {
        p = document.createElement("p");
        div.append(p);
    }

    if (count < msgs.length) {
        p.textContent = msgs[count];
        count++;
    }

    noSize -= 8;
    if (noSize < 30) noSize = 30;
    noBtn.style.width = noSize + "%";
    noBtn.style.fontSize = (noSize / 5) + "px";

    yesSize += 10;
    yesBtn.style.width = yesSize + "%";
    yesBtn.style.fontSize = (yesSize / 4) + "px";

    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 200) - 100;

    noBtn.style.position = "relative";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    const chaos = Math.random();

    if (chaos < 0.3) {
        noBtn.style.transform = "rotate(20deg)";
    } else if (chaos < 0.6) {
        noBtn.style.transform = "rotate(-20deg)";
    } else {
        noBtn.style.transform = "rotate(0deg)";
    }

})


}) 