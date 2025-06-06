
const connect = require('connect');
const http = require('http');
const url = require('url');

function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true); // true to get query as object
    const pathname = parsedUrl.pathname;

    if (pathname === '/lab3') {
        const query = parsedUrl.query;
        const method = query.method;
        const x = parseFloat(query.x);
        const y = parseFloat(query.y);

        let result;
        let operator;

        if (isNaN(x) || isNaN(y)) {
            res.end("Error: x and y must be valid numbers.");
            return;
        }

        switch (method) {
            case 'add':
                result = x + y;
                operator = '+';
                break;
            case 'subtract':
                result = x - y;
                operator = '-';
                break;
            case 'multiply':
                result = x * y;
                operator = '*';
                break;
            case 'divide':
                if (y === 0) {
                    res.end("Error: Cannot divide by zero.");
                    return;
                }
                result = x / y;
                operator = '/';
                break;
            default:
                res.end("Error: Invalid method. Use add, subtract, multiply, or divide.");
                return;
        }

        res.end(`${x} ${operator} ${y} = ${result}`);
    } else {
        res.end("Invalid path. Try /lab3.");
    }
}

const app = connect();
app.use(calculate);

http.createServer(app).listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
