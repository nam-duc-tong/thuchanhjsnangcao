function Mouse(color){
    this.color = color;
    // this.weight = weight;
    this.dead = false;
}
Mouse.prototype.die = function(){
    this.dead = true;
};
module.exports = Mouse;