var fs = require('fs')

//读入cmd里的全部函数 push到funArr里
//fs.readdirSync('./cmd') 是列出cmd文件夹里的所有文件 是个数组
//for-of循环依次取这些数组元素 也就是文件名
//require引入文件
var funArr = []
for (var name of fs.readdirSync('./cmd'))
    funArr.push(require('./cmd/' + name))

//读入ons文本 转换为数组
var onsStr = fs.readFileSync('./ons.txt').toString();
var onsArr = onsStr.split('\n')

//开始翻译
var pgmArr = []
for (var i = 0; i < onsArr.length; i++) {
    var row = onsArr[i]

    //依次取所有函数执行 如果某函数返回true 则break出循环
    for (var fun of funArr)
        if (fun(row, pgmArr)) //等价于if (fun(row, pgmArr)==true)
            break
}

//暂时输出结果看看
console.log(pgmArr)
