module.exports = function (row, pgmArr) {

    if (row.substring(0, 18) == 'bg01 "file","none"') {
        pgmArr.push('bgnull(1)')
        return true
    }
}