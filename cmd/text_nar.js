module.exports = function (row, pgmArr) {
    if (row.substring(0, 1).search(/[\u4e00-\u9fa5]/) != -1) {
        var data = row.match(/.*/)

        pgmArr.push(`text("${data}")`)
        pgmArr.push(`textcl()`)

        return true
    }
}