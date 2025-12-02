const reponses = {
    q1: "local",
    q2: "ip1",
    q3: "ftp",
    q4: "dhcp",
    q5: "domain",
    q6: "routeur",
    q7: "80",
    q8: "https",
    q9: "2",
    q10: "broad"
};

function corriger() {
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        let r = document.querySelector(`input[name="q${i}"]:checked`);
        if (r && r.value === reponses["q" + i]) {
            score++;
        }
    }

    document.getElementById("resultat").textContent =
        "Votre score : " + score + "/10";
}

function ouvrirCorrige() {
    window.open("corrige.html", "_blank", "width=700,height=700");
}