var express = require('express'),
        app = express();
    
var path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT);
console.log('Express server started on port %s', process.env.PORT);
