module.exports = function (row, pgmArr) {
    if (row.substring(0, 3) == 'bg0') {
        var name = row.match(/(?<="file",").*(?=")/)
        if (name == null || name.length == 0)
            return console.log('意外的 bg 行:' + row)
        name = name[0]
        if (name == 'none')
            return
        pgmArr.push('bgnull(1)')
        pgmArr.push(`bg("${name}.png")`)
        pgmArr.push('bgon(1)')
        return true
    }
}