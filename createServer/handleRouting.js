const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req,res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain')

    if(req.url === '/'){
        res.end('Hello Vikash This is Home page')
    }else if(req.url === '/about'){
        res.end("This is about page")
    }else{
        res.end("Not Found\n")
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server listening at ${hostname} ${port}`);
})