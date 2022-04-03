// gere tous les element html

function createManga(manga, pere){
  let premierdiv = document.createElement("div");
  
  switch (pere) {
    case 'stock':
      premierdiv.classList.add('manga');      
      break;
    case 'en_attenteP':
      premierdiv.classList.add('mangaAtente');
      break;
    case 'finitP':
      premierdiv.classList.add('mangaFinit');
      break;
  }

  premierdiv.id = manga.id;

  let tr = document.createElement("textarea");
  let cm = document.createElement("textarea");
  let nt = document.createElement("textarea");
  let lien = document.createElement("input");
  lien.id = 'lien';
  let vu = document.createElement("textarea");

  tr.setAttribute("class", "titre");
  cm.setAttribute("class", "comm");
  nt.setAttribute("class", "note");
  vu.setAttribute("class", "epvu");

  
  tr.innerText = manga.titre;
  cm.innerText = manga.commentaire;
  nt.innerText = manga.note;
  lien.setAttribute("type", "submit");
  lien.value = 'Regarder';
  lien.id = manga.lien;
  //lien.className = 'bElement';
  vu.innerText = manga.epvu;
  bindRegarde(lien, manga.lien);

  premierdiv.appendChild(tr);
  premierdiv.appendChild(cm);
  premierdiv.appendChild(nt);
  premierdiv.appendChild(lien);
  premierdiv.appendChild(vu);
 

  let deuxdiv = document.createElement("div");
  deuxdiv.classList.add('modif');

  let suppr = document.createElement("input");
  let attente = document.createElement("input");
  let finit = document.createElement("input");
    
  suppr.setAttribute("type", "submit");
  //suppr.className = 'bElement util';
  suppr.value = 'Supprimer';
  suppr.id = 'supprimer';
  
  attente.setAttribute("type", "submit");
  //attente.className = 'bElement util';
  attente.value = 'Attente';
  attente.id = 'attente';

  finit.setAttribute("type", "submit");
  //finit.className = 'bElement util';
  finit.value = 'Finit';
  finit.id = 'finit';

  deuxdiv.appendChild(suppr);
  deuxdiv.appendChild(attente);
  deuxdiv.appendChild(finit);

  premierdiv.appendChild(deuxdiv);

  let parent = document.getElementById(pere);
  parent.appendChild(premierdiv);

  let m = document.getElementById(manga.id);
  let supprimerBouton = m.children[5].children[0];
  let attenteBouton = m.children[5].children[1];
  let finitBouton = m.children[5].children[2];
  bindSupp(supprimerBouton,manga.id); 
  
  attributionBoutton(pere,attenteBouton,finitBouton,manga.id);
}

/********* MENU du haut ********/
//fait apparaitre la page d'ajout de manga
function ajouter(){
  let aAfficher = document.querySelector('#principale');
  masquer();
  aAfficher.setAttribute("style", "display:flex;");

  let bouton_clique = document.querySelector('#ajouter');
  bouton_clique.setAttribute("style", "background-color: var(--bouton_liste_change);") ;
}
//fait apparaitre la page liste
function list(){
  let aAfficher = document.querySelector('#stock');
  masquer();
  aAfficher.setAttribute("style", "display:flex;");

  let bouton_clique = document.querySelector('#liste');
  bouton_clique.setAttribute("style", "background-color: var(--bouton_liste_change);") ;
}
//fait apparaitre la page finit
function finitf(){
  let aAfficher = document.querySelector('#finitP');
  masquer();
  aAfficher.setAttribute("style", "display:flex;");

  let bouton_clique = document.querySelector('#finit');
  bouton_clique.setAttribute("style", "background-color: var(--bouton_liste_change);") ;
}
//fait apparaitre la page enAttente
function enAttente(){
  let aAfficher = document.querySelector('#en_attenteP');
  masquer();
  aAfficher.setAttribute("style", "display:flex;");

  let bouton_clique = document.querySelector('#en_attente');
  bouton_clique.setAttribute("style", "background-color: var(--bouton_liste_change);") ;
}
//telecharge la sauvegarde des mangas
function telechargement() {
  let aSAVE = 'const listeDeMangaSave = `\n [';
  aSAVE = createSaveManga(aSAVE, 'stock');
  
  aSAVE = aSAVE + 'const enattenteDeMangaSave = `\n [';
  aSAVE = createSaveManga(aSAVE, 'en_attenteP');
  
  aSAVE = aSAVE + 'const finitDeMangaSave = `\n [';
  aSAVE = createSaveManga(aSAVE, 'finitP');
  
  var element = document.createElement('a');
  element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(aSAVE));
  element.setAttribute('download', 'sauvegardeManga.js');
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
//met toutes les page a none et tout les boutons a neutre
function masquer(){
  let pages = document.querySelectorAll('.pages');
  pages.forEach(element => {
    element.setAttribute("style", "display:none;");
  });

  let boutons = document.querySelectorAll('.bMenu');
  boutons.forEach(element => {
    element.setAttribute("style", "background-color: var(--bouton_liste);");
  });
}


