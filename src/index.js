const app = require('./app')

app.listen(process.env.PORT || 3002);

console.log('server listen on port', 3002);