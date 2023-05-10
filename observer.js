class GameObservable {
    constructor() {
        this.observers = [];
        this.gameData = {
            score: 0,
            level: 1,
            vies: 3
        };
    }
    
    addObserver(observer) {
        this.observers.push(observer);
    }
    
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    
    updateGameData(score, level, lives) {
        this.gameData.score = score;
        this.gameData.level = level;
        this.gameData.vies = vies;
        this.notify();
    }
    
    notify() {
        this.observers.forEach(observer => observer.update(this.gameData));
    }
}
    
class PlayerObserver {
    update(gameData) {
        console.log(`Current score: ${gameData.score}`);
        console.log(`Current level: ${gameData.level}`);
        console.log(`Current lives: ${gameData.vies}`);
    }
}
    
const gameObservable = new GameObservable();
    
const playerObserver1 = new PlayerObserver();
const playerObserver2 = new PlayerObserver();
    
gameObservable.addObserver(playerObserver1);
gameObservable.addObserver(playerObserver2);
    
gameObservable.updateGameData(150, 3, 2);
    
gameObservable.removeObserver(playerObserver2);
    
gameObservable.updateGameData(200, 4, 1);
    