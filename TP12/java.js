function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    }
    else if (moyenne < 12) {
        document.write("Admis-Passable");
    }
    else if (moyenne < 14) {
        document.write("Admis-Bien");
    }
    else if (moyenne < 20) {
        document.write("Admis-Très bien");
    }
document.write("<br>" + "<br>" + '<a href="index.html">Retourner à l\'index</a>');
}


function test_temperature() {
    var n1 = prompt("Donner la Temperature en °C");
 
    
    var somme = Number(n1);
    
    
    
    
    if (somme < 10) {
        document.write("Froid");
    } 
    else if (somme >= 10 && somme < 25) {
        document.write("Normal");
    } 
    else {
        document.write("Chaud");
    }
document.write("<br>" + "<br>" + '<a href="index.html">Retourner à l\'index</a>');
}


function comparaison_nombre() {
    var n1 = prompt("Donner un nombre.");
    var n2 = prompt("Donner un autre nombre.");

    if (n1<n2) {
    document.write(n1 + " < " + n2);    }

    else if  (n2<n1) {
        document.write(n2 + " < " + n1);

    }
else { (n1=n2)

document.write(n1 + " = " +n2);

}
document.write("<br>" + "<br>" + '<a href="index.html">Retourner à l\'index</a>');
}

function devinette() {
    var chiffresecret = Math.floor(Math.random() * 20) + 1;

    var n1 = prompt("donner un nombre entre 1 et 20");

if (n1 < chiffresecret) {
alert("Votre chiffre est inférieur")
alert("Votre chiffre :"+" " + n1 + " , " + "La réponse :" + " " + chiffresecret)


}

else if (n1 > chiffresecret) {
    alert("Votre chiffre est supérieur")
    alert("Votre chiffre :"+" " + n1 + " , "  + "La réponse :" + " " + chiffresecret)   
    }

 else {
    alert(" Félicitations ! Vous avez trouvé le chiffre : " + chiffreSecret);
  }

}