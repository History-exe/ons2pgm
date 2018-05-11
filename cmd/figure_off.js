module.exports = function (row, pgmArr) {
    if (row.substring(0, 22) == 'chara01 "show","false"') {
        pgmArr.push('fgcl()')
        return true
    }
    if (row.substring(0, 22) == 'chara02 "show","false"') {
        pgmArr.push('fgcl()')
        return true
    }
}