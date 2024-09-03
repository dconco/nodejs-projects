"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>Hello World</h2>');
    res.end();
});
server.listen(3000, () => console.log('Started Server at port 3000'));
