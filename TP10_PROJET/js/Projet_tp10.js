let naissances = [];

function ajouterNaissance(formulaire) {

    var nouveaune = new Object();
    
    nouveaune['Nom'] = document.getElementById("ajouterNom").value;
    nouveaune['Prenom'] = document.getElementById("ajouterPrenom").value;
    nouveaune['Date'] = document.getElementById("ajouterDate").value;
    nouveaune['Sexe'] = document.getElementById("ajouterSexe").value;
    nouveaune['Desc'] = document.getElementById("aujouterDesc").value;
    
    naissances.push(nouveaune);

    return false
}