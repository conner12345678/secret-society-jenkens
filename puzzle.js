const http = require('http')
const path = require('path')
const fs = require('fs')
http
    .createServer(function(req,res){
        if(req.url === '/'){
            fs.readFile('./01-puzzle.html', (err, data)=>{
                if(err){
                    console.error(err)
                }
                res.end(data)
            })
        }else if(req.url === '/server'){
            fs.readFile('./02-puzzle.html', (err, data)=>{
                if(err){
                    console.error(err)
                }
                res.end(data)
            })
        }else if(req.url === '/belowTheSurface'){
            fs.readFile('./03-puzzle.html', (err, data)=>{
                if(err){
                    console.error(err)
                }
                res.end(data)
            })
        }else if(req.url === '/forLoop'){
            fs.readFile('./04-puzzle.html', (err, data)=>{
                if(err){
                    console.error(err)
                }
                res.end(data)
            })
        }else if(req.url === '/css'){
            fs.readFile('./05-puzzle.html', (err, data)=>{
                if(err){
                    console.error(err)
                }
                res.end(data)
            })
        }else if(req.url === '/html'){
            fs.readFile('./06-puzzle.html', (err, data)=>{
                if(err){
                    console.error(err)
                }
                res.end(data)
            })
        }else{
            res.end('you have failed')
        }
    })
    .listen(5000, (err)=>{
        if(err){
            console.error(err)
        }
        console.log('server listening on port 5000')
    })