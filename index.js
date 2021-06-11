const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Build File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of File
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));