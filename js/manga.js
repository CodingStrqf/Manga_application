// classe manga
class manga {
  titre;
  commentaire;
  note;
  lien;
  epvu;
  id;

  constructor(titre,commentaire,note,lien,epvu) {
    this.titre = titre;
    this.commentaire = commentaire;
    this.note = note;
    this.lien = lien;
    this.epvu = epvu;
    this.id = document.querySelectorAll('.manga').length + document.querySelectorAll('.mangaAtente').length + document.querySelectorAll('.mangaFinit').length;
  }

  toString(){
    return this.titre +' '+this.commentaire +' '+this.note +' '+this.lien +' '+this.epvu ;
  }
}
