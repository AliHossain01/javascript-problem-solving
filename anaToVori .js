function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please give a number';
    }
    var vori = ana / 16;
    return vori;
}

var myAna = 64;
var vori = anaToVori("ak");
console.log(vori);