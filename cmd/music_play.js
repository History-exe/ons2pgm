module.exports = function (row, pgmArr) {
    //如果前五个字符是这个
    if (row.substring(0, 5) == 'music') {
        //用正则拿到音乐的名字
        //如果没拿到名字 就报意外的语句 并返回假
        var name = row.match(/(?<="file",").*(?=")/)
        if (name == null || name.length == 0)
            return console.log('意外的 music 行:' + row)

        //取名字
        name = name[0]

        //如果名字是none 那不是这个脚本负责是事 直接返回假
        if (name == 'none')
            return

        //转换成pgm的形式
        pgmArr.push(`bgm("${name}.mp3")`)

        //返回真表示这个函数处理成功
        return true
    }
}