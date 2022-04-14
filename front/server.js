const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app =express()

app.use('/', serveStatic(path.join(__dirname,'dist')))

app.set('port', process.env.PORT || 8080);
 
const server = app.listen(app.get('port'), function() {
  console.log(`App listening at http://localhost:${server.address().port}`);
});