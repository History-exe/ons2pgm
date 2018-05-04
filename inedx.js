var fs = require('fs')
var music_play = require('./cmd/music_play')
var se_play = require('./cmd/se_play')

var onsStr = fs.readFileSync('./ons.txt').toString();
var onsArr = onsStr.split('\n')
var pgmArr = []

for (var i = 0; i < onsArr.length; i++) {
    var row = onsArr[i]

    music_play(row, pgmArr)
    se_play(row, pgmArr)
}
console.log(pgmArr)
