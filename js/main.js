let retour = document.querySelector('#retour');
let ajout = document.querySelector('#ajouter');
let liste = document.querySelector('#liste');
let en_attente = document.querySelector('#en_attente');
let finit = document.querySelector('#finit');
let telecharge = document.querySelector('#telecharger');

bindRedirection(retour,'index.html');
bindAjout(ajout);
bindListe(liste);
bindEnAttente(en_attente);
bindFinit(finit);
bindTelechargement(telecharger);

let texttitre = document.querySelector('#titre');
let textcommentaire = document.querySelector('#commentaire');
let select = document.querySelector('#note');
let textln = document.querySelector('#ln');
let textepvu = document.querySelector('#epvu');

let tabelem = [texttitre,textcommentaire,select,textln,textepvu];
bindInput(texttitre, tabelem);
bindInput(textcommentaire, tabelem);
bindInput(textln, tabelem);
bindInput(textepvu, tabelem);

list();
/*
const s = `[
    {"titre": "One Piece", "commentaire": "commentaire commentaire commentaire commentaire commentaire", "note": "15", "lien": "https://openclassrooms.com/forum/sujet/javascript-element-qui-disparait-apres-insertion", "epvu":"150"},
    {"titre": "One Piece", "commentaire": "tb", "note": "15", "lien": "https://voiranime.com/anime/quan-zhi-gao-shou/", "epvu":"150"}
]`
*/

//Load fichier local
chargement();

//Save fichier local 
save()

function test(){
    console.log(createSaveManga('', 'stock'));
    console.log(createSaveManga('', 'en_attenteP'));
    console.log(createSaveManga('', 'finitP'));
}


//trie
/*
let titretri = document.querySelector('#titreTri');
bindtri(titretri);





function bindtri(btn){
    btn.onclick = function() {
        let pere = document.getElementById('stock');
        let toutLesManga = pere.querySelectorAll('.manga');
        let nbr = 0;
        let dicoTitre = {};
        
        toutLesManga.forEach(function (e) {
            let titre = e.querySelector(".titre").innerHTML;
            let val = {};
            val[nbr] = titre
            dicoTitre[nbr] = val;
            nbr += 1;
        });

        let dicoTitreTrie = {};
        for (const [keys, values] of Object.entries(dicoTitre)) {
            for (const [cle, valeur] of Object.entries(dicoTitre)) {
                if (Object.values(values)[0] < Object.values(valeur)[0]) {
                    
                }
            }
            console.log(Object.values(values)[0]);
        }

    }
}
*/
//console.log(document.querySelectorAll('.titre')[1].innerHTML);
/*
function bindtriIndividuel(idPere,colonneAtrier){
    let pere = document.getElementById(idPere);
    let listeManga = pere.querySelectorAll('.manga');
    
    let nouveauPere = pere.querySelector('.tableauListe'); // faut append des truc avant et create
    listeManga.forEach(e => function () {
        
    })
}
*/





