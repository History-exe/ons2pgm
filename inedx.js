var fs = require('fs')

var onsStr = fs.readFileSync('./ons.txt').toString();

var onsArr = onsStr.split('\n')
var pgmArr = []

for (var i = 0; i < onsArr.length; i++) {
    var row = onsArr[i]

    if (row.substring(0, 5) == 'music') {
<<<<<<< HEAD
        var name2 = row.match(/(?<=".*",").*(?=")/)[0]
        pgmArr.push('bgm("' + name2 + '.mp3")')
=======
        var name1 = row.match(/(?<=".*",").*(?=")/)[0]
        pgmArr.push('bgm("' + name1 + '.mp3")')
>>>>>>> 837751e699e7a6f4c795b4b82284a7f699655231
    }
}
console.log(pgmArr)
