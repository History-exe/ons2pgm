module.exports = function (row, pgmArr) {
    //如果这行不是需要的匹配 就返回
    if (row.search(/\[\/.*\/\].*/) == -1)
        return

    //提取说话人的名字和说的话
    var name = row.match(/(?<=\[\/).*(?=\/\].*)/)
    var data = row.match(/(?<=\[\/.*\/\]).*/)

    //如果没拿到数据 就报意外的语句 并返回假
    if (name == null || name.length == 0 || data == null || data.length == 0)
        return console.log('意外的 text_character 行:' + row)

    //取数据
    name = name[0]
    data = data[0]

    //转换成pgm的形式
    pgmArr.push(`text("${name}","${data}")`)
    pgmArr.push(`textcl()`)

    //返回真表示这个函数处理成功
    return true
}