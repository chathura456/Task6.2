const http = require('http');

const options = {
    host: 'localhost',
    port: 3000,
    path: '/shutdown'
};

http.get(options, (res) => {
    console.log('Server shutdown request sent.');
    process.exit(0);
}).on('error', (err) => {
    console.error('Error sending shutdown request:', err);
    process.exit(1);
});
