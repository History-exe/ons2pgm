module.exports = function (row, pgmArr) {
    if (row.substring(0, 4) == 'se01') {
        var name = row.match(/(?<="file",").*(?=")/)
        if (name == null || name.length == 0)
            return console.log('意外的 se 行:' + row)
        name = name[0]
        if (name == 'none')
            return
        pgmArr.push('sound("' + name + '.mp3")')
        return true
    }
}