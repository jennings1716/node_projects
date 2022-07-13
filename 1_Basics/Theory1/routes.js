const fs = require("fs")

const requestHandler = (req,res)=>{
    const url = req.url

    if(url === '/message' && req.method === 'POST'){
        let buffer = []
        req.on('data',(chunk)=>{
            buffer.push(chunk)
        })
        return req.on('end',()=>{
            const body = Buffer.concat(buffer).toString()
            const message = body.split("=")[1]
            console.log(message)
            fs.writeFile("message.txt", message,(err)=>{
                if(err){
                    res.statusCode = 500
                    return res.end()
                }
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
            
        })
    }
    if(url === '/'){
        res.setHeader('ContentType','text/html')
        res.write('<html>')
        res.write('<head><title> Enter Message </title></head>')
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"/></form></body>')
        res.write('</html>')
        return res.end()
    }

    res.setHeader('ContentType','text/html')
    res.write('<html>')
    res.write('<head><title> My First Page </title></head>')
    res.write('<body> Hello Jennings</body>')
    res.write('</html>')
    res.end()
}

module.exports = requestHandler;