module.exports = function (row, pgmArr) {
    
    if (row.substring(0, 1) == (/[\u4e00-\u9fa5]/)) {
        
    pgmArr.push(`text(${row}")`)
    pgmArr.push(`textcl()`)

        
    return true
    }
}