class Avatar {

    constructor (gold, x, y){
        this.gold = gold;
        this.x = x;
        this.y = y;
        this.hp = 10;
        this.damage = 1;
    }

    foward (value){
        this.x += value;
    }
   
    back (value){
        if(this.x >= 0){
            this.x -= value;
        }
    }

    right (value){
        this.y += value;
    }

    left (value){
        if(this.y >= 0){
            this.y -= value;
        }
    }

    attack(value){
        return this.damage;
    }

}

class Cowboy extends Avatar {
    constructor (x, y, gold, hp) {
        super(x, y, gold, hp);
        this.bullets = 10;
        this.damage = 2;
    }

    shoot(){
        this.bullets -= 1;
        return this.damage;
    }

    addBullets(){
        this.bullets += 1;
    }
}

class Mage extends Avatar {
    constructor (x, y, gold, hp) {
        super(x, y, gold, hp);
        this.spells = 10;
        this.damage = 3;
    }

    shoot(){
        if(this.spells > 0){
            this.spells -= 1;
            return this.damage;
        } else{
            const myTimeout = setTimeout(this.restore(), 10000);
        }
       
    }

    addBullets(){
        this.spells += 1;
    }

    restore(){
        this.spells = 10;
    }
}

