Les bases de ce que tu as appris

La fonction de départ dans laquelle on déclare

function setup() {

}
La fonction qui tourne en boucle

function draw() {

}

Différentes manières de créer un champs de saisi de texte

__________________________________________________________________
Déclaration d une varible:
    var textField;
Création du champs de texte:
    textField = createInput('Taper qq chose');

__________________________________________________________________
Crréation et récupération de ce que l usr tape:

    Création d une < textarea id = "textarea" > raconte ta vie < /textarea>
En html avec un ID:

    Pour récup le text tjrs avec la variable textField on select l id
de la zone de texte

textField = select('#textarea');

Puis pour afficher ce que l usr tape ds un nvx paragraphe:

    Soit avec changed qui prends la valeur courante appel une
fonction newText:
    textField.changed(newText);

Soit avec input qui prends la derniere valeur tapée, appel une
fonction newTyping:
    textField.input(newTyping);

Pour afficher ce que l usr a taper ds un paragraphe on utilise
les fonction précedement appelé:

    Pour la premiere:
    function newText() {

        createP fonction qui crée un paragraphe avec
        l utilisation de value();
        qui donne la valeur
        de textField:

            createP(textField.value());
    }

Pour la deuxieme:
    function newTyping() {

        soit idem:
            createP(textField.value());

        On peut aussi précedement créer un paragraphe en html
        /*<p id = "output" > < /p>*/
        avec un identifiant, que l on appel
        sur la fonction html();
        avec la valeur saisie par l usr:

            output.html(textField.value());
    }
