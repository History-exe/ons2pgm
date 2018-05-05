module.exports = function (row, pgmArr) {
    if (row.substring(0, 6) == 'quakey') {
        var name = row.match(/(?<=quakey .*,).*/)
        pgmArr.push(`quake(${name})`)
        return true
    }
    if (row.substring(0, 5) == 'quake') {
        var name = row.match(/(?<=quake .*,).*/)
        pgmArr.push(`quake(${name})`)
        return true
    }

}