module.exports = function (row, pgmArr) {
    if (row.substring(0, 7) == 'bgmstop') {
        pgmArr.push('bgmstop()')
        return true
    }
}