/********* boutons dans un manga ********/
//supprime un manga
function supprimerManga(idManga){
  let mangaASupp = document.getElementById(idManga);
  mangaASupp.remove();
}
//met le manga dans la page en_attente
function mettreEnAttenteManga(idManga){
  let mangaEnAttente = document.getElementById(idManga);
  let parent = document.querySelector("#en_attenteP");
  mangaEnAttente.className = 'mangaAtente';
  let boutonAttente = mangaEnAttente.children[5].children[1];
  let boutonFint = mangaEnAttente.children[5].children[2];
  
  attributionBoutton('en_attenteP',boutonAttente,boutonFint,idManga);
  
  parent.appendChild(mangaEnAttente);
}
//enleve le manga de la page en_attente
function enleverEnAttente(idManga){
  let mangaEnAttente = document.getElementById(idManga);
  let parent = document.querySelector("#stock");
  mangaEnAttente.className = 'manga';
  let boutonAttente = mangaEnAttente.children[5].children[1];
  let boutonFint = mangaEnAttente.children[5].children[2];
  
  attributionBoutton('stock',boutonAttente,boutonFint,idManga);
  
  parent.appendChild(mangaEnAttente);
}
//met le manga dans la page finit
function finitManga(idManga){
  let mangaFinit = document.getElementById(idManga);
  let parent = document.querySelector("#finitP");
  mangaFinit.className = 'mangaFinit';
  let boutonAttente = mangaFinit.children[5].children[1];
  let boutonFint = mangaFinit.children[5].children[2];
  
  attributionBoutton('finitP',boutonAttente,boutonFint,idManga);

  parent.appendChild(mangaFinit);
}
//enleve le manga de la page finit
function enleverFinitManga(idManga) {
  let mangaFinit = document.getElementById(idManga);
  let parent = document.querySelector("#en_attenteP");
  mangaFinit.className = 'mangaAtente';
  let boutonAttente = mangaFinit.children[5].children[1];
  let boutonFint = mangaFinit.children[5].children[2];
  
  attributionBoutton('en_attenteP',boutonAttente,boutonFint,idManga);

  parent.appendChild(mangaFinit);
}
//par rapport au pere donne les binds qu'il faut
function attributionBoutton(pere, boutonEnAttente, boutonFinit, idManga){
  let boutonRegarder = document.getElementById(idManga);
  switch (pere) {
    case 'stock':
      bindMettreEnAttente(boutonEnAttente, idManga);
      bindMettreFinit(boutonFinit, idManga);
      boutonEnAttente.value = 'Attente';
      boutonFinit.value = 'Finit';
      addClasse([boutonEnAttente,boutonFinit,boutonRegarder.children[5].children[0],boutonRegarder.children[3]],'bElementListe');
      //boutonRegarder.children[3].classList.add("bElementListe");
      break;
    case 'en_attenteP':
      bindEnleverEnAttente(boutonEnAttente, idManga);
      bindMettreFinit(boutonFinit, idManga);
      boutonEnAttente.value = 'Fin Attente';
      boutonFinit.value = 'Finit';
      addClasse([boutonEnAttente,boutonFinit,boutonRegarder.children[5].children[0],boutonRegarder.children[3]],'bElementAttente');
      //boutonRegarder.classList.add("bElementAttente");
      break;
    case 'finitP':
      bindMettreEnAttente(boutonEnAttente, idManga);
      bindEnleverFinit(boutonFinit, idManga);
      boutonEnAttente.value = 'Attente';
      boutonFinit.value = 'Ca reprend';
      addClasse([boutonEnAttente,boutonFinit,boutonRegarder.children[5].children[0],boutonRegarder.children[3]],'bElementFin');
      //boutonRegarder.classList.add("bElementFin");
      break;
  }
}
//met la class a tous les element du tableau
function addClasse(tabElement, classe) {
  tabElement.forEach(e => {
    e.className = classe;
    if (e.value == 'Regarder') {
      e.classList.add('lien');
    }
    //lien
    //e.classList.add(classe);
  });
}

