class Creature {
    static number = 0;
    #id;
    constructor(name, healthPoints, damage) {
        Creature.number++;
        this.#id = Creature.number;
        if (typeof arguments[0] === 'object') {
            for (let i in arguments[0])
                this[i] = arguments[0][i];
            return;
        }
        this.name = name;
        this.healthPoints = healthPoints; 
        this.damage = damage; 
    }

    defeat() {        
        console.log(`Существо ${this.name} погибло!`);               
    }
    get id() {
        console.log('Сработал геттер id.');
        return 'Нельзя выводить id';
    }
    set (id) {
        console.log('Сработал сеттер id.');
        this.#id = this.id;
    }
}

class Player extends Creature {
    #lvl = 0;
    constructor(name, healthPoints, damage) {
        super(name, healthPoints, damage); //вызов конструктора родительского класса                
    }
    attack(other) {
        other.healthPoints -= this.damage;
        if (other.healthPoints < 1) {
            other.defeat();
            this.#lvl++;
            return true;
        }
        return false;
    }
    get lvl() {
        console.log('Сработал геттер lvl.');
        return 'Нельзя выводить lvl';
    }
    set (id) {
        console.log('Сработал сеттер lvl.');
        this.#lvl = this.lvl;
    }
}

class Enemy extends Creature {
    constructor(name, healthPoints, damage) {
        super(name, healthPoints, damage); //вызов конструктора родительского класса                
    }
    attack(other) {
        other.healthPoints -= this.damage;
        if (other.healthPoints < 1) {
            other.defeat();            
            return true;
        }
        return false;
    }    
}

let player = new Player('Эльф', 15, 5);
console.log(player);
let enemy = new Enemy('Орк', 12, 3);
console.log(enemy);

while (player.healthPoints >= 1 && enemy.healthPoints >= 1) {
    player.attack(enemy);
    enemy.attack(player);
}

console.log(player);
console.log(enemy);
