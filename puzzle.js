const http = require('http')
const path = require('path')
const fs = require('fs')

http
    .createServer(function(req,res){
        if(req.url === '/'){
            fs.readFile('./welcome.html', (err, data)=>{
                if(err){
                    console.error(err)
                }
                res.end(data)
            })
        }
    })
    .listen(5000, (err)=>{
        if(err){
            console.error(err)
        }
        console.log('server listening on port 5000')
    })