module.exports = function (row, pgmArr) {

    if (row.substring(0, 22) == 'chara01 "show","false"') {
        pgmArr.push('fgcl()')
        return true
    }
}