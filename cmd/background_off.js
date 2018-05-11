module.exports = function (row, pgmArr) {
    if (row.substring(0, 18) == 'bg01 "file","none"') {
        pgmArr.push('bgnull(1)')
        return true
    }
    if (row.substring(0, 18) == 'bg02 "file","none"') {
        pgmArr.push('bgnull(1)')
        return true
    }
    if (row.substring(0, 19) == 'bg01 "show","false"') {
        pgmArr.push('bgnull(1)')
        return true
    }
    if (row.substring(0, 19) == 'bg02 "show","false"') {
        pgmArr.push('bgnull(1)')
        return true
    }
}