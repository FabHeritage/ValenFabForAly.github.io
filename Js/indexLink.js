document.addEventListener("DOMContentLoaded", () => {
    let clickHere = document.getElementById("CLickMe")
    let count = 0
    let msgs = [
        "Hey you missed it :)",
        "Oops again :)",
        ":|?",
        "uhhhh...?",
        "Hey are you ok?",
        "HEY!",
        "HEEEEEEYYYYYY!",
        "CLICK ME !",
        "NOW!",
        "ALYCIA CHOUAKRI!",
        "Ok ta gagné..."


    ]
    document.addEventListener("click", (event) => {
        if (!clickHere?.contains(event.target)) {
            count++
            console.log(count)
            const div = document.getElementById("uhhh")
            let p = div.querySelector("p");

            if (!p) {
                p = document.createElement("p");
                div.append(p);
            }

            if (count < msgs.length+1) {
                p.textContent = msgs[count];
                count++;
            }

        }
    }
    )

    yesBtn.addEventListener("click", () => {
    window.location.href =
        "mailto:Jijibo225@hotmail.com?subject=She Said Yes :)&body=YES!!!";
});

}) 