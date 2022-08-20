const http = require('http'); //http is a core node module

//sample data from database:
const todos = [
    { id: 1, text: 'Todo one' },
    { id: 2, text: 'Todo two' },
    { id: 3, test: 'Todo three' },
];

const server = http.createServer((req, res) => {
    const { method, url } = req;
    let body = [];
    req
        .on('data', (chunk) => {
        //console.log(chunk.toString());
        body.push(chunk); //chunk is the input data from the request (client)
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();

            let status = 404;
            
            const response = {
                success: false,
                data: null,
                error: null
            };

            if (method === 'GET' && url === '/todos') {
                status = 200;
                response.success = true;
                response.data = todos;
            } else if(method === 'POST' && url === '/todos') {
                const {id, text} = JSON.parse(body);
                
                if (!id || !text) {
                    status = 400;
                    response.error = "Please add id and text"
                } else {
                        todos.push({id, text});
                        status = 201;
                        response.success = true;
                        response.data = todos;
                }
            }

            res.writeHead(status, {
                'X-Powered-By': 'Node.js',
                'Content-Type': 'application/json',
            });

            res.end(JSON.stringify(response)); //The JSON.stringify() method converts a JavaScript object or value to a JSON string
        }); 
});

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`);
});
