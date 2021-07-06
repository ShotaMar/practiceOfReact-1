const fs = require('fs')

//同期で読み込む
const data = fs.readFileSync('sampleText/hello.txt','utf-8')
console.log(data)

//非同期で読み込む
fs.readFile('sampleText/hello.txt', 'utf-8', (err, data) =>{
    console.log(data)
})

//複数ファイル読み込み (悪い例：ネスト深くなる)
// fs.readFile('a.txt','utf-8',(err, data) =>{
//     console.log('textA:' + data)
//     fs.readFile('b.txt', 'utf-8',(err, data) =>{
//         console.log('textB:' + data)
//         fs.readFile('c.txt', 'utf-8',(err, data)=>{
//             console.log('textC:' + data)
//         })
//     })
// })

//①async/awaitでやる　←オススメ　+++++++++++++++++++++++++++++++++++
function readFileEx(fname){
    return new Promise((resolve, reject) =>{
        fs.readFile(fname, 'utf-8', (err, data) =>{
            resolve(data)
        })
    })
}

async function readAll(){
    const a = await readFileEx('sampleText/a.txt')
    console.log(a)

    const b = await readFileEx('sampleText/b.txt')
    console.log(b)

    const c = await readFileEx('sampleText/c.txt')
    console.log(c)
}

readAll()



//②promiseでやる+++++++++++++++++++++++++++++++++++
// function usePromise(fileName){
//     return new Promise(resolve =>{
//         fs.readFile(fileName, 'utf-8', (err, s) =>{
//             resolve(s)
//         })
//     })
// }
//
// usePromise('sampleText/a.txt')
//     .then(text =>{
//         console.log('textA:' + text)
//         return usePromise('sampleText/b.txt')
//     })
//     .then(text =>{
//         console.log('textB:' + text)
//         return usePromise('sampleText/c.txt')
//     })
//     .then(text =>{
//         console.log('textC:' + text)
//     })



//③generatorでやる+++++++++++++++++++++++++++++++++++
// function useGenerator(g, fname){
//     fs.readFile(fname, 'utf-8', (err, data) =>{
//         g.next(data)
//     })
// }
//
// const g = (function * (){
//     const a = yield useGenerator(g, 'sampleText/a.txt')
//     console.log(a)
//
//     const b = yield useGenerator(g, 'sampleText/b.txt')
//     console.log(b)
//
//     const c = yield useGenerator(g, 'sampleText/c.txt')
//     console.log(c)
// })()
//
// g.next()