/********* boutons dans un manga ********/


/********* Persistance ********/
// charge le fichier des mangas
function chargement() {
  let sauvegarde = JSON.parse(listeDeMangaSave);
  sauvegarde.forEach(element => {
      let m = new manga(element['titre'],element['commentaire'],element['note'],element['lien'],element['epvu']);
      createManga(m,'stock');
  });

  sauvegarde = JSON.parse(enattenteDeMangaSave);
  sauvegarde.forEach(element => {
      let m = new manga(element['titre'],element['commentaire'],element['note'],element['lien'],element['epvu']);
      createManga(m,'en_attenteP');
  });

  sauvegarde = JSON.parse(finitDeMangaSave);
  sauvegarde.forEach(element => {
      let m = new manga(element['titre'],element['commentaire'],element['note'],element['lien'],element['epvu']);
      createManga(m,'finitP');
  });
}
// sauvegarde a la fermeture
function save() {
  window.onbeforeunload = function () {
      let aSAVE = 'const listeDeMangaSave = `\n [';
      aSAVE = createSaveManga(aSAVE, 'stock');
  
      aSAVE = aSAVE + 'const enattenteDeMangaSave = `\n [';
      aSAVE = createSaveManga(aSAVE, 'en_attenteP');
  
      aSAVE = aSAVE + 'const finitDeMangaSave = `\n [';
      aSAVE = createSaveManga(aSAVE, 'finitP');
  
      window.myAPI.saveManga(aSAVE);
  };
}
//retourne une sauvegarde pour une page pere donné
function createSaveManga(aSAVE,pere) {
  let nbr = 0;
  let pereManga = document.getElementById(pere);
  let lesMangas;
  switch (pere) {
    case 'stock':
      lesMangas = pereManga.querySelectorAll(".manga");      
      break;
    case 'en_attenteP':
      lesMangas = pereManga.querySelectorAll(".mangaAtente");      
      break;
    case 'finitP':
      lesMangas = pereManga.querySelectorAll(".mangaFinit");      
      break;
  }
  
  lesMangas.forEach(function (manga) {
        let titre = manga.querySelector(".titre").innerHTML;
        let commentaire = manga.querySelector(".comm").innerHTML;
        let note = manga.querySelector(".note").innerHTML;
        let lien = manga.querySelector(".lien").id;
        let epvu = manga.querySelector(".epvu").innerHTML;

        aSAVE = aSAVE + '\n\t{"titre":"' + titre + '","commentaire":"' + commentaire + '","note":"' + note + '","lien":"' + lien + '","epvu":"' + epvu + '"}';
        nbr += 1;
        if(nbr != lesMangas.length ){
            aSAVE = aSAVE +',';
        }
    })


    aSAVE = aSAVE + '\n]`;\n';
    return aSAVE;
}
/********* Persistance ********/


//fait pop un div
function popup(){
  let lepopup = document.querySelector('#popup');
  
  lepopup.setAttribute("style", "display:block;");
  console.log('oui');
  setTimeout(function(){
    lepopup.setAttribute("style", "display:none;");
  },1000);
}