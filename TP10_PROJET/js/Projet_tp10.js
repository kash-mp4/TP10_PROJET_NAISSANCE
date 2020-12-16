let naissances = [];

function initialiserTab() {
    let passages = new Object();
    document.getElementsByTagName('section')[1].innerHTML = '<table><thead><tr><th>Identité</th><th>Date</th><th>Sexe</th></tr></thead><tbody id="naissances"></tbody></table>'
}


/**
 * Fonction qui lorsqu'elle est appelée, permet de générer ma Table dans mon HTML
 *
 * 
 * 
 */

function genereMaTable() {
    let a = ""
    for (let i in naissances){
        a += "<tr><td>" + naissances[i].Nom +" "+ naissances[i].Prenom + "</td><td>" + naissances[i].Date + "</td><td>" + naissances[i].Sexe + "</td></tr>" 
    }
    document.getElementById('naissances').innerHTML = a
}

/**
 * Fonction qui lorsqu'elle est appelée, récupere toute les valeurers encodées dans mon code HTML
 * @param {*} formulaire : le nom du formulaire a récuperer
 *  
 */

function ajouterNaissance(formulaire) {

    var nouveaune = new Object();
    
    nouveaune['Nom'] = document.getElementById("ajouterNom").value;
    nouveaune['Prenom'] = document.getElementById("ajouterPrenom").value;
    nouveaune['Date'] = document.getElementById("ajouterDate").value;
    nouveaune['Sexe'] = document.getElementById("ajouterSexe").value;
    nouveaune['Desc'] = document.getElementById("aujouterDesc").value;
    
    naissances.push(nouveaune);

    genereMaTable()

    return false
}
