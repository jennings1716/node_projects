const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == "/users"){
        res.setHeader("ContentType","text/html")
        res.write('<html>')
        res.write('<head><title> My First Page </title></head>')
        res.write('<body> ')

        res.write("<ul>")
        res.write("<li> User 1 </li>")
        res.write("<li> User 2 </li>")
        res.write("<li> User 3 </li>")
        res.write("</ul>")

        res.write("<form action='/create' method='POST'>")
        res.write("<input type='text' name='username' /> ")
        res.write("<button type='submit'> Submit </button>")
        res.write("</form>")
        
        res.write('</body> ')
        res.write('</html>')
        
        res.end();
    }

    if(req.url=='/create'){
        const buffer = []
        req.on('data',(chunks)=>{
            buffer.push(chunks)
        })

        req.on('end',()=>{
            const data = Buffer.concat(buffer).toString()
            const parseddata = data.split("=")[1]
            console.log(parseddata)
        })
        res.setHeader("ContentType","text/html")
        res.write("<h1> Got message da </h1>")
        res.end()
    }

    if(req.url == "/"){
        res.setHeader("ContentType","text/html")
        res.write("<h1> Hello da </h1>")
        res.end();
    }
});

server.listen(3000,()=>{
    console.log("Server Runs")
})