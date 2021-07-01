const http = require('http')
const cType = {'Content-Type': 'text/html;charset=utf-8'}

const server = http.createServer(handler)
server.listen(8081)

function handler (req,res){
    const url = req.url
    if(url === '/' || url === '/index.html'){
        showIndexPage(req, res)
        return
    }

    if(url.substr(0,6) === '/dice/'){
        showDicePage(req, res)
        return
    }
    res.writeHead(404, cType)
    res.end('404 not found')
} 

function showIndexPage(req, res){
    res.writeHead(200, cType)
    const html = '<h1>サイコロページの案内</h1>\n'
                    + '<p><a href="/dice/6">６面体のサイコロ</a></p>'
                    + '<p><a href="/dice/12">12面体のサイコロ</a></p>'
    res.end(html)
}

function showDicePage(req, res){
    res.writeHead(200, cType)
    const a = req.url.split('/')
    const num = parseInt(a[2])
    const rnd = Math.floor(Math.random()*num) + 1
    res.end('<p style="font-size:72px;">' + rnd + '</p>')
}
