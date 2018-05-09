module.exports = function (row, pgmArr) {
    if (row.substring(0, 7) == 'chara01') {
        var name = row.match(/(?<="file4",").*(?=")/)
        if (name == null || name.length == 0)
            return console.log('意外的 fg 行:' + row)
        name = name[0]
        if (name == 'none')
            return
        pgmArr.push('fgnull(1)')
        pgmArr.push(`fg("${name}.png",0,0)`)
        return true
    }
}