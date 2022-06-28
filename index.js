// To send http requests

const http= require('http');

const server=http.createServer(function(req,res){
    res.write("<h1> hey, Spoorti!!! Awsome</h1>")
    res.write("Hey yar")
    res.write(JSON.stringify({Name:"Spoorti" , AGE:"24"}))
    
    res.end(" OK end of the server request")
    
}) 

server.listen(4000)