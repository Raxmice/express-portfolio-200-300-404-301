//creating http 
const http = require('http');
//for read external files 
const fs = require('fs');
//this is for access node_modules LOADASH
const _ =require('lodash')
//creating server for request and responce
const server = http.createServer((req, res)=>{
    
    //lodash
    const num = _.random(10, 20);
    console.log(num);
    const print = _.once(()=>{
        console.log('Raxmice');
    });
    print();
    print();

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    //404 page if path of exsisting is not found
    let path = './html/';
        switch(req.url){
            case '/':
                path +='index.html';
                res.statusCode = 200; //status code for successfull page 
                break;  
            case '/about':
                path +='about.html';
                res.statusCode = 200; //status code for successfull page
                break;
            case '/about-us':
                res.statusCode = 301; //status code for redirecting
                res.setHeader('Location','/about');
                res.end();
                break;
            default:
                path += '404.html';
                break;
        }

    //send an html file
        //we can use link this with tags
        //res.write('<p>hello, raxmice</p>');
        //or
        //we can use external files 
        fs.readFile(path, (err, data) =>{
            if (err) {
                console.log(err);
                res.end();
            }else{
                //res.write(data);
                //res.end();
            //now we can use these both lines as one
                res.end(data);
            }
        })
});
//server listning
server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
});