var fs = require('fs');

var onsStr = fs.readFileSync('./ons.txt').toString();

var onsArr = onsStr.split('\n')
var pgmArr = []

for (var i = 0; i < onsArr.length; i++) {
    var row = onsArr[i]

    if (row.substring(0, 5) == 'music') {
        var name = row.match(/(?<=".*",").*(?=")/)[0]
        pgmArr.push('bgm("' + name + '.mp3")')
    }
}
console.log(pgmArr)
