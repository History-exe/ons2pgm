module.exports = function (row, pgmArr) {
    if (row.substring(0, 5) == 'music') {
        var name = row.match(/(?<="file",").*(?=")/)
        if (name == null || name.length == 0)
            return console.log('意外的 music 行:' + row)
        name = name[0]
        if (name == 'none')
            return
        pgmArr.push('bgm("' + name + '.mp3")')
    }
}