class Avatar {

    constructor (gold, x, y){
        this.gold = gold;
        this.x = x;
        this.y = y;
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

    addGold (value){
        this.gold += value;
    }

    getGold (){
        return gold;
    }


    getX (){
        return X;
    }

    getY (){
        return y;
    }

}

