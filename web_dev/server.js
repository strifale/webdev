const http = require('http'); //http is a core node module

//sample data from database:
const todos = [
    { id: 1, text: 'Todo one' },
    { id: 2, text: 'Todo two' },
    { id: 3, test: 'Todo three' },
];

const server = http.createServer((req, res) => {
    //res.setHeader('Content-Type', 'application/json'); //need header type for browser to know what to render
    //res.setHeader('X-Powered-By', 'Node.js');
    const { method, url } = req;
    //res.write('Hello');
    //res.write('<h1>Hello</h1>');
        //console.log(req.headers.authorization);
    let body = [];
    req
        .on('data', (chunk) => {
        body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();

            let status = 404;
            
            const response = {
                success: false,
                data: null,
            };

            if (method === 'GET' && url === '/todos') {
                status = 200;
                response.success = true;
                response.data = todos;
            };

            res.writeHead(status, {
                'Content-Type': 'application/json',
                'X-Powered-By': 'Node.js',
            });
            //console.log(body);
            res.end(JSON.stringify(response)); //200 response
        }); 
});

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`);
});
