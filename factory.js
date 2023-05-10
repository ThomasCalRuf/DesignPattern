class Player {
    constructor(nom, vie, competences) {
        this.nom = nom;
        this.vie = vie;
        this.competences = competences;
    }
  
    attaque() {
        console.log(`${this.nom} attaque!`);
    }
}
  
class Enemy {
    constructor(nom, vie, dommage) {
        this.nom = nom;
        this.vie = vie;
        this.dommage = dommage;
    }
  
    attaque() {
        console.log(`${this.nom} attaque!`);
    }
}
  
class GameFactory {
    static create(type, nom, vie, options) {
        if (type === 'joueur') {
            return new Player(nom, vie, options.competences);
        } else if (type === 'ennemy') {
            return new Enemy(nom, vie, options.dommage);
        }
    }
}
  
const joueur = GameFactory.create('joueur', 'Thomas', 100, { skills: ['sauter', 'tirer'] });
const ennemy = GameFactory.create('ennemy', 'Zombie', 50, { dommage: 10 });
  
joueur.attaque();
ennemy.attaque();
  