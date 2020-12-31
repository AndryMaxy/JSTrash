const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer(function(request, response) {
    const js = request.url.endsWith('js');
    const jsContentType = 'text/javascript';

    if (!js) {
        fs.readFile('index.html', function (err, html) {
            if (err) {
                console.log('error')
                throw err; 
            }       
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html); 
            response.end();
        });
    } else {
        fs.readFile(`E://MyDocs/Programming/front/public/${request.url}`, function (err, js) {
            if (err) {
                console.log('error')
                throw err; 
            }       
            response.writeHeader(200, {"Content-Type": jsContentType});  
            response.write(js); 
            response.end();
        });
    }

    
 
}).listen(8080, '127.0.0.1', () => {
    console.log('running')
});

// http.createServer(function(request, response) {  
//     response.writeHeader(200, {"Content-Type": "text/html"});  
//     response.write('qwe'); 
// }).listen(8001, '127.0.0.1', () => {
//     console.log('running')
// });