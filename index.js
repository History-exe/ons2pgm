var fs = require('fs')

var music_play = require('./cmd/music_play')
var music_stop = require('./cmd/music_stop')
var se_play = require('./cmd/se_play')

var funArr = []
funArr.push(music_play)
funArr.push(music_stop)
funArr.push(se_play)

var onsStr = fs.readFileSync('./ons.txt').toString();
var onsArr = onsStr.split('\n')
var pgmArr = []

for (var i = 0; i < onsArr.length; i++) {
    var row = onsArr[i]

    for (var fun of funArr)
        if (fun(row, pgmArr))
            break
}
console.log(pgmArr)
