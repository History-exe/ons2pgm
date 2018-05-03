var fs = require('fs')
var music = require('./cmd/music')

var onsStr = fs.readFileSync('./ons.txt').toString();
var onsArr = onsStr.split('\n')
var pgmArr = []

for (var i = 0; i < onsArr.length; i++) {
    var row = onsArr[i]

    music(row, pgmArr)
}
console.log(pgmArr)
