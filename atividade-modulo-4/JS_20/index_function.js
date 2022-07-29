
function avatar(){
    let gold = 0;
    let x = 0;
    let y = 0;

    this.getGold = function (){
        return gold;
    }

    this.setGold = function(value){
        gold = value;
    }

    this.setX = function (){
        return x;
    }

    this.setX = function (value){
        x = value;
    }

    this.getY = function (){
        return y;
    }

    this.setY = function (value){
        y = value;
    }

    avatar.prototype.forward = function (value){
        this.x += value;
    }

    avatar.prototype.back = function (value){
        if(this.x >= 0){
            this.x -= value;
        }
    }

    avatar.prototype.right = function (value){
        this.y += value;
    }

    avatar.prototype.left = function (value){
        if(this.y >= 0){
            this.y -= value;
        }
    }

    avatar.prototype.addGold= function (value){
        this.gold += value;
    }
}


