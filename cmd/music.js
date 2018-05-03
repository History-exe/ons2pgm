module.exports = function (row, pgmArr) {
    if (row.substring(0, 5) == 'music') {
        var name = row.match(/(?<=".*",").*(?=")/)[0]
        pgmArr.push('bgm("' + name + '.mp3")')
    }
}